import { LuEggFried, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {

  return (
    <footer className="py-16 px-4 bg-card border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-brand mr-3">
                <LuEggFried className="w-5 h-5 text-foreground-heading" />
              </div>
              <span className="text-xl font-bold">GemaSoftwork</span>
            </div>
            <p className="text-foreground-body mb-6 max-w-md">
              Transformamos ideias em soluções digitais completas.
              Desenvolvimento web, mobile e desktop de alta qualidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-surface-soft flex items-center justify-center hover:bg-brand transition-colors"
              >
                <LuGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-surface-soft flex items-center justify-center hover:bg-brand transition-colors"
              >
                <LuLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-surface-soft flex items-center justify-center hover:bg-brand transition-colors"
              >
                <LuMail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-surface-soft flex items-center justify-center hover:bg-brand transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-foreground-body">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Sites Institucionais
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Apps Mobile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Apps Desktop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Jogos Roblox
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-foreground-body">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Orçamento
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-foreground-body flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-body text-sm">
            © 2024 Gema Softwork. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-foreground-body text-sm hover:text-black transition-colors"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-foreground-body text-sm hover:text-black transition-colors"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
