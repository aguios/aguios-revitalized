import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, ShoppingCart } from "lucide-react";
import capaAmor from "@/assets/capa_amor.jpg";
import capaTempoDeChorar from "@/assets/capa_tempo_de_chorar_tempo_de_crescer.jpg";
import capaMulheresCristas from "@/assets/capa_mulheres_cristas.jpg";
import capaParabolaDoSemeador from "@/assets/capa_a_parabola_do_semeador.jpg";

export const BooksSection = () => {
  const books = [
    {
      title: "Amor: a verdadeira natureza de Deus",
      author: "Pr. Wendell Costa",
      description: "Uma profunda reflexão sobre o amor de Deus como Sua natureza essencial e como isso transforma nossa compreensão da fé cristã.",
      year: 2019,
      image: capaAmor,
      purchaseLink: "https://produto.mercadolivre.com.br/MLB-3303352579-livro-amor-a-verdadeira-natureza-de-deus-_JM"
    },
    {
      title: "Tempo de Chorar, Tempo de Crescer",
      subtitle: "Por que Deus permite o sofrimento?",
      author: "Bruna Monastirski",
      description: "Uma análise bíblica sobre o propósito do sofrimento na vida cristã e como Deus usa as dificuldades para nosso crescimento espiritual.",
      year: 2019,
      image: capaTempoDeChorar,
      purchaseLink: "https://produto.mercadolivre.com.br/MLB-3303339269-livro-tempo-de-chorar-tempo-de-crescer-_JM"
    },
    {
      title: "Mulheres Cristãs",
      subtitle: "Vidas com propósitos",
      author: "Rulyanne Silva",
      description: "O livro trata sobre os diversos papéis da mulher cristã: adoradora, esposa, mãe e muito mais.",
      year: 2023,
      image: capaMulheresCristas,
      purchaseLink: "https://produto.mercadolivre.com.br/MLB-3598327796-livro-mulheres-crists-vidas-com-proposito-_JM"
    },
    {
      title: "A Parábola do Semeador",
      subtitle: "Fundamentos para uma vida frutífera",
      author: "Bruna Monastirski e Wendell Costa",
      description: "Revelações sobre como um discípulo de Jesus pode se tornar frutífero em Deus através do estudo da parábola do semeador.",
      year: 2025,
      image: capaParabolaDoSemeador,
      purchaseLink: "https://produto.mercadolivre.com.br/MLB-4431979568-a-parabola-do-semeador-fundamentos-para-uma-vida-frutifera-_JM"
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
            Estudos profundos sobre temas fundamentais da fé cristã.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {books.map((book, index) => (
            <Card key={index} className="p-8 border-none aguios-shadow aguios-hover-lift bg-card">
              <div className="space-y-6">
                {/* Book Cover */}
                <div className="mx-auto w-48 h-72 overflow-hidden rounded-lg aguios-shadow">
                  <img 
                    src={book.image} 
                    alt={`Capa do livro ${book.title}`}
                    className="w-full h-full object-cover"
                  />
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

                {/* Year Badge and Purchase Button */}
                <div className="flex flex-col items-center gap-3">
                  <span className="bg-gradient-to-r from-aguios-primary to-aguios-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Lançamento {book.year}
                  </span>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="group"
                    onClick={() => window.open(book.purchaseLink, '_blank')}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Comprar Livro
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
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