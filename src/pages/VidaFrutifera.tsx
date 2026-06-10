import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sprout,
  BookOpen,
  Leaf,
  TreeDeciduous,
  Users,
  Heart,
  Mail,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  ImageIcon,
} from "lucide-react";
import heroBg from "@/assets/vida-frutifera-hero.jpg";
import capaParabolaDoSemeador from "@/assets/capa_a_parabola_do_semeador.jpg";

const WHATSAPP_URL =
  "https://wa.me/558488270998?text=" +
  encodeURIComponent(
    "Olá! Gostaria de saber mais informações sobre o Seminário Vida Frutífera."
  );

const EMAIL_URL =
  "mailto:ministerioaguios@gmail.com" +
  "?subject=" +
  encodeURIComponent("Convite para o Seminário Vida Frutífera") +
  "&body=" +
  encodeURIComponent(
    "Olá, Ministério Águios!\n\nGostaria de saber mais informações sobre o Seminário Vida Frutífera e a possibilidade de levá-lo para nossa igreja/ministério.\n\nAguardo retorno."
  );

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const VidaFrutifera = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Vida Frutífera | Ministério Águios";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    metaDesc?.setAttribute(
      "content",
      "Conheça o Projeto Vida Frutífera, uma iniciativa do Ministério Águios baseada na Parábola do Semeador, com seminários bíblicos para igrejas, líderes e discípulos."
    );

    // Canonical
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    const created = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const prevHref = canonical.href;
    canonical.href = window.location.origin + "/vidafrutifera";

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);
      if (created) canonical?.remove();
      else if (canonical) canonical.href = prevHref;
    };
  }, []);

  const solos = [
    {
      icon: Sprout,
      title: "À beira do caminho",
      text: "Quando a Palavra é ouvida, mas não compreendida nem valorizada.",
    },
    {
      icon: Leaf,
      title: "Solo pedregoso",
      text: "Quando há alegria inicial, mas falta profundidade para perseverar.",
    },
    {
      icon: TreeDeciduous,
      title: "Solo com espinhos",
      text: "Quando preocupações, riquezas e prazeres sufocam a Palavra.",
    },
    {
      icon: BookOpen,
      title: "Boa terra",
      text: "Quando o coração ouve, compreende, guarda e persevera até frutificar.",
    },
  ];

  const temas = [
    "A semente: o poder da Palavra de Deus",
    "O solo: o coração humano diante da Palavra",
    "Os inimigos da semente: tribulações, perseguições e distrações",
    "Os espinhos: preocupações, riquezas e prazeres que sufocam a Palavra",
    "A boa terra: o coração que compreende, guarda e frutifica",
    "A poda do Agricultor: maturidade, correção e crescimento em Cristo",
    "Fazendo o essencial: uma vida mais simples, focada e frutífera",
  ];

  const publicos = [
    "Igrejas que desejam fortalecer o ensino bíblico",
    "Líderes envolvidos com discipulado e formação cristã",
    "Ministérios de ensino, louvor, jovens, mulheres e grupos familiares",
    "Cristãos que desejam amadurecer na fé",
    "Comunidades que desejam reacender o valor pela Palavra de Deus",
  ];

  const faqs = [
    {
      q: "O seminário é presencial ou online?",
      a: "O formato principal é presencial, mas outras possibilidades podem ser avaliadas conforme a necessidade da igreja ou ministério.",
    },
    {
      q: "Qual a duração do seminário?",
      a: "O formato pode ser ajustado conforme a realidade da igreja, podendo acontecer em uma noite, em um sábado ou em dois dias de programação.",
    },
    {
      q: "O seminário é apenas para líderes?",
      a: "Não. O conteúdo é útil para toda a igreja, mas também é especialmente relevante para líderes, professores, discipuladores e pessoas envolvidas com o ensino bíblico.",
    },
    {
      q: "Como convidar o Projeto Vida Frutífera para minha igreja?",
      a: "Basta entrar em contato com o Ministério Águios pelos canais indicados nesta página.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(240 75% 25% / 0.85), hsl(200 65% 35% / 0.8)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 py-20">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Sprout className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Vida Frutífera
          </h1>

          <p className="text-xl md:text-2xl mb-6 text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            Um chamado para alinhar o coração à Palavra e produzir frutos para
            Deus.
          </p>

          <p className="text-base md:text-lg mb-10 text-white/80 leading-relaxed max-w-2xl mx-auto">
            Um projeto de ensino bíblico baseado na Parábola do Semeador, criado
            para ajudar cristãos, líderes e igrejas a compreenderem como a
            Palavra de Deus frutifica no coração humano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToId("seminario")}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
            >
              Conheça o Seminário
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToId("contato-vf")}
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              Quero levar para minha igreja
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToId("o-que-e")}
              className="text-white/80 hover:text-white"
              aria-label="Rolar para a próxima seção"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section id="o-que-e" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 aguios-gradient-text">
              O que é o Projeto Vida Frutífera?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              O Projeto Vida Frutífera nasceu do estudo aprofundado da{" "}
              <strong className="text-aguios-primary">
                Parábola do Semeador
              </strong>
              , uma das parábolas mais importantes ensinadas por Jesus. Nela,
              Cristo revela como a Palavra de Deus é semeada no coração humano
              e por que ela produz resultados diferentes em pessoas diferentes.
            </p>
            <p>
              Mais do que um estudo sobre uma parábola, Vida Frutífera é um
              chamado ao amadurecimento cristão: compreender a Palavra, guardar
              o coração, perseverar em meio às dificuldades, remover os
              espinhos e produzir frutos para a glória de Deus.
            </p>
          </div>
        </div>
      </section>

      {/* MENSAGEM CENTRAL */}
      <section className="py-20 aguios-hero-bg text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-2xl md:text-4xl font-light leading-relaxed italic">
              "A Palavra de Deus é a semente.
              <br />O coração é o solo.
              <br />A vida transformada é o fruto."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solos.map((solo, i) => {
              const Icon = solo.icon;
              return (
                <Card
                  key={i}
                  className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white aguios-hover-lift"
                >
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{solo.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {solo.text}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEMINÁRIO */}
      <section id="seminario" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 aguios-gradient-text">
              Seminário Vida Frutífera
            </h2>
            <p className="text-lg md:text-xl text-aguios-secondary font-medium mb-6">
              Uma imersão bíblica na Parábola do Semeador.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            <p>
              O Seminário Vida Frutífera é uma ministração voltada para
              igrejas, ministérios, líderes e discípulos que desejam crescer no
              entendimento da Palavra e produzir frutos maduros para Deus.
            </p>
            <p>
              Durante o seminário, os participantes são conduzidos a
              compreender como a Palavra de Deus opera no coração humano, quais
              obstáculos impedem a frutificação e como cultivar uma vida cristã
              mais profunda, perseverante e frutífera.
            </p>
          </div>

          <Card className="p-8 border-none aguios-shadow">
            <h3 className="text-xl font-bold mb-6 text-aguios-primary">
              Principais temas
            </h3>
            <ul className="space-y-4">
              {temas.map((tema, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aguios-secondary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    {tema}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 aguios-gradient-text">
              Para quem é este seminário?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {publicos.map((p, i) => (
              <Card
                key={i}
                className="p-6 border-none aguios-shadow aguios-hover-lift flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-aguios-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-aguios-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed pt-1">
                  {p}
                </p>
              </Card>
            ))}
          </div>

          <Card className="p-8 border-none aguios-shadow max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              O objetivo não é apenas ensinar uma parábola, mas despertar uma
              nova forma de enxergar a vida cristã: como um processo de
              semeadura, perseverança, crescimento e frutificação.
            </p>
          </Card>
        </div>
      </section>

      {/* LIVRO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 aguios-gradient-text">
              O livro que deu origem ao projeto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-96 overflow-hidden rounded-lg aguios-shadow">
                <img
                  src={capaParabolaDoSemeador}
                  alt="Capa do livro A Parábola do Semeador — Fundamentos para uma vida frutífera"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={400}
                  height={600}
                />
              </div>
            </div>
            <div className="space-y-5">
              <h3 className="text-2xl md:text-3xl font-bold text-aguios-primary">
                A Parábola do Semeador
              </h3>
              <p className="text-lg text-aguios-secondary font-medium">
                Fundamentos para uma vida frutífera
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Projeto Vida Frutífera foi desenvolvido a partir de anos de
                estudo, ensino, vídeos e reflexões sobre a Parábola do
                Semeador. Esse aprofundamento deu origem ao livro{" "}
                <em>A Parábola do Semeador — Fundamentos para uma vida frutífera</em>
                , que serve como uma das bases do seminário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM MINISTRA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 aguios-gradient-text">
              Quem ministra o seminário
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Pr. Wendell Costa",
                photo: "/images/vida-frutifera/foto-wendell.jpg",
                alt: "Pr. Wendell Costa - Ministério Águios",
                desc: "Pastor, professor bíblico e fundador do Ministério Águios. Dedica-se ao ensino das Escrituras, à formação de discípulos e à edificação da igreja por meio de ministrações, estudos bíblicos, seminários e conteúdos voltados ao crescimento espiritual.",
              },
              {
                name: "Bruna Monastirski",
                photo: "/images/vida-frutifera/foto-bruna.jpg",
                alt: "Bruna Monastirski - Projeto Vida Frutífera",
                desc: "Professora bíblica e coautora do projeto Vida Frutífera. Atua no ensino da Palavra e no discipulado cristão, com ênfase na formação de uma vida espiritual profunda, perseverante e frutífera.",
              },
            ].map((p, i) => (
              <Card
                key={i}
                className="p-8 border-none aguios-shadow aguios-hover-lift text-center flex flex-col h-full"
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-aguios-primary/10 aguios-shadow">
                  <img
                    src={p.photo}
                    alt={p.alt}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    width={320}
                    height={320}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-aguios-primary">
                  {p.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTROS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 aguios-gradient-text">
              Registros do Projeto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Momentos de ensino, comunhão e aprofundamento na Palavra em
              igrejas e comunidades alcançadas pelo projeto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-aguios-primary/10 to-aguios-secondary/10 border border-border flex items-center justify-center"
              >
                <ImageIcon className="w-10 h-10 text-aguios-primary/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 aguios-gradient-text">
              Perguntas Frequentes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-aguios-primary to-aguios-secondary mx-auto" />
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-lg border-none aguios-shadow px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTATO FINAL */}
      <section id="contato-vf" className="py-20 aguios-hero-bg text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Deseja levar o Seminário Vida Frutífera para sua igreja?
          </h2>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10">
            Será uma alegria servir sua igreja com uma ministração bíblica
            voltada ao crescimento, à maturidade e à frutificação dos
            discípulos de Cristo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-aguios-primary hover:bg-white/90"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/40 text-white hover:bg-white/10 bg-transparent"
            >
              <a href={EMAIL_URL}>
                <Mail className="w-5 h-5 mr-2" />
                Enviar convite por e-mail
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VidaFrutifera;
