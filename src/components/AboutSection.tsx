import { Card } from "@/components/ui/card";
import { Users, Heart, BookOpen } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 aguios-gradient-text">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto mb-8" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              O <strong className="text-aguios-primary">Águios</strong> é um ministério cristão de ensino bíblico que atua de forma itinerante e através da internet.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Após pastorearem igrejas evangélicas nas cidades de Parnamirim e Lagoa Salgada – ambas no estado do Rio Grande do Norte –, o casal de pastores <strong className="text-aguios-primary">Wendell e Oriana Costa</strong> iniciou o ministério, com a finalidade de ensinar as doutrinas básicas de Cristo em qualquer igreja que esteja disposta a receber os ensinamentos.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Considerando, também, a importância da Internet como veículo de propagação do conhecimento, o Águios atua fortemente nessa área, usando as suas redes sociais como plataforma para divulgação dos fundamentos da Palavra de Deus à Sua igreja.
            </p>
          </div>

          {/* Stats/Features */}
          <div className="space-y-6">
            <Card className="p-6 aguios-hover-lift border-none aguios-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-aguios-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-aguios-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Ministério Itinerante</h3>
                  <p className="text-muted-foreground">Levando ensinamentos a igrejas em todo o país</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 aguios-hover-lift border-none aguios-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-aguios-secondary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-aguios-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Ensino com Amor</h3>
                  <p className="text-muted-foreground">Compartilhando as doutrinas básicas de Cristo</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 aguios-hover-lift border-none aguios-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-aguios-warm/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-aguios-warm" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Palavra de Deus</h3>
                  <p className="text-muted-foreground">Fundamentados nas Sagradas Escrituras</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <Card className="p-8 border-none aguios-shadow max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-aguios-primary">
              Nossa Missão
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Equipar e edificar a igreja de Cristo através do ensino fiel das Escrituras, 
              promovendo o crescimento espiritual e o conhecimento dos fundamentos da fé cristã.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};