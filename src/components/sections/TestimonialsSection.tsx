import { Separator } from "@/components/ui/separator"
import { Shield, Building2, Trophy, Medal, Lightbulb, BookOpen, Microscope, Hospital, Zap, BarChart3, Layers, Clock, Users, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimatedElement } from '@/components/ui/AnimatedElement'

export default function TestimonialsSection() {
  // Key benefits organized by category
  const keyBenefits = {
    efficiency: [
      {
        title: "Save 60+ Minutes Daily",
        description: "Automated transcription and analysis reduce documentation time",
        icon: Clock
      },
      {
        title: "Treat More Patients",
        description: "Enable 20+ additional therapy sessions per month",
        icon: Users
      }
    ],
    technology: [
      {
        title: "AI-Powered Analysis",
        description: "Real-time speech pattern recognition with 71.5% accuracy",
        icon: Zap
      },
      {
        title: "Multi-Layer Annotation",
        description: "Three-tier analysis for comprehensive speech assessment",
        icon: Layers
      }
    ],
    clinical: [
      {
        title: "Interactive Reports",
        description: "Dynamic visualizations and shareable clinical documentation",
        icon: FileText
      },
      {
        title: "Evidence-Based Insights",
        description: "Objective measurements to enhance therapy effectiveness",
        icon: BarChart3
      }
    ]
  };

  return (
    <section id="why-sate" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-32 bottom-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedElement animation="fade-in" duration={800}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why SATE?</h2>
            <Separator className="my-6 mx-auto w-20 bg-primary/50" />
            <p className="text-lg text-muted-foreground">
              Our AI-powered platform transforms speech therapy with automation, precision, and clinical insight
            </p>
          </div>
        </AnimatedElement>

        {/* Key Benefits Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Efficiency Benefits */}
            <AnimatedElement animation="fade-in" duration={800} delay={200}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-green-100 text-green-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">Time & Efficiency</h3>
                </div>
                
                <div className="space-y-4">
                  {keyBenefits.efficiency.map((benefit, index) => (
                    <div key={index} className="bg-card border rounded-lg p-5 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-green-50 text-green-600 flex-shrink-0 mt-1">
                          <benefit.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{benefit.title}</h4>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <div className="flex items-center gap-2 text-green-800 font-medium mb-1">
                    <Shield className="h-4 w-4" />
                    <span>Time Savings Impact</span>
                  </div>
                  <p className="text-sm text-green-700">SLPs can generate $2,000+ in additional monthly revenue by treating more patients</p>
                </div>
              </div>
            </AnimatedElement>
            
            {/* Technology Benefits */}
            <AnimatedElement animation="fade-in" duration={800} delay={300}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">Advanced Technology</h3>
                </div>
                
                <div className="space-y-4">
                  {keyBenefits.technology.map((benefit, index) => (
                    <div key={index} className="bg-card border rounded-lg p-5 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-blue-50 text-blue-600 flex-shrink-0 mt-1">
                          <benefit.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{benefit.title}</h4>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-800 font-medium mb-1">
                    <Shield className="h-4 w-4" />
                    <span>Technology Edge</span>
                  </div>
                  <p className="text-sm text-blue-700">Patented speech analysis algorithms provide unmatched accuracy and insight</p>
                </div>
              </div>
            </AnimatedElement>
            
            {/* Clinical Benefits */}
            <AnimatedElement animation="fade-in" duration={800} delay={400}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">Clinical Excellence</h3>
                </div>
                
                <div className="space-y-4">
                  {keyBenefits.clinical.map((benefit, index) => (
                    <div key={index} className="bg-card border rounded-lg p-5 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-purple-50 text-purple-600 flex-shrink-0 mt-1">
                          <benefit.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{benefit.title}</h4>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                  <div className="flex items-center gap-2 text-purple-800 font-medium mb-1">
                    <Shield className="h-4 w-4" />
                    <span>Patient Outcomes</span>
                  </div>
                  <p className="text-sm text-purple-700">Enhanced therapy effectiveness through data-driven personalization</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
        
        {/* Market Stats */}
        <div className="mb-16">
          <AnimatedElement animation="fade-in" duration={800} delay={200}>
            <h3 className="text-2xl font-bold text-center mb-8">Market Opportunity</h3>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedElement animation="slide-up" duration={800} delay={200}>
              <div className="bg-card border p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center">
                <div className="p-2 rounded-full bg-primary/10 text-primary mb-3">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">$11.2B</div>
                <div className="text-muted-foreground text-sm">Speech Therapy Market</div>
                <div className="text-xs bg-primary/5 px-2 py-1 rounded-full mt-2">CAGR: 6.5%</div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" duration={800} delay={300}>
              <div className="bg-card border p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center">
                <div className="p-2 rounded-full bg-primary/10 text-primary mb-3">
                  <Trophy className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">$4.91B</div>
                <div className="text-muted-foreground text-sm">U.S. Market Value</div>
                <div className="text-xs bg-primary/5 px-2 py-1 rounded-full mt-2">CAGR: 6.9%</div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" duration={800} delay={400}>
              <div className="bg-card border p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center">
                <div className="p-2 rounded-full bg-primary/10 text-primary mb-3">
                  <Medal className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">200,000+</div>
                <div className="text-muted-foreground text-sm">SLPs Nationwide</div>
                <div className="text-xs mt-2">Target Audience</div>
              </div>
            </AnimatedElement>
          </div>
        </div>
        
        {/* Research-Backed Section */}
        <div className="mb-16">
          <AnimatedElement animation="fade-in" duration={700} delay={600}>
            <div className="bg-card rounded-xl border p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold">Backed by Research</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-500 mt-1">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L2 9.5L12 15L22 9.5L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 12V18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 12V18.5C5 18.5 5 21 12 21C19 21 19 18.5 19 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">UB AI Institute for Exceptional Education</h4>
                      <p className="text-muted-foreground text-sm">Developed with leading researchers in speech pathology and AI</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-blue-500 mt-1">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Published Research</h4>
                      <p className="text-muted-foreground text-sm">IEEE/ACM ICHI 2024 - Leading conference in healthcare informatics</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-500 mt-1">
                      <Microscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Patented Technology</h4>
                      <p className="text-muted-foreground text-sm">Patent filed (UB 030-7620) for our unique speech analysis algorithms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-blue-500 mt-1">
                      <Hospital className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Clinical Partnerships</h4>
                      <p className="text-muted-foreground text-sm">Working with Buffalo Public Schools, Oishei Children's Hospital, and DENT Neurologic Institute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        {/* Testimonials section is commented out based on user's changes */}
      </div>
    </section>
  )
} 