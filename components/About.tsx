import { Award, GraduationCap, Heart, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc2Mzk1MTQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Clínica Dr. André Silva"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#d4a574] rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div 
                  className="text-[#d4a574] uppercase tracking-wider mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Sobre o Dr. Silva
                </div>
                <div className="w-20 h-1 bg-[#d4a574]"></div>
              </div>
              
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#0e1c36]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Especialista em Mastologia Estética
              </h2>
            </div>

            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
              <p className="text-lg leading-relaxed">
                Com mais de 15 anos de experiência em mastologia estética, o Dr. André Silva é 
                reconhecido como um dos principais especialistas em cirurgias mamárias do país, 
                combinando técnicas avançadas com sensibilidade artística e cuidado personalizado.
              </p>
              <p className="leading-relaxed">
                Formado pela Universidade de São Paulo e com especializações em renomadas 
                instituições internacionais, o Dr. Silva é membro titular da Sociedade 
                Brasileira de Mastologia (SBM) e da Sociedade Brasileira de Cirurgia Plástica (SBCP), 
                dedicando-se exclusivamente a procedimentos estéticos mamários.
              </p>
              <p className="leading-relaxed">
                Sua filosofia de trabalho baseia-se em criar resultados naturais e harmoniosos, 
                sempre respeitando as proporções corporais e os desejos de cada paciente. 
                Especializado em mamoplastias de aumento, redução, lifting e reconstrução mamária.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0e1c36] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <div className="text-[#0e1c36]">Formação USP</div>
                  <div className="text-sm text-gray-600">Especialização Internacional</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0e1c36] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <div className="text-[#0e1c36]">Membro SBCP</div>
                  <div className="text-sm text-gray-600">Certificação Internacional</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0e1c36] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <div className="text-[#0e1c36]">5000+ Cirurgias</div>
                  <div className="text-sm text-gray-600">Resultados Comprovados</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0e1c36] rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <div className="text-[#0e1c36]">Segurança Total</div>
                  <div className="text-sm text-gray-600">Clínica Certificada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}