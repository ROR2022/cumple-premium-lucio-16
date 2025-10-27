"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { quinceMainData } from "@/components/sections/data/main-data";

// Componente interno que usa useSearchParams
function EnvelopeContent({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [inviteData, setInviteData] = useState(null); // Datos de la invitación

  const searchParams = useSearchParams();
  const { event } = quinceMainData;

  // Recuperar el query parameter "guest" al montar el componente
  useEffect(() => {
    const guestParam = searchParams.get("guest");
    if (guestParam) {
      getDataGuest(guestParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!inviteData) {
      //setGuestName("Familia Hernández Jimenez"); // Fallback si no se proporciona nombre
      console.log("No guest name provided, using fallback.");
    }
  }, [inviteData]);

  const getDataGuest = async (id) => {
    // Aquí podrías hacer una llamada a una API o buscar en un objeto local
    try {
      const response = await fetch(`/api/guests/${id}`);
      if (response.ok) {
        const data = await response.json();
        //console.log("Guest data:", data);
        if (data) {
          const dataGuest = data.data;
          const { personalInvitation } = dataGuest;
          setInviteData({
            name: dataGuest.name,
            message: personalInvitation.message,
          });
        }
      } else {
        console.error("Guest not found");
      }
    } catch (error) {
      console.error("Error fetching guest data:", error);
    }
  };

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpened(true);
      setTimeout(() => {
        onOpen();
      }, 100);
    }, 200);
  };

  /**
   * <div className="flex flex-col items-center mb-16 text-amber-800 font-main-text text-lg">
          <h5>{inviteData? "Invitación Para: " : ""}</h5>
          <div className="mt-2 text-2xl font-semibold">{inviteData ? inviteData.name : ""}</div>
          <div className="mt-2 text-lg">{event.date.full}</div>
          <div className="mt-1 text-sm italic px-8 text-center">
            {inviteData ? inviteData.message : ""}
          </div>
        </div>
   */

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center z-[60] cursor-pointer overflow-hidden"
      onClick={handleOpen}
    >
      {/* Video de fondo */}
      <div className="fixed inset-0 z-[-1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/videoTerror1.mp4" type="video/mp4" />
        </video>
        {/* Overlay para Halloween */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-black/60 to-purple-900/40" />
      </div>

      {/* Efectos de ambiente Halloween */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luces parpadeantes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-red-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}} />
        
        {/* Partículas flotantes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.7s'}} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '1.2s'}} />
      </div>

      {/* Información del invitado */}
      <div className="flex flex-col items-center mb-12 text-center z-10 px-4">
        {inviteData && (
          <>
            <h5 className="text-orange-400 font-bold text-lg mb-2 tracking-wide">
              🎃 INVITACIÓN ESPECIAL PARA 🎃
            </h5>
            <div className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
              {inviteData.name}
            </div>
            <div className="text-orange-300 text-lg mb-2">
              {event.date.full}
            </div>
            {inviteData.message && (
              <div className="text-purple-200 text-sm italic px-8 max-w-md">
                {inviteData.message}
              </div>
            )}
          </>
        )}
      </div>

      {/* Instrucción principal con estilo Halloween */}
      <div className="relative z-10 text-center">
        <div className="relative group">
          {/* Efecto de brillo detrás del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse" />
          
          {/* Texto principal */}
          <div className="relative bg-black/60 backdrop-blur-sm border border-orange-500/50 rounded-lg px-8 py-6 group-hover:border-orange-400 transition-all duration-300 hover:scale-105">
            <div className="text-orange-400 text-sm font-semibold mb-2 tracking-widest uppercase">
              👻 ¿Estás listo? 👻
            </div>
            <div className="text-white text-xl font-bold mb-2 drop-shadow-lg">
              Click para ver tu invitación
            </div>
            <div className="text-orange-300 text-xs animate-bounce">
              🕷️ Toca en cualquier parte de la pantalla 🕷️
            </div>
          </div>
        </div>

        {/* Indicador visual adicional */}
        <div className="mt-6 text-purple-300 text-xs opacity-75 animate-pulse">
          ▼ Toca aquí abajo también ▼
        </div>
      </div>

      {/* Efectos decorativos Halloween */}
      <div className="absolute bottom-10 left-10 text-4xl animate-bounce opacity-60 pointer-events-none" style={{animationDelay: '0.3s'}}>
        🎃
      </div>
      <div className="absolute top-10 right-10 text-3xl animate-bounce opacity-60 pointer-events-none" style={{animationDelay: '0.8s'}}>
        👻
      </div>
      <div className="absolute bottom-20 right-20 text-2xl animate-bounce opacity-60 pointer-events-none" style={{animationDelay: '1.3s'}}>
        🕸️
      </div>
      <div className="absolute top-1/2 left-10 text-2xl animate-bounce opacity-60 pointer-events-none" style={{animationDelay: '1.8s'}}>
        🦇
      </div>
      <div className="absolute top-1/3 right-5 text-xl animate-bounce opacity-60 pointer-events-none" style={{animationDelay: '2.3s'}}>
        🕷️
      </div>
    </div>
  );
}

// Componente de loading/fallback
function EnvelopeLoading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50 flex flex-col items-center justify-center z-[60]">
      <div className="flex flex-col items-center mb-16 text-amber-800 font-main-text text-lg">
        <h5>Invitación Para:</h5>
        <div className="mt-2 text-2xl font-semibold animate-pulse bg-amber-200 h-8 w-64 rounded"></div>
        <div className="mt-2 text-lg">Cargando...</div>
        <div className="mt-1 text-sm italic px-8 text-center">
          Preparando tu invitación personalizada...
        </div>
      </div>

      {/* Envelope placeholder */}
      <div className="relative">
        <div
          className="relative animate-pulse"
          style={{ width: "450px", height: "300px" }}
        >
          <div className="absolute inset-0 bg-amber-100 rounded-lg"></div>
        </div>
      </div>

      {/* Ambient light effects */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-amber-200/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-200/5 rounded-full blur-3xl" />
    </div>
  );
}

// Componente principal exportado con Suspense
export default function EnvelopeOpening({ onOpen = () => {} }) {
  return (
    <Suspense fallback={<EnvelopeLoading />}>
      <EnvelopeContent onOpen={onOpen} />
    </Suspense>
  );
}
