import React, { useState } from 'react';

export default function Layout({ children, title = "Kissakala Wiki" }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/Kissakala-Wiki/' },
    { 
      name: 'Getting Started', 
      items: [
        { name: 'Introduction', href: '/Kissakala-Wiki/intro' },
        { name: 'Campus Map', href: '/Kissakala-Wiki/map' },
        { name: 'Enrollment', href: '/Kissakala-Wiki/enrollment' },
      ]
    },
    { 
      name: 'Studies', 
      items: [
        { name: 'Course Selection', href: '/Kissakala-Wiki/courses' },
        { name: 'Exams & Grading', href: '/Kissakala-Wiki/grading' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 lg:hidden">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <a href="/Kissakala-Wiki/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center rounded">
                <span className="text-white font-bold text-xs">K</span>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic">kissakala</span>
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 py-8">
        <aside className={`fixed lg:relative inset-0 lg:inset-auto z-30 ${isSidebarOpen ? 'block' : 'hidden lg:block'} bg-white lg:bg-transparent w-full lg:w-64`}>
          <nav className="space-y-8 sticky top-24">
            {navigation.map((group) => (
              <div key={group.name} className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">{group.name}</h3>
                <ul className="space-y-1 border-l border-zinc-100 ml-1">
                  {group.items?.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="block py-1.5 pl-4 text-sm text-zinc-600 hover:text-zinc-900 border-l-2 border-transparent hover:border-zinc-900 -ml-[1px]">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 max-w-3xl">
          <article className="prose prose-zinc">
            <nav className="flex text-xs text-zinc-400 mb-4 gap-2 uppercase font-bold">
              <a href="/Kissakala-Wiki/" className="hover:text-zinc-900">Home</a>
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
