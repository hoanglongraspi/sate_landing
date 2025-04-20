export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-primary">
              SATE
            </a>
          </div>
          
          <div className="flex gap-8">
            {/* <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a> */}
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} SATE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 