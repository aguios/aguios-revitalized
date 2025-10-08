import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Youtube, Mail, Instagram } from "lucide-react";
import aguiosLogo from "@/assets/aguios-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={aguiosLogo} 
              alt="Águios Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold aguios-gradient-text">
              ÁGUIOS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("quem-somos")}
              className="text-foreground hover:text-aguios-primary aguios-transition font-medium"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection("livros")}
              className="text-foreground hover:text-aguios-primary aguios-transition font-medium"
            >
              Livros
            </button>
            <button 
              onClick={() => scrollToSection("videos")}
              className="text-foreground hover:text-aguios-primary aguios-transition font-medium"
            >
              Vídeos
            </button>
            <button 
              onClick={() => scrollToSection("agenda")}
              className="text-foreground hover:text-aguios-primary aguios-transition font-medium"
            >
              Agenda
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-aguios-primary aguios-transition font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://www.facebook.com/aguios.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-aguios-primary aguios-transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/aguiosensino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-aguios-primary aguios-transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/aguios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-aguios-primary aguios-transition"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ministerioaguios@gmail.com"
              className="text-muted-foreground hover:text-aguios-primary aguios-transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection("quem-somos")}
                className="text-left text-foreground hover:text-aguios-primary aguios-transition font-medium"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection("livros")}
                className="text-left text-foreground hover:text-aguios-primary aguios-transition font-medium"
              >
                Livros
              </button>
              <button 
                onClick={() => scrollToSection("videos")}
                className="text-left text-foreground hover:text-aguios-primary aguios-transition font-medium"
              >
                Vídeos
              </button>
              <button 
                onClick={() => scrollToSection("agenda")}
                className="text-left text-foreground hover:text-aguios-primary aguios-transition font-medium"
              >
                Agenda
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-aguios-primary aguios-transition font-medium"
              >
                Contato
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <a 
                  href="https://www.facebook.com/aguios.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-aguios-primary aguios-transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/aguiosensino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-aguios-primary aguios-transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/aguios" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-aguios-primary aguios-transition"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:ministerioaguios@gmail.com"
                  className="text-muted-foreground hover:text-aguios-primary aguios-transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};