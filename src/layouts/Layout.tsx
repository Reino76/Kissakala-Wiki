import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import type { NavGroup } from '../types';
import '../styles/global.css';
import logo from '../images/Kissanaama.png';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = "Kissakala Wiki" }: LayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
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

  const navigation: NavGroup[] = [
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
      <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} logoSrc={logo.src} base={base} />

      <div className="flex-1 flex flex-col lg:flex-row relative">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setSidebarOpen} 
          navigation={navigation} 
          currentTitle={title} 
          base={base} 
        />

        <main 
          style={{ viewTransitionName: 'main-content' }}
          className="flex-1 p-4 lg:p-12 bg-zinc-50/30 overflow-x-hidden min-w-0"
        >
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
