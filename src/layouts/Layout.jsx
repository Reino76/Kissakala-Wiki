import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import logo from '../images/Kissanaama.png';

export default function Layout({ children, title = "Kissakala Wiki" }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleHashAndHighlight = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          const element = document.getElementById(targetId);
          
          if (element) {
            element.classList.add('highlight-target');
            setTimeout(() => {
              element.classList.remove('highlight-target');
            }, 1500);
          }
        }, 100);
      }
    };

    handleHashAndHighlight();
    window.addEventListener('hashchange', handleHashAndHighlight);
    
    return () => {
      window.removeEventListener('hashchange', handleHashAndHighlight);
    };
  }, []);

  const navigation = [
    { name: 'KOTI', href: '/Kissakala-Wiki/' },
    { 
      name: 'OPINNOT & KURSSIT', 
      items: [
        { name: 'Opintojen Rakenne', href: '/Kissakala-Wiki/opinnot/' },
        { name: 'Yhteystiedot', href: '/Kissakala-Wiki/yhteystiedot/' },
      ]
    },
    { 
      name: 'KÄYTÄNTÖ', 
      items: [
        { name: 'Projektit', href: '/Kissakala-Wiki/projektit/' },
        { name: 'Ohjelmistot ja Sovellukset', href: '/Kissakala-Wiki/ohjelmistot/' },
      ]
    },
    { 
      name: 'OPISKELIJAELÄMÄ', 
      items: [
        { name: 'Opiskelijaelämä & Tapahtumat', href: '/Kissakala-Wiki/opiskelijaelama/' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-pink-500 selection:text-white flex flex-col">
      <header className="sticky top-0 z-40 w-full h-16 border-b border-zinc-200 bg-white/90 backdrop-blur-md shrink-0">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 lg:hidden text-zinc-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
          
          <a href="/Kissakala-Wiki/" className="flex items-center gap-3 group">
            {/* Logo Image with rounded corners and border */}
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <img 
                src={logo.src} 
                alt="Kissakala Logo" 
                className="w-full h-full object-contain rounded-lg border border-zinc-100 shadow-sm"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-zinc-800">KISSAKALA</span>
          </a>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row relative">
        <aside className={`
          fixed lg:sticky top-16 left-0 z-30 
          w-64 lg:w-60 shrink-0
          h-[calc(100vh-4rem)] 
          bg-pink-200 border-r border-pink-300 
          flex flex-col transition-transform duration-200 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-hidden lg:self-start
        `}>
          <nav className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto no-scrollbar">
            {navigation.map((group) => (
              <div key={group.name} className="flex flex-col items-center gap-1.5">
                <a href={group.href || "#"} className="px-3 py-0.5 bg-pink-500 text-white rounded-full text-[9px] font-black tracking-widest border border-pink-600 shadow-sm hover:scale-105 transition-transform">
                  {group.name}
                </a>
                
                <div className="flex flex-col gap-1 w-full">
                  {group.items?.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`block px-3 py-1 rounded-full text-center text-[11px] font-bold transition-all border shadow-sm ${
                        title === item.name 
                        ? 'bg-zinc-900 text-white border-zinc-900 scale-105' 
                        : 'bg-white text-zinc-600 border-zinc-50 hover:border-pink-400 hover:text-zinc-900'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="shrink-0 p-4 bg-pink-300/20 border-t border-pink-300/50">
            <div className="flex flex-col items-center justify-center py-2 border-2 border-dashed border-pink-400/40 rounded-2xl bg-white/30 min-h-[60px]">
               <span className="text-[9px] font-black uppercase tracking-tighter text-pink-600/40">Ala Kissa Grafiikka</span>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 lg:p-12 bg-zinc-50/30 overflow-x-hidden min-w-0">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-zinc max-w-none">
              <nav className="flex text-[10px] text-zinc-400 mb-6 gap-2 uppercase tracking-widest font-black">
                <a href="/Kissakala-Wiki/" className="hover:text-pink-500 transition-colors">KOTI</a>
                <span>/</span>
                <span className="text-zinc-900">{title}</span>
              </nav>
              <h1 className="text-5xl font-black tracking-tighter text-zinc-900 mb-8 underline decoration-pink-300 decoration-8 underline-offset-4">
                {title}
              </h1>
              <div className="space-y-6 text-zinc-700 leading-7">
                {children}
              </div>
            </article>
          </div>
        </main>
      </div>
      
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-pink-900/20 backdrop-blur-sm z-20 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}
    </div>
  );
}