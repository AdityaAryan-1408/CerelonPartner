import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = ({ currentPage, navigate, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    navigate(page);
    setIsMenuOpen(false);
  };

  const navLinks = ['home', 'services', 'why', 'about'];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xl py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">

          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('home')}>
            <div className="w-8 h-8 flex items-center justify-center mr-3 transition-transform group-hover:rotate-45">
              <img src="/1.png" alt="Cerelon Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase leading-none text-slate-950 dark:text-white">
              Cerelon <span className="text-emerald-600 dark:text-emerald-500">Partner</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(p => (
              <button
                key={p}
                onClick={() => handleNavClick(p)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${currentPage === p
                  ? 'text-emerald-600 dark:text-emerald-400 underline underline-offset-8'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
              >
                {p === 'why' ? 'Why' : p}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-emerald-400"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <Button variant="primary" onClick={() => handleNavClick('contact')} className="px-5 py-2 !text-[10px]">
              Inquire
            </Button>
          </div>

          <div className="flex items-center md:hidden gap-4">
            <button onClick={toggleTheme} className="text-slate-950 dark:text-white">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-6 h-6 text-slate-950 dark:text-white" />
            </button>
          </div>
        </div>
      </nav>


      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950 p-10 flex flex-col animate-in slide-in-from-right duration-300">
          <button onClick={() => setIsMenuOpen(false)} className="self-end text-white">
            <X className="w-8 h-8" />
          </button>
          <div className="mt-20 flex flex-col space-y-10">
            {[...navLinks, 'contact'].map(p => (
              <button key={p} onClick={() => handleNavClick(p)} className="text-4xl font-black text-white uppercase tracking-tighter text-left hover:text-emerald-500">
                {p}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;