import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import FeaturesSection from './components/sections/FeaturesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CTASection from './components/sections/CTASection'
import { SectionDivider } from './components/ui/section-divider'
import { SectionLabel } from './components/ui/section-label'
import { SectionContainer } from './components/ui/section-container'
import { SectionNavigation } from './components/ui/section-navigation'

function App() {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'why-sate', label: 'Why SATE' },
    
  ]

  return (
    <div className="flex flex-col min-h-svh bg-background text-foreground">
      <Header />
      <SectionNavigation sections={sections} />
      <main className="flex-grow">
        {/* Hero Section */}
        <SectionContainer variant="default" className="py-0">
          <HeroSection />
        </SectionContainer>
        {/* <SectionDivider /> */}
        
        {/* About Section */}
        {/* <SectionLabel title="About" /> */}
        <SectionContainer variant="muted">
          <AboutSection />
        </SectionContainer>
        {/* <SectionDivider /> */}
        
        {/* Features Section */}
        {/* <SectionLabel title="Features" /> */}
        <SectionContainer variant="primary">
          <FeaturesSection />
        </SectionContainer>
        {/* <SectionDivider /> */}
        
        {/* Testimonials Section */}
        {/* <SectionLabel title="Why SATE" /> */}
        <SectionContainer variant="accent">
          <TestimonialsSection />
        </SectionContainer>
        {/* <SectionDivider /> */}
        
        {/* CTA Section */}
        {/* <SectionLabel title="Request Demo" /> */}
        <SectionContainer variant="default">
          <CTASection />
        </SectionContainer>
      </main>
      <Footer />
    </div>
  )
}

export default App
