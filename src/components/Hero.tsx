import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import aguiosLogo from "@/assets/aguios-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(240 75% 25% / 0.8), hsl(200 65% 35% / 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-aguios-primary/90 via-aguios-secondary/80 to-aguios-primary/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center aguios-hover-lift">
            <img 
              src={aguiosLogo} 
              alt="Águios Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          ÁGUIOS
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
          Ministério cristão de ensino bíblico dedicado a compartilhar os fundamentos da Palavra de Deus
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("quem-somos")}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
          >
            Conheça Nosso Ministério
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("livros")}
            className="border-white/30 text-white hover:bg-white/10 bg-transparent"
          >
            Ver Nossos Livros
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("quem-somos")}
            className="text-white hover:bg-white/10 rounded-full"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-8 w-16 h-16 border border-white/20 rounded-full opacity-25 animate-pulse delay-500" />
    </section>
  );
};