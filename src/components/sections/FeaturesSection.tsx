import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, FileText, Mic, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from '@/components/ui/AnimatedElement'

const features = [
  {
    title: "Auto-Transcription",
    description: "Automatically transcribes recorded speech to text for clinical documentation.",
    icon: Mic
  },
  {
    title: "Multi-Layer Annotation",
    description: "Three-layered annotation system that identifies various speech patterns and issues.",
    icon: Check
  },
  {
    title: "Interactive Clinical Reports",
    description: "Instantly generate interactive clinical reports with comprehensive speech metrics.",
    icon: FileText
  }
]

const analysisFeatures = [
  "Mispronunciations",
  "Unusual Pauses",
  "Filler Words",
  "Repetition",
  "Grammar Checks",
  "Speaker Diarization",
  "Syllable Structure"
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="fade-in" duration={800}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How SATE Helps SLPs</h2>
            <Separator className="my-6 mx-auto w-20 bg-primary/50" />
            <p className="text-lg text-muted-foreground">
              Our platform auto‑transcribes, multi‑layer‑annotates, and instantly generates an interactive clinical report. 
              It's fully automated, clinically aligned, and requires zero specialized hardware.
            </p>
          </div>
        </AnimatedElement>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <AnimatedElement 
              key={feature.title} 
              animation="slide-up" 
              delay={index * 100} 
              duration={600}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-2 relative z-10">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-sm">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* Sample Analysis UI */}
        <div className="mb-20">
          <AnimatedElement animation="fade-in" duration={800}>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-2xl font-bold">Interactive Dashboard</h3>
              <p className="text-muted-foreground mt-2">
                Visualize speech patterns with our intuitive analytics dashboard
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="zoom-in" duration={800} delay={100}>
            <div className="rounded-lg border overflow-hidden bg-card shadow mb-8">
              <div className="p-4 bg-muted/30 border-b flex justify-between items-center">
                <h3 className="text-lg font-medium">Speech Analysis Dashboard</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Export PDF</Button>
                  <Button size="sm">Share Report</Button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatedElement animation="slide-right" duration={700} delay={200}>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Total Issues</h4>
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-bold">12</span>
                          <span className="text-sm text-muted-foreground pb-1">issues detected</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Speaking Rate</h4>
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-bold">100</span>
                          <span className="text-sm text-muted-foreground pb-1">words per minute</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Session Details</h4>
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <div className="flex justify-between text-sm">
                            <span>Duration</span>
                            <span className="font-medium">2 min</span>
                          </div>
                          <div className="flex justify-between text-sm mt-2">
                            <span>Words Analyzed</span>
                            <span className="font-medium">100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                  
                  <AnimatedElement animation="slide-left" duration={700} delay={200}>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium mb-2">Top Issues</h4>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Pauses</span>
                          <span className="font-medium">4</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-chart-3 w-3/3 rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Filler words</span>
                          <span className="font-medium">3</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-accent w-3/4 rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Pronunciation</span>
                          <span className="font-medium">3</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-destructive/60 w-3/4 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Grammar</span>
                          <span className="font-medium">2</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-1/2 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
} 