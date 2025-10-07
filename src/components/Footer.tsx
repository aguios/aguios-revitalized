import { Facebook, Youtube, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aguios-primary text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ÁGUIOS</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Ministério cristão de ensino bíblico dedicado a compartilhar os fundamentos 
              da Palavra de Deus através do ensino itinerante e plataformas digitais.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/aguios.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 aguios-transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/aguios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 aguios-transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="mailto:ministerioaguios@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 aguios-transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("quem-somos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white aguios-transition"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("livros");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white aguios-transition"
                >
                  Livros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("videos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white aguios-transition"
                >
                  Vídeos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("agenda");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white aguios-transition"
                >
                  Agenda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("contato");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white aguios-transition"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div>
                <p className="text-white/60 text-sm">E-mail</p>
                <a 
                  href="mailto:ministerioaguios@gmail.com" 
                  className="text-white/80 hover:text-white aguios-transition"
                >
                  ministerioaguios@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm">Localização</p>
                <p className="text-white/80">Rio Grande do Norte, Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-white/80 mb-4 md:mb-0">
            <span>© {currentYear} Ministério Águios. Feito com</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>para a glória de Deus.</span>
          </div>
          
          <div className="text-white/60 text-sm">
            <p>"Ensina a criança no caminho em que deve andar" - Pv 22:6</p>
          </div>
        </div>
      </div>
    </footer>
  );
};