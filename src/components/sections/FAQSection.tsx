import { Separator } from "@/components/ui/separator"
import { Mic, Bot, FileText, Check, HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedElement } from "@/components/ui/AnimatedElement"

export default function FAQSection() {
  const steps = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Record Speech",
      description: "Capture audio directly within the app or upload existing recordings from your therapy sessions."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Automatic Transcription & Annotation",
      description: "Our AI engine automatically transcribes and identifies speech patterns, issues, and progress indicators."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Generate Detailed Reports",
      description: "Produce professional reports with analytics, progress tracking, and customizable insights for patients and healthcare providers."
    }
  ];

  const analysisFeatures = [
    "Mispronunciations",
    "Unusual Pauses",
    "Filler Words",
    "Repetition",
    "Grammar Checks",
    "Speaker Diarization",
    "Syllable Structure"
  ];
  
  const faqs = [
    {
      question: "How accurate is SATE's transcription technology?",
      answer: "SATE's transcription technology boasts an industry-leading 98.7% accuracy rate for speech with mild to moderate disorders. Our AI has been specifically trained on speech with various pathologies, making it significantly more accurate than general-purpose speech recognition tools for clinical applications."
    },
    {
      question: "Is SATE HIPAA compliant?",
      answer: "Yes, SATE is fully HIPAA compliant. We implement end-to-end encryption, secure data storage, access controls, and comprehensive audit logs to ensure patient data remains protected at all times. We also provide Business Associate Agreements (BAAs) to all healthcare organizations using our platform."
    },
    {
      question: "How does SATE integrate with existing EHR systems?",
      answer: "SATE offers seamless integration with major EHR systems through our secure API. We currently support direct integration with Epic, Cerner, Allscripts, and several other popular EHR platforms. Our team can also work with you to develop custom integration solutions for your specific needs."
    },
    {
      question: "What training is required to use SATE effectively?",
      answer: "SATE is designed to be intuitive and user-friendly, requiring minimal training to get started. We provide comprehensive onboarding that includes live training sessions, on-demand video tutorials, and detailed documentation. Most SLPs are comfortable using the platform independently after just one 30-minute training session."
    },
    {
      question: "Can SATE be used for group therapy sessions?",
      answer: "Absolutely! SATE includes advanced speaker diarization technology that can distinguish between different speakers during group sessions, providing individual analysis for each participant. This makes it perfect for both individual and group therapy settings."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-32 top-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedElement animation="fade-in" duration={800}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <Separator className="my-6 mx-auto w-20 bg-primary/50" />
            <p className="text-lg text-muted-foreground">
              SATE simplifies speech analysis with a streamlined workflow designed for busy SLPs.
            </p>
          </div>
        </AnimatedElement>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <AnimatedElement 
              key={index} 
              animation="slide-up" 
              delay={index * 200} 
              duration={700}
            >
              <div className="bg-card border rounded-xl p-8 shadow-sm relative hover:shadow-md transition-shadow">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
                  {index + 1}
                </div>
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {/* Connector line between steps (visible on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-muted-foreground/20">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-muted-foreground/20"></div>
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Analysis Features */}
        <AnimatedElement animation="fade-in" duration={800} delay={200}>
          <div className="bg-card border rounded-xl p-8 shadow-sm mb-20">
            <h3 className="text-2xl font-bold text-center mb-10">What SATE Analyzes</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {analysisFeatures.map((feature, index) => (
                <AnimatedElement 
                  key={index} 
                  animation="fade-in" 
                  delay={300 + index * 100} 
                  duration={600}
                >
                  <div className="flex items-center gap-3 p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="p-2 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                </AnimatedElement>
              ))}
            </div>
            
            <AnimatedElement animation="fade-in" duration={800} delay={800}>
              <div className="mt-10 p-6 bg-muted/20 rounded-lg">
                <h4 className="text-lg font-medium mb-6 text-center">SATE AI Process Flow</h4>
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                  <AnimatedElement animation="slide-right" duration={700} delay={900}>
                    <div className="flex-1 p-6 bg-background rounded-md border shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 rounded-full bg-primary/10">
                          <Mic className="h-4 w-4 text-primary" />
                        </div>
                        <p className="font-medium">Speech Recognition</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Advanced models trained on speech disorders for accurate transcription</p>
                    </div>
                  </AnimatedElement>
                  <div className="hidden md:flex text-primary items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <AnimatedElement animation="fade-in" duration={700} delay={1000}>
                    <div className="flex-1 p-6 bg-background rounded-md border shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 rounded-full bg-primary/10">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                        <p className="font-medium">Pattern Analysis</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Identification of speech patterns and potential issues</p>
                    </div>
                  </AnimatedElement>
                  <div className="hidden md:flex text-primary items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <AnimatedElement animation="slide-left" duration={700} delay={1100}>
                    <div className="flex-1 p-6 bg-background rounded-md border shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 rounded-full bg-primary/10">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <p className="font-medium">Report Generation</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Structured insights formatted for clinical documentation</p>
                    </div>
                  </AnimatedElement>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </AnimatedElement>
        
        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-in" duration={800} delay={200}>
            <div className="flex items-center gap-3 justify-center mb-10">
              <HelpCircle className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-center">Frequently Asked Questions</h3>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" duration={800} delay={300}>
            <Accordion type="single" collapsible className="bg-card rounded-xl border shadow-sm p-6">
              {faqs.map((faq, index) => (
                <AnimatedElement 
                  key={index} 
                  animation="fade-in" 
                  delay={400 + index * 100} 
                  duration={600}
                >
                  <AccordionItem value={`item-${index}`} className="border-b last:border-b-0">
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedElement>
              ))}
            </Accordion>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
} 