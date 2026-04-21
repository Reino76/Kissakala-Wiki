import React from 'react';
import type { NavGroup } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navigation: NavGroup[];
  currentTitle: string;
  base: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, navigation, currentTitle, base }) => {
  return (
    <aside 
      style={{ viewTransitionName: 'sidebar' }}
      className={`fixed lg:sticky top-16 left-0 z-30 w-64 lg:w-60 shrink-0 h-[calc(100vh-4rem)] dynamic-sidebar border-r flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} overflow-hidden lg:self-start`}
    >
      <nav className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto no-scrollbar">
        {navigation.map((group) => (
          <div key={group.name} className="flex flex-col items-center gap-1.5">
            {group.href ? (
              <a 
                href={group.href} 
                onClick={() => setIsOpen(false)}
                className="px-3 py-0.5 dynamic-accent text-white rounded-full text-[9px] font-black tracking-widest border shadow-sm uppercase hover:scale-105 transition-transform duration-200"
              >
                {group.name}
              </a>
            ) : (
              <div className="px-3 py-0.5 dynamic-accent text-white rounded-full text-[9px] font-black tracking-widest border shadow-sm uppercase">
                {group.name}
              </div>
            )}
            <div className="flex flex-col gap-1 w-full">
              {group.items?.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`block px-3 py-1 rounded-full text-center text-[11px] font-bold transition-all border shadow-sm ${currentTitle === item.name ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-50 hover:border-zinc-400'}`}
                >
                  {item.name}
                </a>
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
  );
};
