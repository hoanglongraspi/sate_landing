import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet'
import { Menu, ArrowRight, Sparkles } from 'lucide-react'

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
  const navigate = useNavigate()

  // Handle navigation to home page sections
  const handleSectionNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home page and then scroll to section
        navigate('/')
        // Use setTimeout to ensure the page has loaded before scrolling
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        // If already on home page, just scroll to section
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

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
          <Link to="/" className="flex items-center group hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="SATE AI" className="h-14 w-auto object-contain" />
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
                <button
                  key={item.name}
                  onClick={() => handleSectionNavigation(item.href)}
                  className={`relative text-foreground hover:text-primary font-medium transition-colors py-2 ${
                    isActive ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </button>
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
                      <button
                        key={item.name}
                        onClick={() => {
                          handleSectionNavigation(item.href)
                          setIsOpen(false)
                        }}
                        className={`text-foreground hover:text-primary font-medium transition-colors text-lg text-left ${
                          isActive ? 'text-primary' : ''
                        }`}
                      >
                        {item.name}
                      </button>
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