import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet'
import { Menu, Zap, ArrowRight, Sparkles } from 'lucide-react'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Why SATE', href: '#why-sate' },
  { name: 'Guidelines', href: '/guideline' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          setActiveSection(`#${id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container max-w-8xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center transition-all duration-300 group-hover:shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary transition-all duration-300 group-hover:opacity-80">SATE AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((item) => {
            const isActive = item.href.startsWith('#') 
              ? activeSection === item.href 
              : location.pathname === item.href
            
            if (item.href.startsWith('#')) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-foreground hover:text-primary font-medium transition-colors py-2 ${
                    isActive ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </a>
              )
            } else {
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-foreground hover:text-primary font-medium transition-colors py-2 ${
                    isActive ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              )
            }
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <a href="https://demo.sate.agency/" className="group">
              Watch the Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                {navigation.map((item) => {
                  const isActive = item.href.startsWith('#') 
                    ? activeSection === item.href 
                    : location.pathname === item.href
                  
                  if (item.href.startsWith('#')) {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`text-foreground hover:text-primary font-medium transition-colors text-lg ${
                          isActive ? 'text-primary' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  } else {
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`text-foreground hover:text-primary font-medium transition-colors text-lg ${
                          isActive ? 'text-primary' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  }
                })}
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-white">
                  <a href="https://demo.sate.agency/" onClick={() => setIsOpen(false)}>
                    Watch the Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 