import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  decorative?: boolean
}

export function SectionDivider({ className, decorative = true }: SectionDividerProps) {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-8">
      <div className="relative">
        <div className={cn("h-px w-full bg-gradient-to-r from-transparent via-border/70 to-transparent", className)}></div>
        
        {decorative && (
          <>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
              <div className="absolute inset-0 bg-background rounded-full border border-border/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/70"></div>
              </div>
            </div>
            <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/30"></div>
            <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/30"></div>
          </>
        )}
      </div>
    </div>
  )
} 