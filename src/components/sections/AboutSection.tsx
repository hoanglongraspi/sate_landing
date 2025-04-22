import React from 'react';
import { Button } from '@/components/ui/button'
import { PieChart, Brain, Timer, FileText, ChevronRight, BarChart2, TrendingUp, Clock, ChartBarIcon } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { AnimatedElement } from '@/components/ui/AnimatedElement'

export default function AboutSection() {
  const benefits = [
    {
      icon: <Timer className="h-5 w-5" />,
      title: "Save Time",
      description: "Automate 80% of the workflow"
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Improve Outcomes",
      description: "AI-powered insights for personalized therapy"
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      title: "Data-Driven",
      description: "Machine learning models that achieve SOTA performance"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Instant Reports",
      description: "Professional documentation in seconds"
    }
  ]

  return (
    <section id="about" className="relative overflow-hidden pb-24">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-24 bottom-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedElement animation="fade-in" duration={800}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Transform Speech Therapy with AI</h2>
            <Separator className="my-6 mx-auto w-20 bg-primary/50" />
            <p className="text-lg text-muted-foreground">
              Focus more on patients and less on paperwork with real-time speech analysis and objective insights.
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
                <div className="bg-card p-5 rounded-t-xl border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <BarChart2 className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Export</Button>
                      <Button size="sm">View</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 bg-background">
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/40 rounded-md p-4 shadow-sm">
                        <div className="text-sm text-muted-foreground mb-1">Additional Sessions</div>
                        <div className="text-xl font-bold">20+ per month</div>
                        <div className="flex items-center text-xs text-primary mt-1">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>1 per day</span>
                        </div>
                      </div>
                      <div className="bg-muted/40 rounded-md p-4 shadow-sm">
                        <div className="text-sm text-muted-foreground mb-1">Time Saved</div>
                        <div className="text-3xl font-bold text-primary">1 hr</div>
                        <div className="text-xs mt-1">per day per SLP</div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 rounded-md p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium">Monthly Revenue</div>
                        <div className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-full">+$2,000</div>
                      </div>
                      <div className="flex items-center justify-center gap-2 py-2">
                        <BarChart2 className="h-4 w-4 text-primary" />
                        <span className="text-lg font-bold">20+ more therapy sessions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Content - Benefits section with better visual arrangement */}
          <AnimatedElement animation="slide-left" duration={800} className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <AnimatedElement 
                  key="save-time"
                  animation="slide-up" 
                  delay={0} 
                  duration={600}
                >
                  <div className="flex gap-4 items-start bg-card/50 p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                      <Timer className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Save Time</h3>
                      <p className="text-sm text-muted-foreground">Automate 80% of the workflow</p>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement 
                  key="improve-outcomes"
                  animation="slide-up" 
                  delay={100} 
                  duration={600}
                >
                  <div className="flex gap-4 items-start bg-card/50 p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                      <Brain className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Improve Outcomes</h3>
                      <p className="text-sm text-muted-foreground">AI-powered insights for personalized therapy</p>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement 
                  key="data-driven"
                  animation="slide-up" 
                  delay={200} 
                  duration={600}
                >
                  <div className="flex gap-4 items-start bg-card/50 p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                      <PieChart className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Data-Driven</h3>
                      <p className="text-sm text-muted-foreground">Machine learning models that achieve SOTA performance</p>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement 
                  key="instant-reports"
                  animation="slide-up" 
                  delay={300} 
                  duration={600}
                >
                  <div className="flex gap-4 items-start bg-card/50 p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Interactive reports</h3>
                      <p className="text-sm text-muted-foreground">Instant results with interactive reports</p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
} 