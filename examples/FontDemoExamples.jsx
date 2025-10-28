// 🎃 Demostración de todas las fuentes Blood Drip implementadas
// Copia y pega estos ejemplos en cualquier componente

export const FontDemoExamples = () => {
  return (
    <div className="space-y-8 p-8 bg-black/80 text-center">
      
      {/* Título principal con efecto blood drip */}
      <h1 className="blood-drip-text blood-drip-xl text-red-600">
        🎃 Cumpleaños de Lucio 🎃
      </h1>
      
      {/* Subtítulo con fuente Halloween */}
      <h2 className="font-halloween text-3xl text-orange-500">
        👻 Fiesta de Terror 👻
      </h2>
      
      {/* Texto con Nosifer */}
      <h3 className="font-nosifer text-2xl text-purple-400">
        Una noche espeluznante
      </h3>
      
      {/* Texto con Butcherman */}
      <div className="font-butcherman text-xl text-green-400">
        Código Secreto: 6666
      </div>
      
      {/* Texto con Eater */}
      <div className="font-eater text-lg text-yellow-500">
        Show DJ y Mucha diversión
      </div>
      
      {/* Título Halloween con efectos */}
      <div className="halloween-title text-4xl">
        🕷️ TERROR Y DIVERSIÓN 🕷️
      </div>
      
      {/* Texto con salpicaduras */}
      <div className="blood-splatter-text text-2xl">
        ¡Prepárate para el susto!
      </div>
      
      {/* Gradiente de sangre animado */}
      <div className="horror-combo text-3xl font-bold">
        ¡CUMPLEAÑOS SANGRIENTO!
      </div>
      
      {/* Combinación completa */}
      <div className="space-y-4">
        <div className="blood-drip-text blood-drip-lg text-red-500">
          🦇 Invitación Especial 🦇
        </div>
        <div className="font-nosifer text-xl text-orange-400 animate-pulse">
          Para una noche de terror
        </div>
        <div className="horror-combo text-lg">
          ¡No te lo pierdas!
        </div>
      </div>
      
    </div>
  );
};