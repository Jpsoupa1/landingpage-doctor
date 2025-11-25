import { Button } from "./ui/button";
import { Calendar, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0e1c36] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a574] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4a574] rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-8 bg-[#d4a574]"></div>
          <div>
            <div className="text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              Dr. Mauro Passos
            </div>
            <div className="text-[#d4a574] text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
              Mastologia Estética
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-white" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#sobre" className="hover:text-[#d4a574] transition-colors">
            Sobre
          </a>
          <a href="#especializacoes" className="hover:text-[#d4a574] transition-colors">
            Procedimentos
          </a>
          <a href="#transformacoes" className="hover:text-[#d4a574] transition-colors">
            Resultados
          </a>
          <a href="#depoimentos" className="hover:text-[#d4a574] transition-colors">
            Depoimentos
          </a>
          <a href="#contato" className="hover:text-[#d4a574] transition-colors">
            Contato
          </a>
        </div>

        <Button 
          className="hidden md:flex bg-[#d4a574] hover:bg-[#e8c49a] text-[#0e1c36] rounded-full px-6"
        >
          <Phone className="w-4 h-4 mr-2" />
          Ligar Agora
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Beleza e Autoestima através da Mastologia Estética
              </h1>
              <p 
                className="text-lg md:text-xl text-gray-300 max-w-xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Especialista em procedimentos estéticos mamários com excelência e naturalidade
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-[#d4a574] hover:bg-[#e8c49a] text-[#0e1c36] rounded-full px-8 py-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-[#0e1c36] rounded-full px-8 py-6"
              >
                Conhecer Mais
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-1">
                <div 
                  className="text-3xl text-[#d4a574]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  15+
                </div>
                <div className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-sans)' }}>
                  Anos de Experiência
                </div>
              </div>
              <div className="space-y-1">
                <div 
                  className="text-3xl text-[#d4a574]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  5000+
                </div>
                <div className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-sans)' }}>
                  Cirurgias Realizadas
                </div>
              </div>
              <div className="space-y-1">
                <div 
                  className="text-3xl text-[#d4a574]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  98%
                </div>
                <div className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-sans)' }}>
                  Satisfação
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://cdn.discordapp.com/attachments/1442781274191167614/1442800083790729246/image.png?ex=6926bfc9&is=69256e49&hm=348ef71d164ed0722cd48098886b8ce4b7317e819091d30146ad04529b46ce0c"
                  alt="Dr. André Silva"
                  className="w-full h-full object-cover object-center"
                />
                {/* Gold Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c36]/50 to-transparent"></div>
              </div>
              {/* Decorative Gold Border */}
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#d4a574] rounded-2xl -z-10"></div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#d4a574] opacity-20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#d4a574] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#d4a574] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}