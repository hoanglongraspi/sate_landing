import { Button } from '@/components/ui/button'
import { FileText, Mic, Send, Sparkles, Zap, Users, Play, CheckCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { useState } from 'react'

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setIsSubmitted(false)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', '8f58dfbc-1614-42a2-946c-f3a4606b8a0f')
    formData.append('subject', 'SATE Interest - New Contact Form Submission')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSubmitted(true)
        setSubmitError('')
        // Reset form after a short delay
        setTimeout(() => {
          if (form) {
            form.reset()
          }
        }, 100)
      } else {
        console.error('Web3Forms error:', data)
        setSubmitError(data.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
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
                <span>Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your speech therapy practice? Let's discuss how SATE can help you save time and provide better patient care.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
            {/* Form */}
            <AnimatedElement animation="slide-right" duration={800} delay={200} className="lg:col-span-3">
              <div className="bg-card border rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Send us a Message</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you within 24 hours to schedule a personalized demo.
                </p>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" name="organization" placeholder="Your Organization" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your practice and how we can help..."
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      required
                    />
                  </div>
                  
                  {submitError && (
                    <div className="text-red-600 text-sm mb-4">
                      {submitError}
                    </div>
                  )}
                  
                  {isSubmitted && (
                    <div className="flex items-center gap-2 text-green-600 text-sm mb-4">
                      <CheckCircle className="h-4 w-4" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 group bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      {!isSubmitting && <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                    </Button>

                    {/* <Button asChild size="lg" variant="outline" className="w-full md:w-auto group border-primary text-primary hover:border-primary hover:text-primary hover:bg-primary/10">
                      <a href="https://demo.sate.agency/">
                        <span>Watch Demo</span>
                        <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button> */}
                  </div>
                </form>
              </div>
            </AnimatedElement>

            {/* Features */}
            <AnimatedElement animation="slide-left" duration={800} delay={300} className="lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Why Choose SATE?</h3>
                
                <div className="space-y-4">
                  <AnimatedElement animation="fade-in" delay={400} duration={600}>
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border">
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Save Time Daily</h4>
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
                        <h4 className="font-medium">Increase Revenue</h4>
                        <p className="text-sm text-muted-foreground">Additional income potential</p>
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
                  
                  <AnimatedElement animation="fade-in" delay={700} duration={600}>
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border">
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <Mic className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Accurate Analysis</h4>
                        <p className="text-sm text-muted-foreground">AI-powered speech assessment</p>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
                
                {/* <AnimatedElement animation="fade-in" delay={700} duration={600}>
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
                </AnimatedElement> */}
              </div>
            </AnimatedElement>
          </div>
          
          {/* <AnimatedElement animation="fade-in" delay={800} duration={800}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-lg">
                <span className="text-primary font-medium">Questions?</span>
                <span>We're here to help you get started</span>
              </div>
            </div>
          </AnimatedElement> */}
        </div>
      </div>
    </section>
  )
} 