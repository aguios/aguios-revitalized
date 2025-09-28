import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Youtube, ExternalLink } from "lucide-react";

export const VideosSection = () => {
  // Sample video data - in a real application, this would come from YouTube API
  const featuredVideos = [
    {
      id: "5bmRvLT11Sc",
      title: "Vídeo em Destaque",
      thumbnail: "https://i.ytimg.com/vi/5bmRvLT11Sc/hqdefault.jpg"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 aguios-gradient-text">
            Vídeos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nossos ensinamentos bíblicos através do nosso canal no YouTube. 
            Estudos aprofundados e mensagens edificantes para fortalecer sua fé.
          </p>
        </div>

        {/* Featured Video */}
        {featuredVideos.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Vídeo em Destaque
            </h3>
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-none aguios-shadow aguios-hover-lift">
                <div className="relative aspect-video bg-muted">
                  <img 
                    src={featuredVideos[0].thumbnail}
                    alt={featuredVideos[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/30 transition-colors">
                    <Button
                      variant="hero"
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${featuredVideos[0].id}`, '_blank')}
                    >
                      <Play className="w-6 h-6 mr-2 fill-current" />
                      Assistir Vídeo
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Video Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center border-none aguios-shadow aguios-hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-aguios-primary/10 flex items-center justify-center">
              <Play className="w-8 h-8 text-aguios-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Estudos Bíblicos</h3>
            <p className="text-muted-foreground">
              Análises profundas das Escrituras para edificação espiritual
            </p>
          </Card>

          <Card className="p-6 text-center border-none aguios-shadow aguios-hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-aguios-secondary/10 flex items-center justify-center">
              <Play className="w-8 h-8 text-aguios-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Mensagens</h3>
            <p className="text-muted-foreground">
              Pregações edificantes sobre temas fundamentais da fé
            </p>
          </Card>

          <Card className="p-6 text-center border-none aguios-shadow aguios-hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-aguios-warm/10 flex items-center justify-center">
              <Play className="w-8 h-8 text-aguios-warm" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Ensinamentos</h3>
            <p className="text-muted-foreground">
              Doutrinas básicas de Cristo explicadas de forma clara
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 border-none aguios-shadow bg-gradient-to-r from-red-500/5 to-red-600/5">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                <Youtube className="w-8 h-8 text-red-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Inscreva-se em Nosso Canal
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Não perca nenhum dos nossos novos vídeos! Inscreva-se em nosso canal no YouTube 
              e ative as notificações para ser avisado sobre nossos lançamentos.
            </p>
            <Button 
              variant="gradient"
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white group"
              onClick={() => window.open('https://www.youtube.com/aguios', '_blank')}
            >
              <Youtube className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Acessar Canal no YouTube
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};