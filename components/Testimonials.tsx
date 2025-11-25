"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "./ui/button";

interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mariana Costa",
    procedure: "Mamoplastia de Aumento",
    text: "Desde a primeira consulta me senti acolhida e segura. O Dr. André é extremamente atencioso e me ajudou a escolher o tamanho ideal das próteses. O resultado superou todas as minhas expectativas! Minha autoestima melhorou muito e eu me sinto linda e confiante. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    id: "2",
    name: "Fernanda Oliveira",
    procedure: "Mamoplastia de Redução",
    text: "Profissional excepcional! Sofria muito com dores nas costas e o Dr. André me devolveu qualidade de vida. A cirurgia foi tranquila e o resultado ficou incrível, natural e proporcional ao meu corpo. A clínica é impecável e toda a equipe é muito atenciosa. Agradeço por todo cuidado!",
    rating: 5,
  },
  {
    id: "3",
    name: "Juliana Mendes",
    procedure: "Mastopexia com Prótese",
    text: "Experiência maravilhosa do início ao fim! Após amamentar queria recuperar a firmeza das mamas. O Dr. André me explicou todo o procedimento com clareza e me deixou super tranquila. O resultado ficou exatamente como eu sonhava, natural e harmonioso. Sou muito grata!",
    rating: 5,
  },
  {
    id: "4",
    name: "Carolina Santos",
    procedure: "Troca de Prótese",
    text: "Sem palavras para descrever a qualidade do trabalho do Dr. André! Precisava trocar minhas próteses antigas e ele me orientou sobre as melhores opções. Me sinto renovada e feliz com o resultado. Todo o processo foi muito tranquilo e o resultado é impecável!",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-[#f9f7f2]">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <div 
              className="text-[#d4a574] uppercase tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Prova Social
            </div>
            <div className="w-20 h-1 bg-[#d4a574] mx-auto"></div>
          </div>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-[#0e1c36] max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            O Que Dizem Nossos Pacientes
          </h2>

          <p 
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Histórias reais de transformação e satisfação
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
                  index === 0 ? 'md:scale-105' : 'md:scale-95 md:opacity-90'
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-[#d4a574] opacity-30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d4a574] text-[#d4a574]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p 
                  className="text-gray-700 mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <div 
                    className="text-[#0e1c36]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {testimonial.name}
                  </div>
                  <div 
                    className="text-sm text-[#d4a574]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {testimonial.procedure}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-2 border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#d4a574] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-2 border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}