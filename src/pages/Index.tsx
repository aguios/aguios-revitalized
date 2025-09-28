import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { BooksSection } from "@/components/BooksSection";
import { VideosSection } from "@/components/VideosSection";
import { AgendaSection } from "@/components/AgendaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <BooksSection />
      <VideosSection />
      <AgendaSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;