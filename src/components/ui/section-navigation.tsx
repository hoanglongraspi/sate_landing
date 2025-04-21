import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface SectionNavigationProps {
  sections: {
    id: string
    label: string
  }[]
  className?: string
}

export function SectionNavigation({ sections, className }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [sections])

  return (
    <div className={cn(
      "fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-3",
      className
    )}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group relative flex items-center"
          aria-label={`Navigate to ${section.label} section`}
        >
          <span className="absolute right-full mr-2 py-1 px-2 rounded-md bg-background border shadow-sm text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {section.label}
          </span>
          <div 
            className={cn(
              "w-3 h-3 rounded-full border border-primary/50 transition-all duration-300",
              activeSection === section.id
                ? "bg-primary scale-100"
                : "bg-background hover:bg-primary/30 scale-75 hover:scale-90"
            )}
          />
        </a>
      ))}
    </div>
  )
} 