// import { Button } from "@/components/ui/button";
// import { ArrowRight, MessageCircle } from "lucide-react";
import { LuMessageCircle , LuArrowRight } from "react-icons/lu";

import { ButtonGema } from "../ui/ButtonGema";

export default function CTA() {
  return (
    <section className="py-32 px-4 bg-black text-background relative overflow-hidden">
      {/* Geometric decorations */}
      {/* <div className="absolute inset-0">
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-brand/30 rotate-12" />
        <div className="absolute top-1/2 left-10 w-2 h-32 bg-brand/50" />
      </div> */}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Call to action */}
          <div>
            <div className="mb-8">
              <div className="text-sm uppercase tracking-wider text-brand font-bold mb-4">
                PRÓXIMO NÍVEL
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-none mb-6">
                VAMOS
                <br />
                FAZER
                <br />
                <span className="text-brand">ACONTECER</span>
              </h2>
              <p className="text-xl text-surface-soft leading-relaxed">
                Não perca tempo com amadores. Trabalhe com quem entrega
                resultados brutais.
              </p>
            </div>

            <div className="space-y-4">
              <ButtonGema>
                <LuMessageCircle /> QUERO MEU PROJETO <LuArrowRight />
              </ButtonGema>
            </div>
          </div>

          {/* Right side - Contact details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contato direto</h3>
              <div className="space-y-3 text-surface-soft">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand rounded-full" />
                  <a
                    href="mailto:contato@empresa.com"
                    className="text-lg hover:text-brand transition-colors"
                  >
                    contato@empresa.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand rounded-full" />
                  <a
                    href="tel:+5511999999999"
                    className="text-lg hover:text-brand transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-brand pl-6">
              <h4 className="font-bold mb-2">Processo simples</h4>
              <ol className="text-surface-soft space-y-1">
                <li>1. Você conta sua ideia</li>
                <li>2. Nós criamos a solução</li>
                <li>3. Você lucra mais</li>
              </ol>
            </div>

            <div className="pt-6 border-t border-background/20">
              <p className="text-sm text-background/50">
                Resposta garantida em até 2 horas úteis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}