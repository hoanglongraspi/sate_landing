import { cn } from "@/lib/utils"
import React from "react"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "muted" | "primary" | "accent"
}

export function SectionContainer({ 
  children, 
  className,
  variant = "default" 
}: SectionContainerProps) {
  const variants = {
    default: "bg-transparent",
    muted: "bg-muted/30",
    primary: "bg-primary/5",
    accent: "bg-accent/5"
  }

  return (
    <div className={cn(
      "relative overflow-hidden py-16 md:py-24",
      variants[variant],
      className
    )}>
      {/* Decorative elements based on variant */}
      {variant !== "default" && (
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -left-24 top-1/3 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
      )}
      
      {children}
    </div>
  )
} 