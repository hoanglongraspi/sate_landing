import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, FileText, Mic, BarChart2, Zap, Clock, List, Clock5 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const features = [
  {
    title: "Auto-Transcription",
    description: "Instant speech-to-text with AI accuracy",
    icon: Mic
  },
  {
    title: "Smart Annotation",
    description: "Automated speech pattern detection",
    icon: Check
  },
  {
    title: "Interactive Reports",
    description: "One-click comprehensive clinical reports",
    icon: FileText
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="fade-in" duration={800}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How SATE Helps SLPs</h2>
            <Separator className="my-6 mx-auto w-20 bg-primary/50" />
            <p className="text-lg text-muted-foreground">
              Fully automated speech analysis with zero specialized hardware needed.
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
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 overflow-hidden relative group h-full">
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

        {/* Speech Analysis UI */}
        <div className="mb-20">
          <AnimatedElement animation="fade-in" duration={800}>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-2xl font-bold">Detailed Speech Analysis</h3>
              <p className="text-muted-foreground mt-2">
                Identify specific speech issues with timestamps for targeted therapy
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="zoom-in" duration={800} delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl border overflow-hidden bg-background shadow-md">
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-4">Speech Analysis</h2>
                  
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/30 p-1 rounded-full">
                      <TabsTrigger value="overview" className="rounded-full">Overview</TabsTrigger>
                      <TabsTrigger value="issues" className="rounded-full">Issues</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview">
                      <div className="space-y-8">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Total Issues */}
                          <div className="bg-muted/30 rounded-xl p-6">
                            <h3 className="text-xl mb-3">Total Issues</h3>
                            <div className="flex items-center gap-3">
                              <List className="h-6 w-6 text-muted-foreground" />
                              <span className="text-5xl font-bold">12</span>
                            </div>
                          </div>
                          
                          {/* Duration */}
                          <div className="bg-muted/30 rounded-xl p-6">
                            <h3 className="text-xl mb-3">Duration</h3>
                            <div className="flex items-center gap-3">
                              <Clock className="h-6 w-6 text-muted-foreground" />
                              <span className="text-5xl font-bold">5:41</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Top Issues */}
                        <div>
                          <h3 className="text-2xl font-bold mb-5">Top Issues</h3>
                          
                          <div className="space-y-5">
                            {/* Syllable */}
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-xl">Mispronunciation</span>
                                <span className="text-xl text-muted-foreground">3</span>
                              </div>
                              <div className="h-3 bg-pink-100 rounded-full w-full"></div>
                            </div>
                            
                            {/* Filler words */}
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-xl">Filler words</span>
                                <span className="text-xl text-muted-foreground">3</span>
                              </div>
                              <div className="h-3 bg-orange-100 rounded-full w-full"></div>
                            </div>
                            
                            {/* Grammar */}
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-xl">Grammar</span>
                                <span className="text-xl text-muted-foreground">2</span>
                              </div>
                              <div className="h-3 bg-teal-100 rounded-full w-3/4"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Speech rate */}
                        <div>
                          <h3 className="text-2xl font-bold mb-5">Speech rate</h3>
                          <div className="bg-muted/30 rounded-xl p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-bold">100</span>
                                <span className="text-xl">wpm</span>
                              </div>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                                Good
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="issues">
                      <div className="space-y-8">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                            <div className="h-6 w-6 rounded-full bg-pink-300"></div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="text-3xl font-bold">Mispronunciation</h3>
                              <span className="text-lg font-bold bg-pink-100 text-foreground px-3 py-1 rounded-full">3</span>
                            </div>
                            
                            <p className="text-xl mb-6 text-muted-foreground">
                              Words or sounds that are pronounced incorrectly, affecting clarity.
                            </p>
                            
                            <div className="space-y-6">
                              <div className="border-t pt-6">
                                <div className="flex justify-between items-center mb-2">
                                  <h4 className="text-2xl">communimacation</h4>
                                  <span className="text-blue-500">0:17 - 0:20</span>
                                </div>
                              </div>
                              
                              <div className="border-t pt-6">
                                <div className="flex justify-between items-center mb-2">
                                  <h4 className="text-2xl">nervo</h4>
                                  <span className="text-blue-500">1:36 - 1:39</span>
                                </div>
                              </div>
                              
                              <div className="border-t pt-6">
                                <div className="flex justify-between items-center mb-2">
                                  <h4 className="text-2xl">definately</h4>
                                  <span className="text-blue-500">2:15 - 2:18</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
} 