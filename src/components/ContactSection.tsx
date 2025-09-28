import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Facebook, Youtube, MapPin, Phone, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 aguios-gradient-text">
            Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco. Será um prazer atender sua igreja ou responder 
            suas dúvidas sobre nosso ministério.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <Card className="p-8 text-center border-none aguios-shadow aguios-hover-lift bg-gradient-to-br from-aguios-primary/5 to-aguios-primary/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-aguios-primary/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-aguios-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">E-mail</h3>
            <p className="text-muted-foreground mb-4">
              Principal meio de contato para agendamentos e dúvidas
            </p>
            <Button 
              variant="outline"
              className="group"
              onClick={() => window.location.href = 'mailto:contato@aguios.org'}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              contato@aguios.org
            </Button>
          </Card>

          {/* Facebook */}
          <Card className="p-8 text-center border-none aguios-shadow aguios-hover-lift bg-gradient-to-br from-blue-500/5 to-blue-500/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Facebook className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Facebook</h3>
            <p className="text-muted-foreground mb-4">
              Acompanhe nossas publicações e interaja conosco
            </p>
            <Button 
              variant="outline"
              className="group border-blue-500/20 text-blue-600 hover:bg-blue-500/10"
              onClick={() => window.open('https://www.facebook.com/aguios.org', '_blank')}
            >
              <Facebook className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Visitar Página
            </Button>
          </Card>

          {/* YouTube */}
          <Card className="p-8 text-center border-none aguios-shadow aguios-hover-lift bg-gradient-to-br from-red-500/5 to-red-500/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
              <Youtube className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">YouTube</h3>
            <p className="text-muted-foreground mb-4">
              Acesse nossos vídeos e estudos bíblicos
            </p>
            <Button 
              variant="outline"
              className="group border-red-500/20 text-red-600 hover:bg-red-500/10"
              onClick={() => window.open('https://www.youtube.com/aguios', '_blank')}
            >
              <Youtube className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Acessar Canal
            </Button>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form CTA */}
          <Card className="p-8 border-none aguios-shadow">
            <h3 className="text-2xl font-bold mb-6 text-aguios-primary">
              Convite para Igrejas
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-aguios-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Ministério Itinerante</h4>
                  <p className="text-muted-foreground">
                    Visitamos igrejas em todo o Brasil para compartilhar os ensinamentos bíblicos
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-aguios-warm mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Estudos Personalizados</h4>
                  <p className="text-muted-foreground">
                    Adaptamos nossos ensinamentos às necessidades específicas de cada congregação
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Se sua igreja tem interesse em receber o ministério Águios, entre em contato 
              conosco através do e-mail. Será uma alegria compartilhar os fundamentos da 
              Palavra de Deus com sua congregação.
            </p>

            <Button 
              variant="gradient"
              size="lg"
              className="w-full group"
              onClick={() => window.location.href = 'mailto:contato@aguios.org?subject=Convite para Igreja&body=Olá, gostaria de convidar o ministério Águios para nossa igreja...'}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Enviar Convite por E-mail
            </Button>
          </Card>

          {/* Additional Info */}
          <Card className="p-8 border-none aguios-shadow">
            <h3 className="text-2xl font-bold mb-6 text-aguios-primary">
              Sobre o Ministério
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Liderança</h4>
                <p className="text-muted-foreground">
                  Pastores Wendell e Oriana Costa, com experiência em pastoreado 
                  e ensino bíblico nas cidades de Parnamirim e Lagoa Salgada, RN.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Foco do Ministério</h4>
                <p className="text-muted-foreground">
                  Ensino das doutrinas básicas de Cristo através de estudos bíblicos 
                  fundamentados nas Sagradas Escrituras.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Atuação</h4>
                <p className="text-muted-foreground">
                  Ministério itinerante presencial e digital através das redes sociais 
                  e plataformas online.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                "Ensina a criança no caminho em que deve andar, e, ainda quando for velho, não se desviará dele." - Provérbios 22:6
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};