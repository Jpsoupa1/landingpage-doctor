"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Send,
} from "lucide-react";
import { toast } from "sonner";


export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Mensagem enviada com sucesso! Em breve entraremos em contato.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <footer id="contato" className="bg-[#0e1c36] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl mb-6 text-[#d4a574]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Entre em Contato
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Nome completo"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#d4a574]"
              />
              <Input
                type="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#d4a574]"
              />
              <Input
                type="tel"
                placeholder="Telefone"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#d4a574]"
              />
              <Textarea
                placeholder="Mensagem"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#d4a574] resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-[#d4a574] hover:bg-[#e8c49a] text-[#0e1c36] rounded-full"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3
                className="text-2xl mb-6 text-[#d4a574]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Localização
              </h3>

              <div
                className="space-y-4"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-300">
                      Avenida Paulista, 1500 - Conjunto 2001
                    </div>
                    <div className="text-gray-300">
                      Bela Vista, São Paulo - SP
                    </div>
                    <div className="text-gray-300">
                      CEP: 01310-100
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4a574]" />
                  <div className="text-gray-300">
                    (61) 98163-6263
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d4a574]" />
                  <div className="text-gray-300">
                    mauroppassos@hotmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/10 rounded-2xl overflow-hidden h-64">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-[#d4a574]" />
                  <p style={{ fontFamily: "var(--font-sans)" }}>
                    Mapa de localização da clínica
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Av. Paulista, 1500 - São Paulo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3
                className="text-2xl mb-6 text-[#d4a574]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Horário de Atendimento
              </h3>

              <div
                className="space-y-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <div className="flex justify-between text-gray-300">
                  <span>Segunda a Sexta</span>
                  <span>8h - 19h</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Sábados</span>
                  <span>9h - 14h</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Domingos e Feriados</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>

            <div>
              <h3
                className="text-2xl mb-6 text-[#d4a574]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Siga-nos
              </h3>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors"
                >
                  <Instagram className="https://www.instagram.com/dr.mauropassos/#" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <p className="mb-2">
                  <strong className="text-[#d4a574]">
                    Dr. Mauro Passos
                  </strong>
                </p>
                <p>CRM: 123.456 | RQE: 12345</p>
                <p className="mt-4 text-xs">
                  Membro da Sociedade Brasileira de Mastologia (SBM)
                  e Sociedade Brasileira de Cirurgia Plástica (SBCP)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div
            className="text-center text-sm text-gray-400"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <p>
              © 2024 Dr. André Silva - Mastologia Estética.
              Todos os direitos reservados.
            </p>
            <p className="mt-2 text-xs">
              Este site não substitui consulta médica.
              Resultados podem variar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}