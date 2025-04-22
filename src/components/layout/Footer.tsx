import { Sparkles, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Why SATE', href: '#why-sate' },
  ]
  
  const social = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ]

  return (
    <footer className="bg-muted pt-12 pb-8 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center transition-all duration-300 group-hover:shadow-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary transition-all duration-300 group-hover:opacity-80">SATE AI</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered speech annotation and transcription that saves SLPs 1+ hour per session.
            </p>
            <Button asChild variant="outline" size="sm">
              <a href="/demo">Watch the Demo</a>
            </Button>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@sate.ai" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@sate.agency</span>
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (123) 456-7890</span>
                </a>
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>340 Davis Hall, Buffalo, NY 14261</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px w-full bg-border my-6"></div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} SATE AI. All rights reserved.
          </div>
          
          {/* Social media */}
          <div className="flex items-center gap-4">
            {social.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Visit our ${item.name}`}
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 