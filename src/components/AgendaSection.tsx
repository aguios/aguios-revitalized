import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";

export const AgendaSection = () => {
  return (
    <section id="agenda" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 aguios-gradient-text">
            Agenda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nossa agenda de eventos e encontros. Venha participar dos nossos 
            estudos bíblicos e momentos de comunhão.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center border-none aguios-shadow aguios-hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-aguios-primary/10 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-aguios-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Eventos Regulares</h3>
            <p className="text-muted-foreground">
              Estudos bíblicos e encontros programados com frequência
            </p>
          </Card>

          <Card className="p-6 text-center border-none aguios-shadow aguios-hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-aguios-secondary/10 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-aguios-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Ministério Itinerante</h3>
            <p className="text-muted-foreground">
              Visitamos igrejas em diferentes cidades e estados
            </p>
          </Card>

          <Card className="p-6 text-center border-none aguios-shadow aguios-hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-aguios-warm/10 flex items-center justify-center">
              <Clock className="w-8 h-8 text-aguios-warm" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Horários Flexíveis</h3>
            <p className="text-muted-foreground">
              Adaptamos nossos horários às necessidades de cada igreja
            </p>
          </Card>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Card className="p-8 border-none aguios-shadow bg-gradient-to-r from-aguios-primary/5 to-aguios-secondary/5">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-aguios-primary/10 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-aguios-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-aguios-primary">
              Acesse Nossa Agenda Completa
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Para ver nossa agenda completa e atualizada, acesse nosso calendário Google. 
              Lá você poderá visualizar todos os eventos e até mesmo adicionar os encontros 
              à sua própria agenda pessoal.
            </p>

            <div className="space-y-4">
              <Button 
                variant="gradient"
                size="lg"
                className="group"
                onClick={() => window.open('https://calendar.google.com/calendar/embed?src=k96drcahoe28sc5bpa9uppsvvk%40group.calendar.google.com&ctz=America%2FRecife', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Ver Agenda Completa
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                * Clique no botão acima para acessar nossa agenda do Google e adicionar os eventos à sua agenda pessoal
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6 border-none aguios-shadow">
            <h4 className="text-lg font-bold mb-3 text-foreground">Como Funciona</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-aguios-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                Acesse nossa agenda Google através do link
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-aguios-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                Visualize todos os eventos programados
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-aguios-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                Adicione os eventos à sua agenda pessoal
              </li>
            </ul>
          </Card>

          <Card className="p-6 border-none aguios-shadow">
            <h4 className="text-lg font-bold mb-3 text-foreground">Convite para Igrejas</h4>
            <p className="text-muted-foreground mb-4">
              Sua igreja gostaria de receber o ministério Águios? Entre em contato conosco 
              para agendar uma visita ou série de estudos bíblicos.
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Entre em Contato
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};