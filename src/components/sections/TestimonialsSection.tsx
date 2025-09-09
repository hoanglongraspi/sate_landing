import { Separator } from "@/components/ui/separator"
import { Shield, Building2, Trophy, Medal, Lightbulb, BookOpen, Microscope, Hospital, Zap, BarChart3, Layers, Clock, Users, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimatedElement } from '@/components/ui/AnimatedElement'

export default function TestimonialsSection() {
  // Key benefits organized by category
  const keyBenefits = {
    efficiency: [
      {
        title: "Save Time Daily",
        description: "Automated transcription and analysis reduce documentation time",
        icon: Clock
      },
      {
        title: "Treat More Patients",
        description: "Enable additional therapy sessions per month",
        icon: Users
      }
    ],
    technology: [
      {
        title: "AI-Powered Analysis",
        description: "Real-time speech pattern recognition with high accuracy",
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
    <section id="why-sate" className="relative overflow-hidden py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-32 bottom-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <AnimatedElement animation="fade-in" duration={800}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why SATE?</h2>
            <Separator className="my-6 mx-auto w-32 bg-primary/60 h-1 rounded-full" />
            <p className="text-lg text-muted-foreground">
              Our AI-powered platform transforms speech therapy with automation, precision, and clinical insight
            </p>
          </div>
        </AnimatedElement>

        {/* Key Benefits Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Efficiency Benefits */}
            <AnimatedElement animation="fade-in" duration={800} delay={200}>
              <div className="h-full flex flex-col space-y-6 bg-gradient-to-b from-green-50 to-transparent p-6 rounded-2xl border border-green-100">
                <div className="flex items-center gap-3 pb-3 border-b border-green-100">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">Time & Efficiency</h3>
                </div>
                
                <div className="flex-1 space-y-4">
                  {keyBenefits.efficiency.map((benefit, index) => (
                    <div key={index} className="bg-white border border-green-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-green-50 text-green-600 flex-shrink-0 mt-1">
                          <benefit.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1 text-green-800">{benefit.title}</h4>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-100 rounded-lg p-5 border border-green-200 shadow-inner mt-auto">
                  <div className="flex items-center gap-2 text-green-800 font-bold mb-2">
                    <Shield className="h-5 w-5" />
                    <span>Time Savings Impact</span>
                  </div>
                  <p className="text-green-700">SLPs can generate additional revenue by treating more patients</p>
                </div>
              </div>
            </AnimatedElement>
            
            {/* Technology Benefits */}
            <AnimatedElement animation="fade-in" duration={800} delay={300}>
              <div className="h-full flex flex-col space-y-6 bg-gradient-to-b from-blue-50 to-transparent p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 pb-3 border-b border-blue-100">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">Advanced Technology</h3>
                </div>
                
                <div className="flex-1 space-y-4">
                  {keyBenefits.technology.map((benefit, index) => (
                    <div key={index} className="bg-white border border-blue-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-blue-50 text-blue-600 flex-shrink-0 mt-1">
                          <benefit.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1 text-blue-800">{benefit.title}</h4>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-100 rounded-lg p-5 border border-blue-200 shadow-inner mt-auto">
                  <div className="flex items-center gap-2 text-blue-800 font-bold mb-2">
                    <Shield className="h-5 w-5" />
                    <span>Technology Edge</span>
                  </div>
                  <p className="text-blue-700">Patented speech analysis algorithms provide unmatched accuracy</p>
                </div>
              </div>
            </AnimatedElement>
            
            {/* Clinical Benefits */}
            <AnimatedElement animation="fade-in" duration={800} delay={400}>
              <div className="h-full flex flex-col space-y-6 bg-gradient-to-b from-purple-50 to-transparent p-6 rounded-2xl border border-purple-100">
                <div className="flex items-center gap-3 pb-3 border-b border-purple-100">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">Clinical Excellence</h3>
                </div>
                
                <div className="flex-1 space-y-4">
                  {keyBenefits.clinical.map((benefit, index) => (
                    <div key={index} className="bg-white border border-purple-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-purple-50 text-purple-600 flex-shrink-0 mt-1">
                          <benefit.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1 text-purple-800">{benefit.title}</h4>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-purple-100 rounded-lg p-5 border border-purple-200 shadow-inner mt-auto">
                  <div className="flex items-center gap-2 text-purple-800 font-bold mb-2">
                    <Shield className="h-5 w-5" />
                    <span>Patient Outcomes</span>
                  </div>
                  <p className="text-purple-700">Enhanced therapy effectiveness through data-driven personalization</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
        
        {/* Market Stats Section */}
        <div className="mb-24 py-12 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl">
          <AnimatedElement animation="fade-in" duration={800} delay={200}>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold">Market Opportunity</h3>
              <Separator className="my-4 mx-auto w-24 bg-primary/40 h-1 rounded-full" />
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <AnimatedElement animation="slide-up" duration={800} delay={200}>
              <div className="bg-white border-2 border-primary/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/15 text-primary mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">$11.2B</div>
                <div className="text-muted-foreground">Speech Therapy Market</div>
                <div className="text-xs bg-primary/10 px-3 py-1 rounded-full mt-3 font-medium">CAGR: 6.5%</div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" duration={800} delay={300}>
              <div className="bg-white border-2 border-primary/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/15 text-primary mb-4">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">$4.91B</div>
                <div className="text-muted-foreground">U.S. Market Value</div>
                <div className="text-xs bg-primary/10 px-3 py-1 rounded-full mt-3 font-medium">CAGR: 6.9%</div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" duration={800} delay={400}>
              <div className="bg-white border-2 border-primary/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/15 text-primary mb-4">
                  <Medal className="h-6 w-6" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">200,000+</div>
                <div className="text-muted-foreground">SLPs Nationwide</div>
                <div className="text-xs bg-primary/10 px-3 py-1 rounded-full mt-3 font-medium">Target Audience</div>
              </div>
            </AnimatedElement>
          </div>
        </div>
        
        {/* Research-Backed Section */}
        <div className="mb-16">
          <AnimatedElement animation="fade-in" duration={700} delay={600}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-blue-200">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Backed by Research</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4L2 9.5L12 15L22 9.5L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 12V18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M5 12V18.5C5 18.5 5 21 12 21C19 21 19 18.5 19 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-blue-800">UB AI Institute for Exceptional Education</h4>
                        <p className="text-muted-foreground">Developed with leading researchers in speech pathology and AI</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-blue-800">Published Research</h4>
                        <p className="text-muted-foreground">IEEE/ACM ICHI 2024 - Leading conference in healthcare informatics</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                        <Microscope className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-blue-800">Patented Technology</h4>
                        <p className="text-muted-foreground">Patent pending for our unique speech analysis algorithms</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-blue-800">Clinical Partnerships</h4>
                        <p className="text-muted-foreground">Working with Buffalo Public Schools, Oishei Children's Hospital, and DENT Neurologic Institute</p>
                      </div>
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