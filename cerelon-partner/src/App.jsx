import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import WhyChoose from './pages/WhyChoose';
import Contact from './pages/Contact';

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-200 font-sans selection:bg-emerald-100 selection:text-emerald-900 antialiased transition-colors duration-300">
      
      <Navbar 
        currentPage={currentPage} 
        navigate={navigate} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main>
        {currentPage === 'home' && <Home navigate={navigate} />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'about' && <About />}
        {currentPage === 'why' && <WhyChoose />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer navigate={navigate} />

      <a 
        href="https://wa.me/YOUR_NUMBER_HERE"
        className="fixed bottom-8 right-8 w-14 h-14 bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 rounded-full"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

    </div>
  );
};

export default App;