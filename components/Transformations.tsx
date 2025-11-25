import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function Transformations() {
  return (
    <section id="transformacoes" className="py-20 md:py-32 bg-[#0e1c36]">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <div 
              className="text-[#d4a574] uppercase tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Resultados Reais
            </div>
            <div className="w-20 h-1 bg-[#d4a574] mx-auto"></div>
          </div>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Transformações Mamárias
          </h2>

          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Resultados excepcionais em procedimentos estéticos mamários
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Before/After Slider */}
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1705940372495-ab4ed45d3102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhY2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwNjAyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            afterImage="https://images.unsplash.com/photo-1647957864251-255a78d97850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhY2UlMjBiZWF1dHl8ZW58MXx8fHwxNzY0MDYwMjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            beforeLabel="Antes"
            afterLabel="Depois"
          />

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-sm text-gray-400 italic" style={{ fontFamily: 'var(--font-sans)' }}>
              * Imagens de pacientes reais com autorização. Resultados podem variar de acordo com cada caso.
            </p>
          </div>

          {/* Procedure Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#d4a574]/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div 
                  className="text-2xl text-[#d4a574] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Técnicas Avançadas
                </div>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--font-sans)' }}>
                  Próteses de última geração e procedimentos modernos
                </p>
              </div>
              <div>
                <div 
                  className="text-2xl text-[#d4a574] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Resultados Harmoniosos
                </div>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--font-sans)' }}>
                  Proporção natural respeitando seu corpo
                </p>
              </div>
              <div>
                <div 
                  className="text-2xl text-[#d4a574] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Recuperação Rápida
                </div>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--font-sans)' }}>
                  Protocolos modernos de cuidado pós-operatório
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}