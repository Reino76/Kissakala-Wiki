import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  logoSrc: string;
  base: string;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, logoSrc, base }) => {
  return (
    <header 
      style={{ viewTransitionName: 'header' }}
      className="sticky top-0 z-40 w-full h-16 border-b border-zinc-200 bg-white/90 backdrop-blur-md shrink-0"
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center gap-4">
        <button onClick={onMenuClick} className="p-2 lg:hidden text-zinc-500" aria-label="Avaa valikko">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <a href={base} className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <img src={logoSrc} alt="Logo" className="w-full h-full object-contain rounded-lg border border-zinc-100 shadow-sm" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic text-zinc-800">KISSAKALA</span>
        </a>
      </div>
    </header>
  );
};
