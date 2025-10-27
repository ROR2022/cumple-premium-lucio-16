// 🎃 ParentsSection - Sección de información de padres con estilo Halloween

import React, {useState, useEffect, useRef, useCallback} from "react";
//import Image from "next/image";
import { quinceMainData } from "@/components/sections/data/main-data";

export default function ParentsSection() {
  //const { parents } = weddingData;
  const { parents, godparents } = quinceMainData.event;
  const sectionRef = useRef(null);
  
  // Estados para animaciones escalonadas
  const [isInView, setIsInView] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [parentsVisible, setParentsVisible] = useState(false);
  const [godparentsVisible, setGodparentsVisible] = useState(false);

  // Hook personalizado para IntersectionObserver
  const useIntersectionObserver = useCallback(() => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Secuencia de animaciones escalonadas
            setTimeout(() => setMessageVisible(true), 300);
            setTimeout(() => setParentsVisible(true), 700);
            setTimeout(() => setGodparentsVisible(true), 1100);
          } else {
            // Reset cuando sale de vista
            setIsInView(false);
            setMessageVisible(false);
            setParentsVisible(false);
            setGodparentsVisible(false);
          }
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);
  }, []);

  useIntersectionObserver();

  // Función helper para clases de animación
  const getAnimationClass = (isVisible, animationType, delay = '') => {
    const baseClass = 'animate-on-scroll';
    const animClass = isVisible ? `animate-${animationType} ${delay}` : '';
    return `${baseClass} ${animClass}`.trim();
  };
  
  const basicClass="font-main-text text-5xl text-orange-500 mb-4";
  const completeClass="font-main-text text-5xl text-orange-500 mb-4 scale-up-center";

  return (
    <section 
      ref={sectionRef}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(75, 0, 130, 0.8) 100%), url('${parents.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
      id="parents" 
      className={`py-20 bg-gradient-to-br from-orange-900 via-black to-purple-900 ${isInView ? 'bg-parallax' : ''} overflow-hidden`}
    >
      {/* Efectos de ambiente Halloween */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Niebla flotante */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-500/10 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-500/10 to-transparent animate-pulse" />
        
        {/* Luces misteriosas */}
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.2s'}} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Elementos decorativos Halloween flotantes */}
      <div className="decorative-element top-10 left-10 animate-float delay-200">
        <span className="text-3xl animate-bounce opacity-70" style={{animationDelay: '0.3s'}}>🎃</span>
      </div>
      <div className="decorative-element top-20 right-16 animate-float delay-700">
        <span className="text-2xl animate-bounce opacity-70" style={{animationDelay: '0.8s'}}>👻</span>
      </div>
      <div className="decorative-element bottom-20 left-20 animate-float delay-1000">
        <span className="text-2xl animate-bounce opacity-70" style={{animationDelay: '1.3s'}}>�️</span>
      </div>
      <div className="decorative-element bottom-16 right-10 animate-float delay-400">
        <span className="text-3xl animate-bounce opacity-70" style={{animationDelay: '0.6s'}}>🦇</span>
      </div>
      <div className="decorative-element top-1/2 right-5 animate-float delay-800">
        <span className="text-xl animate-bounce opacity-70" style={{animationDelay: '1.5s'}}>🕸️</span>
      </div>
      <div className="decorative-element top-1/3 left-5 animate-float delay-600">
        <span className="text-xl animate-bounce opacity-70" style={{animationDelay: '2.2s'}}>🧙‍♀️</span>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            
            <div className="relative p-8 rounded-2xl z-10 text-center space-y-8 py-12 backdrop-blur-sm bg-black/40 border border-orange-500/30 shadow-2xl">
              
              {/* Título Halloween */}
              <div className={getAnimationClass(isInView, 'fade-in-up', 'delay-100')}>
                <h2 className="text-4xl font-bold text-orange-400 mb-6 drop-shadow-lg">
                  🎃 Información de la Fiesta 🎃
                </h2>
              </div>

              {/* Mensaje principal con animación */}
              <div className={getAnimationClass(messageVisible, 'fade-in-up', 'delay-200')}>
                <div className="relative">
                  {/* Efecto de brillo detrás del texto */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 rounded-lg blur-xl animate-pulse" />
                  
                  <p className="relative text-lg italic max-w-2xl mx-auto leading-relaxed text-orange-100 drop-shadow-md border border-orange-500/20 rounded-lg p-6 bg-black/30">
                    {parents.message}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                
                {/* Código de acceso con estilo Halloween */}
                <div className={getAnimationClass(parentsVisible, 'fade-in-up', 'delay-300')}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-purple-600 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    
                    <div className="relative bg-black/60 border border-red-500/50 rounded-lg px-6 py-4 hover:border-red-400 transition-all duration-300">
                      <div className="text-red-400 text-sm font-semibold mb-1 tracking-widest uppercase">
                        🔐 Código Secreto 🔐
                      </div>
                      <p className="text-2xl font-bold text-white drop-shadow-lg">
                        6666
                      </p>
                      <div className="text-red-300 text-xs mt-1">
                        ⚠️ Solo para invitados especiales ⚠️
                      </div>
                    </div>
                  </div>
                </div>

                {/* Show DJ con estilo Halloween */}
                <div className={getAnimationClass(godparentsVisible, 'fade-in-up', 'delay-400')}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-orange-600 to-green-600 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    
                    <div className="relative bg-black/60 border border-purple-500/50 rounded-lg px-6 py-4 hover:border-purple-400 transition-all duration-300">
                      <div className="text-purple-400 text-sm font-semibold mb-1 tracking-widest uppercase">
                        🎵 Entretenimiento Espeluznante 🎵
                      </div>
                      <p className="text-xl font-bold text-white drop-shadow-lg">
                        Show DJ y Mucha diversión
                      </p>
                      <div className="text-purple-300 text-xs mt-1">
                        🎶 Música que te pondrá los pelos de punta 🎶
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              {/* Efectos adicionales */}
              <div className="absolute -top-4 -left-4 text-2xl animate-spin opacity-50" style={{animationDuration: '3s'}}>
                🕸️
              </div>
              <div className="absolute -bottom-4 -right-4 text-2xl animate-spin opacity-50" style={{animationDuration: '4s', animationDirection: 'reverse'}}>
                🎃
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partículas flotantes adicionales */}
      <div className="absolute top-10 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}} />
      <div className="absolute top-20 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1.5s'}} />
      <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}} />
    </section>
  );
}
