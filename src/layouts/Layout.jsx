import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import logo from '../images/Kissanaama.png';

export default function Layout({ children, title = "Kissakala Wiki" }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  // Initialize theme sitewide and persist between sessions
  useEffect(() => {
    const savedTheme = localStorage.getItem('kissakala-theme') || 'pink';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleHashAndHighlight = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          const element = document.getElementById(targetId);
          if (element) {
            element.classList.add('highlight-target');
            setTimeout(() => element.classList.remove('highlight-target'), 1500);
          }
        }, 100);
      }
    };
    handleHashAndHighlight();
    window.addEventListener('hashchange', handleHashAndHighlight);
    return () => window.removeEventListener('hashchange', handleHashAndHighlight);
  }, []);

  const navigation = [
    { name: 'KOTI', href: `${base}` },
    { 
      name: 'OPINNOT & KURSSIT', 
      items: [
        { name: 'Opintojen Rakenne', href: `${base}opinnot/` },
        { name: 'Yhteystiedot', href: `${base}yhteystiedot/` },
      ]
    },
    { 
      name: 'KÄYTÄNTÖ', 
      items: [
        { name: 'Projektit', href: `${base}projektit/` },
        { name: 'Ohjelmistot ja Sovellukset', href: `${base}ohjelmistot/` },
      ]
    },
    { 
      name: 'OPISKELIJAELÄMÄ', 
      items: [
        { name: 'Opiskelijaelämä & Tapahtumat', href: `${base}opiskelijaelama/` },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col">
      <header className="sticky top-0 z-40 w-full h-16 border-b border-zinc-200 bg-white/90 backdrop-blur-md shrink-0">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 lg:hidden text-zinc-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
          <a href={base} className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <img src={logo.src} alt="Logo" className="w-full h-full object-contain rounded-lg border border-zinc-100 shadow-sm" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-zinc-800">KISSAKALA</span>
          </a>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row relative">
        <aside className={`fixed lg:sticky top-16 left-0 z-30 w-64 lg:w-60 shrink-0 h-[calc(100vh-4rem)] dynamic-sidebar border-r flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} overflow-hidden lg:self-start`}>
          <nav className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto no-scrollbar">
            {navigation.map((group) => (
              <div key={group.name} className="flex flex-col items-center gap-1.5">
                <div className="px-3 py-0.5 dynamic-accent text-white rounded-full text-[9px] font-black tracking-widest border shadow-sm uppercase">{group.name}</div>
                <div className="flex flex-col gap-1 w-full">
                  {group.items?.map((item) => (
                    <a key={item.name} href={item.href} onClick={() => setSidebarOpen(false)} className={`block px-3 py-1 rounded-full text-center text-[11px] font-bold transition-all border shadow-sm ${title === item.name ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-50 hover:border-zinc-400'}`}>{item.name}</a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <div className="shrink-0 p-4 bg-black/5 border-t border-black/5">
            <div className="flex flex-col items-center justify-center py-2 border-2 border-dashed border-black/10 rounded-2xl bg-white/30 min-h-[60px]">
               <span className="text-[9px] font-black uppercase tracking-tighter opacity-30">Ala Kissa Grafiikka</span>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 lg:p-12 bg-zinc-50/30 overflow-x-hidden min-w-0">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-zinc max-w-none">
              <nav className="flex text-[10px] text-zinc-400 mb-6 gap-2 uppercase tracking-widest font-black">
                <a href={base} className="hover:text-zinc-600 transition-colors">KOTI</a>
                <span>/</span><span className="text-zinc-900">{title}</span>
              </nav>
              <h1 className="text-5xl font-black tracking-tighter text-zinc-900 mb-8 underline dynamic-underline decoration-8 underline-offset-4">{title}</h1>
              <div className="space-y-6 text-zinc-700 leading-7">{children}</div>
            </article>
          </div>
        </main>
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
}