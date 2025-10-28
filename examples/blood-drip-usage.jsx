// 🩸 Ejemplo de implementación de fuentes Blood Drip en componentes

// Opción 1: Usando las clases CSS personalizadas
<h1 className="blood-drip-text blood-drip-xl text-center">
  🎃 Cumpleaños de Lucio 🎃
</h1>

// Opción 2: Usando fuentes de Tailwind
<h2 className="font-halloween text-4xl text-orange-500">
  Fiesta Halloween
</h2>

// Opción 3: Usando fuentes específicas
<h3 className="font-nosifer text-2xl text-red-600">
  Código Secreto: 6666
</h3>

// Opción 4: Combinando efectos
<div className="halloween-title text-5xl">
  👻 Invitación Especial 👻
</div>

// Opción 5: Texto con efecto de sangre
<p className="blood-splatter-text text-xl">
  Show DJ y Mucha diversión
</p>

// Opción 6: Gradiente de sangre
<span className="horror-combo text-3xl font-bold">
  ¡TERROR Y DIVERSIÓN!
</span>

// Ejemplo completo para tu HeroSection:
<div className="text-center space-y-6">
  <h1 className="blood-drip-text blood-drip-xl">
    🎃 Cumpleaños de {hero.name} 🎃
  </h1>
  
  <div className="font-butcherman text-3xl text-orange-400">
    {hero.subtitle}
  </div>
  
  <div className="halloween-title text-2xl">
    👻 Una noche de terror y diversión 👻
  </div>
</div>