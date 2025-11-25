"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";



interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
}

const videos: VideoItem[] = [
  {
    id: "1",
    title: "Mamoplastia de Aumento",
    description: "Técnicas modernas com próteses de silicone",
    thumbnail: "https://images.unsplash.com/photo-1579684288452-b334934f845f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvY2VkdXJlJTIwbW9kZXJufGVufDF8fHx8MTc2NDA2MDI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "2",
    title: "Mamoplastia de Redução",
    description: "Alívio e harmonia corporal",
    thumbnail: "https://images.unsplash.com/photo-1606685622133-ed6fbaaf445c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3VyZ2VyeSUyMG9wZXJhdGlvbnxlbnwxfHx8fDE3NjQwNjAyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "3",
    title: "Mastopexia (Lifting de Mama)",
    description: "Restauração da firmeza e posição",
    thumbnail: "https://images.unsplash.com/photo-1757152962882-6bf8495b324d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VyZ2VyeSUyMHJvb218ZW58MXx8fHwxNzYzOTUyMjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "4",
    title: "Reconstrução Mamária",
    description: "Restabelecimento estético pós-mastectomia",
    thumbnail: "https://images.unsplash.com/photo-1763887487088-469f68e3d68c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHN1cmdlcnklMjBjbGluaWN8ZW58MXx8fHwxNzY0MDUxNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section id="especializacoes" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <div
              className="text-[#d4a574] uppercase tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Procedimentos em Foco
            </div>
            <div className="w-20 h-1 bg-[#d4a574] mx-auto"></div>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#0e1c36] max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Procedimentos Estéticos Mamários
          </h2>

          <p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Conheça os procedimentos especializados que realizamos com excelência
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-[3/4]">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c36] via-[#0e1c36]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#d4a574] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 text-[#0e1c36] ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className="text-xl mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {video.title}
                  </h3>
                  <p
                    className="text-sm text-gray-300"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-12 right-0 text-white hover:text-[#d4a574] transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-8 h-8" />
              </button>

              <div className="bg-white rounded-2xl p-8 text-center">
                <h3
                  className="text-2xl text-[#0e1c36] mb-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {selectedVideo.title}
                </h3>
                <p
                  className="text-gray-700 mb-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {selectedVideo.description}
                </p>
                <div className="bg-gray-100 rounded-lg p-12 text-gray-500">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <p style={{ fontFamily: 'var(--font-sans)' }}>
                    Vídeo demonstrativo do procedimento
                  </p>
                  <p className="text-sm mt-2" style={{ fontFamily: 'var(--font-sans)' }}>
                    (Conteúdo educativo para fins ilustrativos)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}