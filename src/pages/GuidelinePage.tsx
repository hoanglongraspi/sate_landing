import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import GuidelineSection from '../components/sections/GuidelineSection'

export default function GuidelinePage() {
  return (
    <div className="flex flex-col min-h-svh bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20">
        <GuidelineSection />
      </main>
      <Footer />
    </div>
  )
}
