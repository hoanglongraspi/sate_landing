import { Button } from '@/components/ui/button'
import { PieChart, Brain, Timer, FileText, ChevronRight, BarChart2 } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { AnimatedElement } from '@/components/ui/AnimatedElement'

export default function AboutSection() {
  const benefits = [
    {
      icon: <Timer className="h-5 w-5" />,
      title: "Save Time",
      description: "Reduce session documentation time by up to 60% with automatic transcription and analysis."
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Improve Outcomes",
      description: "Personalize therapy with AI-powered speech pattern analysis to accelerate patient improvement."
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      title: "Data-Driven Insights",
      description: "Gain objective measurements of speech patterns with detailed analytics and 71.5% recall on mispronunciation screening."
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Streamlined Reporting",
      description: "Generate professional reports in seconds to share with patients, families, and healthcare providers."
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-24 bottom-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedElement animation="fade-in" duration={800}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Transform Speech Therapy with AI</h2>
            <Separator className="my-6 mx-auto w-20 bg-primary/50" />
            <p className="text-lg text-muted-foreground">
              SATE helps speech-language pathologists focus more on their patients and less on paperwork. 
              Our AI platform analyzes speech patterns in real-time, providing objective data and insights.
            </p>
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Dashboard */}
          <AnimatedElement animation="slide-right" duration={800} className="order-2 lg:order-1">
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-xl">
              <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-primary/10 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-accent/20 blur-xl"></div>
              
              <div className="bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="bg-card p-6 rounded-t-xl border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <BarChart2 className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Interactive Analytics Dashboard</h3>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Export</Button>
                      <Button size="sm">Multi-device</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-background">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/40 rounded-md p-4 shadow-sm">
                        <div className="text-sm text-muted-foreground mb-1">Additional Sessions</div>
                        <div className="text-xl font-bold">~1 per day</div>
                        <div className="text-xs text-primary mt-1">(20+ per month)</div>
                      </div>
                      <div className="bg-muted/40 rounded-md p-4 shadow-sm">
                        <div className="text-sm text-muted-foreground mb-1">Time Saved</div>
                        <div className="text-3xl font-bold text-primary">1 hr</div>
                        <div className="text-xs mt-1">per day per SLP</div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/40 rounded-md p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-sm font-medium">Monthly Revenue Increase</div>
                        <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">+$2,000</div>
                      </div>
                      <div className="bg-muted p-3 rounded text-center">
                        <span className="text-sm">Save 1 hour per day per SLP — enabling</span>
                        <span className="block text-lg font-bold">20+ more therapy sessions per month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Content */}
          <AnimatedElement animation="slide-left" duration={800} className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* <h3 className="text-2xl font-bold">Why Speech-Language Pathologists Choose SATE</h3> */}
              <p className="text-lg text-muted-foreground">
                Our AI platform analyzes speech patterns in real-time, providing objective data and insights 
                that enhance therapy effectiveness and lead to better patient outcomes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <AnimatedElement 
                    key={index} 
                    animation="slide-up" 
                    delay={index * 100} 
                    duration={600}
                  >
                    <div className="flex gap-4 items-start bg-card/50 p-5 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
              
              <AnimatedElement animation="fade-in" delay={400} duration={600}>
                <div className="flex justify-start pt-4">
                  <Button className="group" asChild>
                    <a href="#features" className="inline-flex items-center gap-1">
                      Explore Features
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
} 