import { Button } from '@/components/ui/button'
import { Play, ChevronRight, Sparkles, FileText } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
         <div className="absolute -left-24 top-2/3 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative z-5 mx-auto px-6 sm:px-8 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-18 items-center">
          {/* Content */}
          <div className="lg:w-8/12">
            <AnimatedElement animation="slide-right" duration={800}>
              <div className="space-y-5 md:space-y-7">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span>Powers Up</span>
                  <div className="text-primary">
                    <span>Speech & Language</span>
                    <span className="block">Services</span>
                  </div>
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  Revolutionizing Speech Therapy with AI-Powered Precision and Speed.
                </p>
                
                <AnimatedElement animation="fade-in" delay={200} duration={600}>
                  <div className="flex flex-col sm:flex-row gap-4 pt-1">
                    <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                      <a href="#cta">
                        <span>Request Demo</span>
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/5">
                      <a href="#">
                        <Play className="h-4 w-4 text-primary" />
                        <span>Watch Video</span>
                      </a>
                    </Button>
                  </div>
                </AnimatedElement>

                <div className="flex gap-6 pt-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-primary" size={16} />
                    <span className="text-sm">Fully Automated Annotation</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-muted"></div>
                  <div className="flex items-center gap-1.5">
                    <FileText className="h-4 w-4 text-primary" size={16} />
                    <span className="text-sm">Interactive Reporting</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Dashboard Image */}
          <AnimatedElement animation="slide-left" duration={1000} delay={200} className="lg:w-7/12 mt-6 lg:mt-0">
            <div className="relative">
              {/* Main image with enhanced, beautiful gradient outline to emphasize UI */}
              <div className="relative p-[3px] overflow-hidden rounded-xl bg-gradient-to-r from-blue-300/70 via-purple-300/70 to-pink-300/70 shadow-[0_5px_30px_rgba(100,100,255,0.3)]">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-300/20 via-purple-300/20 to-pink-300/20 rounded-xl opacity-70 animate-pulse-slow"></div>
                
                {/* Inner glow */}
                <div className="absolute inset-[1px] rounded-lg bg-white"></div>
                
                {/* Image */}
                <img 
                  src="/UI.png" 
                  alt="SATE UI Interface showing speech analysis dashboard" 
                  className="w-full h-auto rounded-lg relative z-10" 
                />
                
                {/* Shine effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl opacity-30 animate-shine"></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 z-20 bg-white/95 dark:bg-background border border-gray-200 shadow-lg p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-xs">AI Power</div>
                    <div className="font-medium">Smart Analysis</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 right-10 z-20 bg-white/95 dark:bg-background border border-gray-200 shadow-lg p-3 rounded-lg">
                <div>
                  <div className="text-xs">Time Saved</div>
                  <div className="font-medium">60+ min/day</div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        {/* Trusted by section */}
        <AnimatedElement animation="fade-in" delay={1000} duration={800}>
          <div className="mt-10 md:mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4 font-medium">Trusted by leading institutions</p>
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