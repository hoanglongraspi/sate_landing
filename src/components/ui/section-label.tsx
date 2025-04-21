import { cn } from "@/lib/utils"

interface SectionLabelProps {
  title: string
  className?: string
}

export function SectionLabel({ title, className }: SectionLabelProps) {
  return (
    <div className="container max-w-7xl mx-auto px-6 mb-8">
      <div className="flex items-center gap-4">
        <div className={cn("inline-flex items-center gap-2 py-2 px-4 bg-primary/10 rounded-full text-primary font-medium", className)}>
          <span className="block w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-base">{title}</span>
        </div>
        <div className="h-px flex-grow bg-gradient-to-r from-primary/30 to-transparent"></div>
      </div>
    </div>
  )
} 