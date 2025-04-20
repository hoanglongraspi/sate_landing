import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface AnimatedElementProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The animation effect to apply
   */
  animation?: 
    | "fade-in" 
    | "slide-up" 
    | "slide-down" 
    | "slide-left" 
    | "slide-right" 
    | "zoom-in" 
    | "flip";
  /**
   * Animation delay in milliseconds
   */
  delay?: number;
  /**
   * Animation duration in milliseconds
   */
  duration?: number;
  /**
   * Animation easing function
   */
  easing?: string;
  /**
   * Only animate once when element comes into view
   */
  triggerOnce?: boolean;
  /**
   * Intersection observer threshold (0-1)
   */
  threshold?: number;
  /**
   * Intersection observer root margin
   */
  rootMargin?: string;
}

const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(
  ({ 
    children, 
    animation = "fade-in", 
    delay = 0, 
    duration = 600, 
    easing = "cubic-bezier(0.4, 0, 0.2, 1)",
    triggerOnce = true,
    threshold = 0.1,
    rootMargin = "0px",
    className, 
    ...props 
  }, forwardedRef) => {
    const { ref, isVisible } = useScrollAnimation({
      threshold,
      rootMargin,
      triggerOnce,
    });

    // Base transition style
    const transitionStyle = {
      transitionProperty: "opacity, transform",
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: easing,
      transitionDelay: `${delay}ms`,
    };

    // Animation styles based on the selected animation type
    let initialStyles = {};
    
    switch (animation) {
      case "fade-in":
        initialStyles = { opacity: 0 };
        break;
      case "slide-up":
        initialStyles = { opacity: 0, transform: "translateY(50px)" };
        break;
      case "slide-down":
        initialStyles = { opacity: 0, transform: "translateY(-50px)" };
        break;
      case "slide-left":
        initialStyles = { opacity: 0, transform: "translateX(50px)" };
        break;
      case "slide-right":
        initialStyles = { opacity: 0, transform: "translateX(-50px)" };
        break;
      case "zoom-in":
        initialStyles = { opacity: 0, transform: "scale(0.8)" };
        break;
      case "flip":
        initialStyles = { opacity: 0, transform: "perspective(400px) rotateX(90deg)" };
        break;
      default:
        initialStyles = { opacity: 0 };
    }

    // Apply styles based on visibility
    const animationStyles = isVisible ? {} : initialStyles;

    return (
      <div
        ref={(node) => {
          // Handle both refs
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
          ref.current = node;
        }}
        className={cn(className)}
        style={{
          ...transitionStyle,
          ...animationStyles,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedElement.displayName = "AnimatedElement";

export { AnimatedElement }; 