// import { Badge } from "@/components/ui/badge";
import { LuArrowUpRight } from "react-icons/lu";

const services = [
  {
    number: "01",
    category: "WEB",
    title: "Landing Pages",
    description: "Páginas brutais que convertem",
    price: "A partir de R$ 2.500",
    tags: ["High-Convert", "Mobile-First", "Speed"]
  },
  {
    number: "02", 
    category: "WEB",
    title: "E-commerce",
    description: "Lojas que vendem sozinhas",
    price: "A partir de R$ 8.000",
    tags: ["Checkout", "Analytics", "Growth"]
  },
  {
    number: "03",
    category: "GAME",
    title: "Roblox Games",
    description: "Experiências que viciam",
    price: "A partir de R$ 5.000", 
    tags: ["Lua Script", "Monetization", "UGC"]
  },
  {
    number: "04",
    category: "APP",
    title: "Mobile Apps",
    description: "Apps nativos de alto impacto",
    price: "A partir de R$ 15.000",
    tags: ["React Native", "Push", "Offline"]
  },
  {
    number: "05",
    category: "APP", 
    title: "Desktop Apps",
    description: "Software desktop poderoso",
    price: "A partir de R$ 12.000",
    tags: ["Electron", "Cross-Platform", "Auto-Update"]
  }
];

const Services = () => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-brand flex-1" />
            <span className="border border-brand rounded-full px-4 py-1 text-brand font-bold">
              SERVIÇOS
            </span>
            <div className="h-px bg-brand flex-1" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-center mb-6">
            ARSENAL
            <br />
            <span className="text-brand">COMPLETO</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group border-b border-foreground hover:border-brand transition-colors duration-300 pb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Number & Category */}
                <div className="lg:col-span-2 flex items-center gap-4">
                  <span className="text-6xl font-black text-brand/20 group-hover:text-brand transition-colors">
                    {service.number}
                  </span>
                  <span className="bg-black text-brand px-2 py-1 rounded-full text-xs font-bold">
                    {service.category}
                  </span>
                </div>

                {/* Service Info */}
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="text-2xl font-bold group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground text-lg">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-surface px-2 py-1 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-6">
                  <div className="text-right">
                    <div className="text-sm text-foreground">
                      Investimento
                    </div>
                    <div className="text-xl font-bold">{service.price}</div>
                  </div>
                  <LuArrowUpRight className="w-6 h-6 text-foreground group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">
            Projeto único? Vamos conversar sobre seu orçamento personalizado.
          </p>
          <div className="text-sm uppercase tracking-wider text-brand font-bold">
            SOLICITAR ORÇAMENTO CUSTOM
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;