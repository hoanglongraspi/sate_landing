import { Separator } from "@/components/ui/separator"
import { Check, X, Building2, Trophy, Medal, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimatedElement } from "@/components/ui/AnimatedElement"

export default function TestimonialsSection() {
  const comparisonData = [
    {
      criteria: "Automation",
      sate: true,
      salt: false,
      clan: false
    },
    {
      criteria: "Intuition",
      sate: true,
      salt: false,
      clan: false
    },
    {
      criteria: "Professional",
      sate: true,
      salt: true,
      clan: true
    },
    {
      criteria: "Analysis Report",
      sate: true,
      salt: true,
      clan: true
    },
    {
      criteria: "Interactive Panel",
      sate: true,
      salt: false,
      clan: false
    },
    {
      criteria: "Multi‑device Collaboration",
      sate: true,
      salt: false,
      clan: false
    }
  ];

  return (
    <section id="why-sate" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-32 bottom-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedElement animation="fade-in" duration={800}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why SATE?</h2>
            <Separator className="my-6 mx-auto w-20 bg-primary/50" />
            <p className="text-lg text-muted-foreground">
              Compare SATE with other speech analysis tools on the market and discover
              why speech-language pathologists choose our platform.
            </p>
          </div>
        </AnimatedElement>

        {/* Comparison Table */}
        <div className="mb-20">
          <AnimatedElement animation="fade-in" duration={800} delay={200}>
            <h3 className="text-2xl font-bold text-center mb-10">How SATE Compares</h3>
          </AnimatedElement>
          
          <AnimatedElement animation="zoom-in" duration={800} delay={300}>
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 bg-muted/50 border-b p-4">
                <div className="font-semibold text-lg">Tool</div>
                <div className="font-semibold text-lg text-primary text-center">SATE</div>
                <div className="font-semibold text-lg text-center">SALT</div>
                <div className="font-semibold text-lg text-center">CLAN</div>
              </div>
              
              <div className="divide-y">
                {comparisonData.map((row, index) => (
                  <AnimatedElement key={row.criteria} animation="fade-in" delay={400 + index * 100} duration={600}>
                    <div className="grid grid-cols-4 p-4 items-center hover:bg-muted/20 transition-colors">
                      <div className="font-medium">{row.criteria}</div>
                      <div className="flex justify-center">
                        {row.sate ? (
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            <X className="h-5 w-5 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center">
                        {row.salt ? (
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            <X className="h-5 w-5 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center">
                        {row.clan ? (
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            <X className="h-5 w-5 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        {/* Market Opportunity */}
        <div className="mb-16">
          <AnimatedElement animation="fade-in" duration={800} delay={100}>
            <h3 className="text-2xl font-bold text-center mb-10">Market Opportunity</h3>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-up" duration={800} delay={200}>
              <div className="bg-card border p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-xs font-normal">Global Market</Badge>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">$11.2B</div>
                <div className="text-muted-foreground">Speech Therapy Market Size</div>
                <div className="text-sm text-primary font-medium mt-2">CAGR: 6.5%</div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" duration={800} delay={300}>
              <div className="bg-card border p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-xs font-normal">U.S. Market</Badge>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">$4.91B</div>
                <div className="text-muted-foreground">Annual Value</div>
                <div className="text-sm text-primary font-medium mt-2">CAGR: 6.9%</div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" duration={800} delay={400}>
              <div className="bg-card border p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Medal className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-xs font-normal">Target Audience</Badge>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">200,000+</div>
                <div className="text-muted-foreground">Speech-Language Pathologists</div>
                <div className="text-sm mt-2">Across various healthcare settings</div>
              </div>
            </AnimatedElement>
          </div>
        </div>
        
        {/* Research Backing */}
        <AnimatedElement animation="fade-in" duration={800} delay={500}>
          <div className="bg-card rounded-xl border p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">Backed by Research</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedElement animation="slide-right" duration={700} delay={600}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium mb-1">UB AI Institute for Exceptional Education</p>
                      <p className="text-sm text-muted-foreground">Developed with leading researchers in speech pathology and AI</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <path d="M14 2v6h6"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                        <path d="M10 9H8"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Published Research</p>
                      <p className="text-sm text-muted-foreground">IEEE/ACM ICHI 2024 - Leading conference in healthcare informatics</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-left" duration={700} delay={600}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                        <path d="M8.5 9.5 6 11V7l2.5 1.5"></path>
                        <path d="M15.5 9.5 18 11V7l-2.5 1.5"></path>
                        <path d="M20 14v3a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-3"></path>
                        <path d="M15 6.1c.3-.1.5-.1.8-.1h1.4c1.7 0 2.8 1.3 2.8 3v1"></path>
                        <path d="M9 6.1c-.3-.1-.5-.1-.8-.1H6.8C5.1 6 4 7.3 4 9v1"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Patented Technology</p>
                      <p className="text-sm text-muted-foreground">Patent filed (UB 030-7620) for our unique speech analysis algorithms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M3 5v14"></path>
                        <path d="M21 19V5a2 2 0 0 0-2-2H9.5a3 3 0 0 0-3 3v13"></path>
                        <path d="M9 21h12"></path>
                        <path d="M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                        <path d="M3 12h6"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Clinical Partnerships</p>
                      <p className="text-sm text-muted-foreground">Working with Buffalo Public Schools, Oishei Children's Hospital, and DENT Neurologic Institute</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
} 