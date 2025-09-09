import { Button } from '@/components/ui/button'
import { Play, ChevronRight, Sparkles, FileText, Zap } from 'lucide-react'
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
                      <a href="https://demo.sate.agency/">
                        <span>Watch the Demo</span>
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="group border-primary/30 hover:bg-primary/5 shadow-lg hover:shadow-xl transition-all duration-300">
                      <a href="#contact">
                        <span>Contact Us</span>
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </AnimatedElement>

                <div className="flex flex-col space-y-3 pt-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-base font-medium">Reliable Verbatim Transcription</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-base font-medium">Fully Automated Annotation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-base font-medium">Speech Analysis & Report</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Dashboard Image */}
          <AnimatedElement animation="slide-left" duration={1000} delay={200} className="mt-6 lg:mt-0">
            <div className="relative inline-block">
              {/* Main image with enhanced, beautiful gradient outline to emphasize UI */}
              <div className="relative overflow-hidden rounded-3xl bg-white border-[3px] border-blue-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                {/* Image perfectly fits the frame */}
                <img
                  src="/UI.png"
                  alt="SATE UI Interface showing speech analysis dashboard"
                  className="block max-w-full h-auto rounded-2xl relative z-10"
                />
                {/* Subtle gradient overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
              </div>

              {/* Floating badges - AI Power */}
              <div className="absolute top-2 sm:-top-4 md:-top-6 left-2 sm:-left-4 md:-left-6 z-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/80 dark:to-indigo-950/80 backdrop-blur-md border border-blue-200/80 dark:border-blue-800/50 shadow-lg shadow-blue-500/10 p-2.5 sm:p-3.5 rounded-xl scale-100 origin-top-left transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.03] group">
                <div className="flex items-center gap-2.5">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 rounded-lg flex items-center justify-center shadow-inner shadow-white/10">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">AI Power</div>
                    <div className="font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Smart Analysis</div>
                  </div>
                </div>
              </div>

              {/* Floating badges - Time Saved */}
              <div className="absolute bottom-2 sm:-bottom-4 md:-bottom-6 right-8 sm:right-16 md:right-8 z-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/80 dark:to-indigo-950/80 backdrop-blur-md border border-blue-200/80 dark:border-blue-800/50 shadow-lg shadow-blue-500/10 p-2.5 sm:p-3.5 rounded-xl scale-100 origin-bottom-right transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.03] group">
                <div className="flex items-center gap-2.5">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 rounded-lg flex items-center justify-center shadow-inner shadow-white/10">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">Time Saved</div>
                    <div className="font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hours Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        {/* Trusted by section */}
        <AnimatedElement animation="fade-in" delay={1000} duration={800}>
          <div className="mt-10 md:mt-16 text-center">
            <br></br>
            <br></br>
            
            <p className="text-sm text-muted-foreground mb-4 font-medium">Our collaborator</p>
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