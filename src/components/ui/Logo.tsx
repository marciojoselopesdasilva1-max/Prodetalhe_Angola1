import React from 'react';

export function Logo({ className = "", light = false }: { className?: string, light?: boolean }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://i.postimg.cc/vH23nHm5/IMG-20260818-WA0011.jpg" 
        alt="Prodetalhe Logo" 
        className="h-20 sm:h-28 md:h-32 w-auto object-contain mix-blend-screen -ml-4 scale-110 sm:scale-125 origin-left"
        style={{ filter: 'contrast(10) brightness(0.8) grayscale(100%)' }}
      />
    </div>
  );
}
