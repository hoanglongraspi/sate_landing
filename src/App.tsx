import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import FeaturesSection from './components/sections/FeaturesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FAQSection from './components/sections/FAQSection'
import CTASection from './components/sections/CTASection'

function App() {
  return (
    <div className="flex flex-col min-h-svh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
