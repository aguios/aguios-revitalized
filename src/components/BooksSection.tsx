import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, ShoppingCart } from "lucide-react";

export const BooksSection = () => {
  const books = [
    {
      title: "Amor: a verdadeira natureza de Deus",
      author: "Pr. Wendell Costa",
      description: "Uma profunda reflexão sobre o amor de Deus como Sua natureza essencial e como isso transforma nossa compreensão da fé cristã.",
      featured: true
    },
    {
      title: "Tempo de Chorar, Tempo de Crescer",
      subtitle: "Por que Deus permite o sofrimento?",
      author: "Bruna Monastirski",
      description: "Uma análise bíblica sobre o propósito do sofrimento na vida cristã e como Deus usa as dificuldades para nosso crescimento espiritual.",
      featured: true
    }
  ];

  return (
    <section id="livros" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 aguios-gradient-text">
            Nossos Livros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em agosto de 2019, o Ministério Águios lançou seus dois primeiros livros, 
            oferecendo estudos profundos sobre temas fundamentais da fé cristã.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {books.map((book, index) => (
            <Card key={index} className="p-8 border-none aguios-shadow aguios-hover-lift bg-card">
              <div className="space-y-6">
                {/* Book Icon/Placeholder */}
                <div className="w-16 h-20 mx-auto bg-gradient-to-br from-aguios-primary to-aguios-secondary rounded-lg flex items-center justify-center">
                  <div className="w-12 h-16 bg-white/20 rounded border-l-2 border-white/40" />
                </div>

                {/* Book Details */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {book.title}
                  </h3>
                  {book.subtitle && (
                    <p className="text-lg text-aguios-primary font-medium">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="text-muted-foreground font-medium">
                    {book.author}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </div>

                {/* Badge for featured books */}
                {book.featured && (
                  <div className="flex justify-center">
                    <span className="bg-gradient-to-r from-aguios-primary to-aguios-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Lançamento 2019
                    </span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 border-none aguios-shadow bg-gradient-to-r from-aguios-primary/5 to-aguios-secondary/5">
            <h3 className="text-2xl font-bold mb-4 text-aguios-primary">
              Adquira Nossos Livros
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Aprofunde seus conhecimentos bíblicos com nossos estudos cuidadosamente elaborados. 
              Visite nossa loja virtual para adquirir seus exemplares.
            </p>
            <Button 
              variant="gradient"
              size="lg"
              className="group"
              onClick={() => window.open('https://aguios.mercadoshops.com.br/', '_blank')}
            >
              <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Visitar Loja Virtual
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};