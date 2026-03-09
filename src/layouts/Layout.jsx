import React, { useState, useEffect } from 'react';
import '../styles/global.css';

export default function Layout({ children, title = "Kissakala Wiki" }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

// Effect to handle highlighting on page load or hash change
  useEffect(() => {
    const handleHashAndHighlight = () => {
      const hash = window.location.hash;
      if (hash) {
        // Pieni viive varmistaa, että Astro on ladannut DOMin ja selain on aloittanut CSS-vierityksen
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          const element = document.getElementById(targetId);
          
          if (element) {
            // Poistettu element.scrollIntoView(), koska CSS scroll-margin-top hoitaa nyt keskittämisen täydellisesti!
            
            // Add the highlight animation class
            element.classList.add('highlight-target');
            
            // Remove the class after the animation completes (1.5s)
            setTimeout(() => {
              element.classList.remove('highlight-target');
            }, 1500);
          }
        }, 100);
      }
    };

    // Run on initial load
    handleHashAndHighlight();

    // Run when the hash changes (clicking an internal link on the same page)
    window.addEventListener('hashchange', handleHashAndHighlight);
    
    return () => {
      window.removeEventListener('hashchange', handleHashAndHighlight);
    };
  }, []);

  const navigation = [
    { name: 'Koti', href: '/Kissakala-Wiki/' },
    { 
      name: 'Opinnot & Kurssit', 
      items: [
        { name: 'Opintojen Rakenne', href: '/Kissakala-Wiki/opinnot' },
      ]
    },
    { 
      name: 'Käytäntö', 
      items: [
        { name: 'Projektit', href: '/Kissakala-Wiki/projektit' },
        { name: 'Ohjelmistot ja Sovellukset', href: '/Kissakala-Wiki/ohjelmistot' },
      ]
    },
    { 
      name: 'Opiskelijaelämä', 
      items: [
        { name: 'Opiskelijaelämä & Tapahtumat', href: '/Kissakala-Wiki/opiskelijaelama' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 lg:hidden text-zinc-500 hover:text-zinc-900">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
            <a href="/Kissakala-Wiki/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center rounded shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xs">K</span>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic">kissakala</span>
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 py-8">
        <aside className={`fixed lg:relative inset-0 lg:inset-auto z-30 ${isSidebarOpen ? 'block' : 'hidden lg:block'} bg-white lg:bg-transparent w-full lg:w-64`}>
          <nav className="space-y-8 sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)]">
            {navigation.map((group) => (
              <div key={group.name} className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">{group.name}</h3>
                <ul className="space-y-1 border-l border-zinc-100 ml-1">
                  {group.items?.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        className={`block py-1.5 pl-4 text-sm hover:text-zinc-900 border-l-2 -ml-[1px] transition-all ${
                          title === item.name 
                            ? 'border-zinc-900 text-zinc-900 font-semibold' 
                            : 'border-transparent text-zinc-600 hover:border-zinc-300'
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 max-w-3xl min-w-0 flex flex-col min-h-[calc(100vh-12rem)]">
          <article className="prose prose-zinc max-w-none flex-grow">
            <nav className="flex text-xs text-zinc-400 mb-4 gap-2 uppercase tracking-wide font-bold">
              <a href="/Kissakala-Wiki/" className="hover:text-zinc-900">Koti</a>
              <span>/</span>
              <span className="text-zinc-900">{title}</span>
            </nav>
            <h1 className="text-5xl font-black tracking-tight text-zinc-900 mb-4">{title}</h1>
            <div className="space-y-6 text-zinc-700 leading-7">
               {children}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}