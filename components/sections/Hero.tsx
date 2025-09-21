import { LuArrowRight } from "react-icons/lu";
import { ButtonGema } from "../ui/ButtonGema";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-4 overflow-hidden bg-background"
    >
      {/* Main content grid */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-3 items-center max-w-7xl mx-auto">
        {/* Left side - Text content */}
        <div className="lg:col-span-6 space-y-8 pl-0 md:pl-12 mt-14 lg:mt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand/60 rounded-full text-sm text-brand">
            <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            Disponível para novos projetos
          </div>
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-black leading-none tracking-tight">
              <span className="block text-foreground-heading">SOLUÇÕES</span>
              <span className="block text-brand italic transform -skew-x-12">
                DIGITAIS
              </span>
              <span className="block text-foreground-heading">ÚNICAS</span>
            </h1>

            <p className="2xl:text-xl text-foreground-body max-w-lg leading-relaxed">
              Desenvolvemos experiências digitais que conectam pessoas e marcas.
              Cada projeto é único, pensado para seu sucesso.
            </p>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-4">
            <ButtonGema>Começar Projeto</ButtonGema>
            <ButtonGema variant="ghost">Ver Portfolio</ButtonGema>
          </div>
        </div>

        {/* Right side - Services list */}
        <div className="px-0 md:px-12 lg:col-span-6 2xl:space-y-4 mt-14 lg:mt-0">
          <div className="text-sm uppercase tracking-wider text-foreground-body">
            O QUE FAZEMOS
          </div>

          {[
            { name: "LANDING PAGES", desc: "Design focado em conversão" },
            { name: "E-COMMERCE", desc: "Lojas virtuais completas" },
            { name: "ROBLOX GAMES", desc: "Experiências interativas" },
            { name: "APPS MOBILE", desc: "Aplicativos nativos" },
            { name: "DESKTOP APPS", desc: "Software profissional" },
          ].map((service, index) => (
            <div key={service.name} className="group cursor-pointer">
              <div className="flex items-center justify-between py-4 border-b border-border group-hover:border-brand transition-colors">
                <div>
                  <div className="font-bold text-lg tracking-wide">
                    {service.name}
                  </div>
                  <div className="text-foreground-body">{service.desc}</div>
                </div>
                <LuArrowRight className="w-5 h-5 text-foreground-body group-hover:text-brand group-hover:translate-x-2 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom indicator */}
    </section>
  );
}
