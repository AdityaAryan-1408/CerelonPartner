import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Settings, 
  MessageSquare, 
  BarChart3, 
  Code2, 
  Cpu, 
  Palette, 
  Megaphone, 
  Users, 
  Mail, 
  Phone, 
  ArrowRight,
  Menu,
  X,
  Lock,
  ChevronRight,
  CheckCircle2,
  MoveUpRight,
  Layers,
  Zap
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // --- Reusable Components ---
  const Button = ({ children, variant = 'primary', onClick, className = "" }) => {
    const base = "px-6 py-3 font-bold tracking-tighter uppercase text-sm transition-all duration-300 flex items-center justify-center border";
    const variants = {
      primary: "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700",
      secondary: "bg-transparent border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white",
      outline: "bg-transparent border-slate-200 text-slate-500 hover:border-emerald-600 hover:text-emerald-600"
    };
    return (
      <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  };

  // --- Pages ---
  const Home = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-2 text-emerald-600 mb-6">
                <div className="h-px w-8 bg-emerald-600"></div>
                <span className="text-xs font-black tracking-[0.3em] uppercase">Business Consultancy Partner</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter mb-8">
                SCALING <span className="text-emerald-600">FRONTIERS</span><br /> 
                THROUGH PRECISION.
              </h1>
              <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-10 font-medium">
                Cerelon Partner helps businesses grow through technology solutions, digital branding, and strategic export communication support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => navigate('contact')}>Start Your Inquiry</Button>
                <Button variant="secondary" onClick={() => navigate('services')}>Our Pillars</Button>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative border-l border-t border-slate-100 p-12">
                <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MoveUpRight className="w-5 h-5" />
                </div>
                <h3 className="text-4xl font-black text-slate-200 mb-4 tracking-tighter">01</h3>
                <p className="text-slate-400 text-sm italic font-medium">
                  "Building credibility isn't about claims; it's about the seamless integration of technology and process."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars - Split Layout */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-slate-200">
            {[
              { 
                title: "Technology", 
                subtitle: "Solutions", 
                icon: <Code2 />, 
                desc: "Software, web, and app development to automate your business core.",
                items: ["Software Solutions", "Web Dev", "App Dev", "Automation"]
              },
              { 
                title: "Digital &", 
                subtitle: "Creative", 
                icon: <Palette />, 
                desc: "Performance marketing and branding that commands attention.",
                items: ["Digital Marketing", "Social Media", "Branding", "SEO"]
              },
              { 
                title: "Export", 
                subtitle: "Support", 
                icon: <Globe />, 
                desc: "Specialized communication and deal coordination for global growth.",
                items: ["Buyer Comms", "Lead Follow-up", "Deal Support", "Process Aid"]
              }
            ].map((pillar, idx) => (
              <div key={idx} className={`p-10 bg-white hover:bg-emerald-600 hover:text-white transition-all duration-500 group ${idx !== 2 ? 'lg:border-r border-slate-200' : ''}`}>
                <div className="w-12 h-12 text-emerald-600 group-hover:text-white mb-8 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                  {pillar.title}<br />{pillar.subtitle}
                </h3>
                <p className="text-sm text-slate-500 group-hover:text-emerald-50 mb-8 h-12">
                  {pillar.desc}
                </p>
                <ul className="space-y-2 mb-10 opacity-60 group-hover:opacity-100">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="text-xs font-bold uppercase tracking-widest flex items-center">
                      <div className="w-1 h-1 bg-current mr-2"></div> {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => navigate('services')}
                  className="text-xs font-black uppercase tracking-[0.2em] flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Who We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="mb-12">
                <h2 className="text-xs font-black tracking-[0.3em] uppercase text-emerald-600 mb-4">Strategic Focus</h2>
                <h3 className="text-4xl font-black text-slate-950 tracking-tighter">Who We Accelerate</h3>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Exporters", text: "New and existing players seeking robust international communication desks." },
                  { title: "Startups", text: "High-growth ventures needing digital infrastructure from day one." },
                  { title: "SMEs", text: "Growing businesses automating processes to scale without friction." }
                ].map((item, idx) => (
                  <div key={idx} className="flex group">
                    <div className="mr-6 text-2xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors">0{idx+1}</div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-950 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 p-12 flex flex-col justify-center">
              <ShieldCheck className="text-emerald-500 w-16 h-16 mb-8" />
              <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">The Cerelon Standard</h3>
              <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                We operate on a model of absolute confidentiality and process reliability. No exaggerated claims. No fake testimonials. Just outcome-focused growth.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-8">
                <div>
                  <h4 className="text-emerald-500 font-bold mb-1 tracking-tighter uppercase text-xs">Capability</h4>
                  <p className="text-white text-sm font-bold">PAN India & Intl.</p>
                </div>
                <div>
                  <h4 className="text-emerald-500 font-bold mb-1 tracking-tighter uppercase text-xs">Security</h4>
                  <p className="text-white text-sm font-bold">Confidential Handling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const Services = () => (
    <div className="pt-32 pb-24 animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Capabilities</h1>
          <p className="text-slate-500 max-w-2xl text-lg font-medium">Bespoke solutions across three specialized pillars designed to build credibility and generate leads.</p>
        </div>

        <div className="space-y-12">
          {/* Pillar 1 */}
          <div className="border border-slate-200 p-8 md:p-12 hover:border-emerald-500 transition-colors group">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="w-12 h-12 bg-slate-100 text-slate-900 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                  <Code2 />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Technology Solutions</h2>
                <p className="text-sm text-slate-500 mb-6">Building the infrastructure that powers modern business operations.</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { t: "Software Solutions", d: "Custom business tools built for your specific workflow." },
                  { t: "Web Development", d: "High-speed, SEO-focused corporate portals." },
                  { t: "App Development", d: "Strategic mobile presence for iOS and Android." },
                  { t: "Business Automation", d: "Replacing manual friction with digital accuracy." }
                ].map((s, i) => (
                  <div key={i} className="pb-6 border-b border-slate-100">
                    <h4 className="font-bold mb-2 text-slate-900">{s.t}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="border border-slate-200 p-8 md:p-12 hover:border-emerald-500 transition-colors group">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="w-12 h-12 bg-slate-100 text-slate-900 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                  <Palette />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Digital & Creative</h2>
                <p className="text-sm text-slate-500 mb-6">Branding and marketing that drives authority and inquiries.</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { t: "Digital Marketing", d: "Integrated presence strategy across channels." },
                  { t: "Performance Marketing", d: "ROI-driven campaigns and lead acquisition." },
                  { t: "Social Media", d: "Management and content for brand authority." },
                  { t: "Graphic Design", d: "Professional branding and visual identities." }
                ].map((s, i) => (
                  <div key={i} className="pb-6 border-b border-slate-100">
                    <h4 className="font-bold mb-2 text-slate-900">{s.t}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="border border-slate-200 p-8 md:p-12 hover:border-emerald-500 transition-colors group bg-slate-950">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center mb-6">
                  <Globe />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">Export Support</h2>
                <p className="text-sm text-slate-400 mb-6">The communication bridge between you and the world.</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { t: "Buyer Communication", d: "Professional desk representing your brand globally." },
                  { t: "Lead Coordination", d: "Rapid response and nurturing for export leads." },
                  { t: "Deal Support", d: "Strategic assistance during transaction closure." },
                  { t: "Process Assistance", d: "Non-legal support for export documentation." }
                ].map((s, i) => (
                  <div key={i} className="pb-6 border-b border-slate-800">
                    <h4 className="font-bold mb-2 text-white">{s.t}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const About = () => (
    <div className="pt-32 pb-24 animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-black tracking-tighter uppercase mb-8">About Cerelon</h1>
            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
              <p>Cerelon Partner is built on the principle that specialized growth support shouldn't be siloed. We bridge the critical gap between technology, marketing, and global trade desk operations.</p>
              <p>Our focus is on the process. By establishing reliable, transparent, and confidential workflows, we allow our clients to focus on production while we manage the digital and communication frontiers.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-8 bg-slate-50 flex flex-col justify-end">
              <div className="text-emerald-600 font-black text-4xl mb-4 tracking-tighter">100%</div>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-400">Process Driven</p>
            </div>
            <div className="p-8 bg-slate-900 text-white flex flex-col justify-end">
              <div className="text-emerald-500 font-black text-4xl mb-4 tracking-tighter">∞</div>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Scalable Support</p>
            </div>
            <div className="p-8 bg-slate-900 text-white flex flex-col justify-end">
               <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
               <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Data Secrecy</p>
            </div>
            <div className="p-8 bg-slate-50 flex flex-col justify-end">
               <Globe className="w-8 h-8 text-emerald-600 mb-4" />
               <p className="text-xs uppercase font-bold tracking-widest text-slate-400">PAN India Capable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const WhyChoose = () => (
    <div className="pt-32 pb-24 bg-white animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">Why Cerelon?</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">The Competitive Advantage</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100">
          {[
            { t: "Process-Driven", d: "We replace guessing with established frameworks that ensure predictable growth patterns." },
            { t: "Confidentiality", d: "Strict data handling protocols. Your competitive advantages are safe with us." },
            { t: "Multi-Domain", d: "Single-point coordination for tech, creative, and export support." },
            { t: "Dedicated Comms", d: "Professional representation that builds buyer trust instantly." },
            { t: "Scalable Model", d: "Our support model expands in sync with your business growth phase." },
            { t: "Quality Oriented", d: "Driven by management principles aiming for ISO 9001 certification." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 border border-slate-50 hover:bg-slate-50 transition-colors">
              <Zap className="text-emerald-600 w-5 h-5 mb-6" />
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">{item.t}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Contact = () => {
    const [sent, setSent] = useState(false);
    return (
      <div className="pt-32 pb-24 bg-white animate-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h1 className="text-5xl font-black tracking-tighter uppercase mb-10 leading-tight">Secure Your<br />Consultation</h1>
              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="w-12 h-12 border border-slate-200 flex items-center justify-center mr-6 group-hover:border-emerald-600 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email</p>
                    <p className="font-bold">contact@cerelonpartner.com</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 border border-slate-200 flex items-center justify-center mr-6 group-hover:border-emerald-600 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Phone</p>
                    <p className="font-bold">+91 [Number]</p>
                  </div>
                </div>
                <div className="pt-8">
                  <a href="https://wa.me/#" className="bg-emerald-600 text-white px-8 py-4 font-black uppercase tracking-widest text-xs flex items-center justify-center w-full sm:w-auto">
                    <MessageSquare className="w-4 h-4 mr-2" /> Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-8 md:p-12 border border-slate-100">
                {sent ? (
                  <div className="text-center py-20">
                    <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">Transmitted</h3>
                    <p className="text-slate-500">We will respond within 24 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 p-3 outline-none focus:border-emerald-600" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Company</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 p-3 outline-none focus:border-emerald-600" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Business Email</label>
                      <input required type="email" className="w-full bg-white border border-slate-200 p-3 outline-none focus:border-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Requirement</label>
                      <select className="w-full bg-white border border-slate-200 p-3 outline-none focus:border-emerald-600 font-bold text-sm uppercase">
                        <option>Technology & Automation</option>
                        <option>Digital & Creative</option>
                        <option>Export Support</option>
                        <option>General Partner Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Brief Message</label>
                      <textarea className="w-full bg-white border border-slate-200 p-3 outline-none focus:border-emerald-600 h-32 resize-none" placeholder="Growth objectives..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-950 text-white font-black py-4 uppercase tracking-[0.2em] text-sm hover:bg-emerald-600 transition-colors">
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans selection:bg-emerald-100 selection:text-emerald-900 antialiased">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => navigate('home')}>
            <div className="w-8 h-8 bg-slate-950 flex items-center justify-center mr-3 transition-transform group-hover:rotate-45">
              <ShieldCheck className="text-emerald-500 w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase leading-none">
              Cerelon <span className="text-emerald-600">Partner</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['home', 'services', 'why', 'about'].map(p => (
              <button 
                key={p} 
                onClick={() => navigate(p)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${currentPage === p ? 'text-emerald-600 underline underline-offset-8' : 'text-slate-500 hover:text-slate-950'}`}
              >
                {p === 'why' ? 'Why' : p}
              </button>
            ))}
            <Button variant="primary" onClick={() => navigate('contact')} className="px-5 py-2 !text-[10px]">Inquire</Button>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
            <Menu className="w-6 h-6 text-slate-950" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950 p-10 flex flex-col animate-in slide-in-from-right duration-300">
          <button onClick={() => setIsMenuOpen(false)} className="self-end text-white"><X className="w-8 h-8" /></button>
          <div className="mt-20 flex flex-col space-y-10">
            {['home', 'services', 'about', 'why', 'contact'].map(p => (
              <button key={p} onClick={() => navigate(p)} className="text-4xl font-black text-white uppercase tracking-tighter text-left hover:text-emerald-500">{p}</button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'about' && <About />}
        {currentPage === 'why' && <WhyChoose />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-black tracking-tighter mb-6 uppercase">Cerelon <span className="text-emerald-500">Partner</span></h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-xs font-bold uppercase tracking-widest">
                Business credibility and lead-generation platform. PAN India & International operations.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8">Capabilities</h4>
              <ul className="space-y-4 text-xs font-bold tracking-widest text-slate-400">
                <li className="hover:text-white cursor-pointer" onClick={() => navigate('services')}>Tech Solutions</li>
                <li className="hover:text-white cursor-pointer" onClick={() => navigate('services')}>Creative Services</li>
                <li className="hover:text-white cursor-pointer" onClick={() => navigate('services')}>Export Comms</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8">Inquiry</h4>
              <ul className="space-y-4 text-xs font-bold tracking-widest text-slate-400">
                <li className="hover:text-white cursor-pointer" onClick={() => navigate('contact')}>WhatsApp Support</li>
                <li className="hover:text-white cursor-pointer" onClick={() => navigate('contact')}>Consultation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8">Office</h4>
              <p className="text-xs font-bold tracking-widest text-slate-400 mb-4">India Headquarters</p>
              <p className="text-xs text-slate-600">Secure Data Operations Center</p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[10px] text-slate-600 uppercase font-black tracking-[0.2em]">© {new Date().getFullYear()} Cerelon Partner. No Fake Claims. No Exaggerations.</p>
            <div className="flex space-x-8 mt-6 md:mt-0 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
              <span>SSL Secure</span>
              <span>Fast Loading</span>
              <span>ISO Driven</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a 
        href="https://wa.me/#"
        className="fixed bottom-8 right-8 w-14 h-14 bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};

export default App;