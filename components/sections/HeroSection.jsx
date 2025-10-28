// 🏠 HeroSection - Sección principal/portada

import React, { useEffect, useState } from "react";
//import Image from 'next/image'
import { Heart } from "lucide-react";
import { quinceMainData } from "@/components/sections/data/main-data";
import BackgroundCarrousel from "../../components/sections/BackgroundCarrousel";
//import { getOverlayStyle } from '@/utils/overlay'
//import { useScrollAnimation } from '@/hooks/useScrollAnimation'
//import { getAnimationConfig } from '@/data/animationConfig'

export default function HeroSection() {
  //const { couple, wedding } = weddingData;
  //const { heroSection } = styling
  const { hero } = quinceMainData;
  const { backgroundCarrouselImages } = hero;
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(false);

  const basicClass = "font-halloween text-4xl text-orange-500 mb-4 italic";
  const completeClass =
    "blood-drip-text blood-drip-lg text-red-600 mb-4 scale-up-center italic";

  useEffect(() => {
    const handleScroll = () => {
      //console.log('Scroll position:', window.scrollY);
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= 0 && scrollPosition < 300) {
      setIsVisible(true);
    }
  }, [scrollPosition]);

  return (
    <section
      //ref={sectionRef}
      style={{
        backgroundImage: `url('${hero.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#89ac76",
        position: "relative",
      }}
      //id="home"
      className="min-h-screen flex flex-col justify-center items-center relative pt-20"
    >
      <BackgroundCarrousel images={backgroundCarrouselImages}/>

      {/* Contenido principal con estilo Halloween */}
      <div className="relative z-10 text-center space-y-8 px-4">
        
        {/* Contenedor principal con efectos Halloween */}
        <div className="bg-black/60 backdrop-blur-sm border-2 border-orange-500/50 p-8 rounded-2xl relative overflow-hidden hover:border-orange-400 transition-all duration-300">
          
          {/* Efectos decorativos Halloween */}
          <div className="absolute -top-4 -left-4 text-3xl animate-spin opacity-60" style={{animationDuration: '4s'}}>
            🕸️
          </div>
          <div className="absolute -top-4 -right-4 text-3xl animate-bounce opacity-60" style={{animationDelay: '0.5s'}}>
            🎃
          </div>
          <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce opacity-60" style={{animationDelay: '1s'}}>
            👻
          </div>
          <div className="absolute -bottom-4 -right-4 text-2xl animate-spin opacity-60" style={{animationDuration: '3s', animationDirection: 'reverse'}}>
            🦇
          </div>

          {/* Subtítulo Halloween */}
          <h1
            style={{
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 102, 0, 0.6)",
            }}
            className={isVisible ? completeClass : basicClass}
          >
            🎃 {hero.subtitle.split(" ").map((word, index) => (
              <span key={index}>
                {index === 1 ? <span className="italic text-purple-400">{word}</span> : word}
                {index < hero.subtitle.split(" ").length - 1 && " "}
              </span>
            ))} 🎃
          </h1>

          {/* Nombre principal con efecto blood drip */}
          <div className="space-y-4">
            <div className="relative">
              {/* Efecto de brillo detrás del nombre */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-purple-600 rounded-lg blur-2xl opacity-40 animate-pulse" />
              
              <div
                style={{
                  textShadow: "6px 6px 12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.8)",
                }}
                className="relative blood-drip-text blood-drip-xl text-white font-bold tracking-wider"
              >
                👻 {hero.name} 👻
              </div>
            </div>
            
            {/* Texto adicional Halloween */}
            <div className="font-nosifer text-xl text-orange-400 animate-pulse">
              ¡Una noche de terror y diversión!
            </div>
            
            {/* Elementos decorativos adicionales */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <span className="text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>🕷️</span>
              <span className="text-3xl animate-pulse text-orange-500">💀</span>
              <span className="horror-combo text-xl font-bold">CUMPLEAÑOS</span>
              <span className="text-3xl animate-pulse text-orange-500">💀</span>
              <span className="text-2xl animate-bounce" style={{animationDelay: '0.8s'}}>🕷️</span>
            </div>
          </div>
        </div>

        {/* Efectos de ambiente flotantes */}
        <div className="absolute top-20 left-10 text-2xl animate-float opacity-50">
          🧙‍♀️
        </div>
        <div className="absolute top-32 right-16 text-xl animate-float opacity-50" style={{animationDelay: '1s'}}>
          🔮
        </div>
        <div className="absolute bottom-20 left-20 text-2xl animate-float opacity-50" style={{animationDelay: '1.5s'}}>
          ⚰️
        </div>
        <div className="absolute bottom-32 right-10 text-xl animate-float opacity-50" style={{animationDelay: '2s'}}>
          🌙
        </div>
        
      </div>
    </section>
  );
}
