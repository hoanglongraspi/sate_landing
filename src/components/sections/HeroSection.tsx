import { Button } from '@/components/ui/button'
import { Mic, Play, FileText, ChevronRight, Sparkles } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] pt-28 md:pt-40 pb-24 md:pb-32 overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-24 top-1/3 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        
        {/* Animated elements */}
        <div className="absolute top-1/3 right-1/5 w-3 h-3 rounded-full bg-primary/70 animate-ping"></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-accent/70 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-primary/70 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-5 mx-auto px-1 sm:px-1 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:w-6/12">
            {/* <div className="inline-flex items-center gap-2 bg-muted/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-8 md:mb-10 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-medium">AI-Powered Speech Analysis</span>
            </div> */}
            
            <AnimatedElement animation="slide-right" duration={800}>
              <div className="space-y-6 md:space-y-8 max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="flex items-center gap-3 mb-1 text-primary">
                    <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
                    <span>SATE — AI</span>
                  </span>
                  <span className="text-foreground dark:text-slate-200 mb-1 block">Powers Up</span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                    Speech & Language
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                    Services
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground">
                  Revolutionizing Speech Therapy with AI-Powered Precision and Speed.
                  {/* <span className="block mt-2 font-medium text-foreground">Save 1 hour per day per SLP — enabling 20+ more therapy sessions per month.</span> */}
                </p>
                
                <AnimatedElement animation="fade-in" delay={200} duration={600}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                      <span>Request Demo</span>
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/5">
                      <Play className="h-4 w-4 text-primary" />
                      <span>Watch Video</span>
                    </Button>
                  </div>
                </AnimatedElement>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={400} duration={600}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 md:mt-10 text-sm">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <Mic className="h-4 w-4 text-primary" />
                  </div>
                  <span>Fully Automated Annotation</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-muted-foreground/30 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span>Interactive Reporting</span>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Image */}
          <AnimatedElement animation="slide-left" duration={1000} delay={200} className="lg:w-7/12 lg:pl-12 mt-8 lg:mt-0">
            {/* Highlight effect behind the image */}
            <div aria-hidden="true" className="absolute -z-10 w-[120%] h-[120%] bg-gradient-to-r from-pink-100/40 via-blue-100/40 to-purple-100/40 rounded-full blur-3xl opacity-80 animate-pulse" style={{ animationDuration: '6s' }}></div>
            
            <div className="relative p-3 bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-all duration-300 border-4 border-white/50 dark:border-white/20">
              <div className="rounded-xl overflow-hidden shadow-lg ring-4 ring-pink-100/80 dark:ring-purple-200/30">
                <img 
                  src="/UI.png" 
                  alt="SATE UI Interface showing speech analysis dashboard" 
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl" 
                />
              </div>
              
              {/* Accent elements */}
              <div aria-hidden="true" className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-blue-100/80 blur-xl"></div>
              <div aria-hidden="true" className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-pink-100/80 blur-xl"></div>
              
              {/* Floating badges */}
              <AnimatedElement animation="slide-down" delay={600} duration={600} className="absolute top-0 left-0 sm:-top-6 sm:-left-6 transform translate-y-[-50%] translate-x-[10%] sm:translate-y-0 sm:translate-x-0 z-10">
                <div className="bg-background border-2 border-primary/40 shadow-md p-2.5 rounded-lg flex items-center gap-2.5 max-w-[160px]">
                  <div className="p-1.5 rounded-full bg-primary/10 flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">AI Power</div>
                    <div className="text-sm font-bold">Smart Analysis</div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={800} duration={600} className="absolute bottom-0 right-0 sm:-bottom-6 sm:right-10 transform translate-y-[50%] translate-x-[-10%] sm:translate-y-0 sm:translate-x-0 z-10">
                <div className="bg-background border-2 border-blue-200 shadow-lg p-3 rounded-lg max-w-[180px]">
                  <div className="text-xs font-medium mb-1">Time Saved</div>
                  <div className="text-sm font-bold">60+ min/day</div>
                </div>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
        
        {/* Trusted by section */}
        <AnimatedElement animation="fade-in" delay={1000} duration={800}>
          <div className="mt-16 md:mt-20 text-center">
            <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by leading institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {['Buffalo Public Schools', 'John R. Oishei Children\'s Hospital', 'DENT Neurologic Institute', 'University at Buffalo'].map((org, index) => (
                <AnimatedElement 
                  key={index} 
                  animation="fade-in" 
                  delay={1200 + index * 100} 
                  duration={600}
                >
                  <div className="h-12 flex items-center px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg shadow-sm border border-muted/30">
                    <span className="font-medium text-foreground/80">{org}</span>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
} 