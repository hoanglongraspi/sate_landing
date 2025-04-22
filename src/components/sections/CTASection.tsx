import { Button } from '@/components/ui/button'
import { FileText, Mic, Send, Sparkles, Zap, Users, Play } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { AnimatedElement } from '@/components/ui/AnimatedElement'

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />
      
      {/* Animated elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 right-1/5 w-2 h-2 rounded-full bg-accent/40 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedElement animation="fade-in" duration={800}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Get Started</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Practice</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join SLPs who save time and provide better care with SATE
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
            {/* Form */}
            <AnimatedElement animation="slide-right" duration={800} delay={200} className="lg:col-span-3">
              <div className="bg-card border rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="text-muted-foreground mb-6">
                  See SATE in action with a personalized demo tailored to your needs.
                </p>
                
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" placeholder="Your Organization" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input id="role" placeholder="Your Role" />
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 group border-primary text-primary hover:border-primary hover:text-primary hover:bg-primary/10"
                    >
                      <a href="/contact">
                        <span>Contact Us</span>
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>

                    <Button asChild size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 group">
                      <a href="https://satedemo.vercel.app/">
                        <span>Watch the Demo</span>
                        <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </form>
              </div>
            </AnimatedElement>

            {/* Features */}
            <AnimatedElement animation="slide-left" duration={800} delay={300} className="lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Benefits</h3>
                
                <div className="space-y-4">
                  <AnimatedElement animation="fade-in" delay={400} duration={600}>
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border">
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Save 60 min/day</h4>
                        <p className="text-sm text-muted-foreground">Automated speech analysis</p>
                      </div>
                    </div>
                  </AnimatedElement>
                  
                  <AnimatedElement animation="fade-in" delay={500} duration={600}>
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border">
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">$2,000+/month</h4>
                        <p className="text-sm text-muted-foreground">Additional revenue</p>
                      </div>
                    </div>
                  </AnimatedElement>
                  
                  <AnimatedElement animation="fade-in" delay={600} duration={600}>
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border">
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Better Patient Care</h4>
                        <p className="text-sm text-muted-foreground">Focus on therapy, not paperwork</p>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
                
                <AnimatedElement animation="fade-in" delay={700} duration={600}>
                  <div className="pt-2">
                    <Separator className="my-4" />
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <p className="text-sm">No credit card required</p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="fade-in" delay={800} duration={800}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-lg">
                <span className="text-primary font-medium">SATE:</span>
                <span>The future of speech-language services</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
} 