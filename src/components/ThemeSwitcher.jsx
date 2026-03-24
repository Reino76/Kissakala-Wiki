import React, { useEffect, useState } from 'react';

const themes = [
  { name: 'Kissa', id: 'pink', color: 'bg-pink-400' },
  { name: 'Veto', id: 'veto', color: 'bg-emerald-500' },
  { name: 'Tuni', id: 'tuni', color: 'bg-[#4e008e]' }
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('pink');

  useEffect(() => {
    const saved = localStorage.getItem('kissakala-theme') || 'pink';
    setTheme(saved);
  }, []);

  const setTheme = (id) => {
    setCurrentTheme(id);
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem('kissakala-theme', id);
  };

  return (
    <div className="flex flex-wrap gap-3 mt-8 p-6 bg-zinc-100 rounded-3xl border-2 border-zinc-200">
      <div className="w-full mb-2">
        <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Vaihda väriteemaa</h3>
      </div>
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
            currentTheme === t.id ? 'border-zinc-900 bg-white shadow-md scale-105' : 'border-transparent bg-white/50 hover:bg-white'
          }`}
        >
          <div className={`w-3 h-3 rounded-full ${t.color}`}></div>
          <span className="text-[10px] font-black uppercase tracking-tight">{t.name}</span>
        </button>
      ))}
    </div>
  );
}