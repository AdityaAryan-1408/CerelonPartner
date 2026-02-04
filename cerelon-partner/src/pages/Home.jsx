import React from 'react';
import { MoveUpRight, Code2, Palette, Globe, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = ({ navigate }) => {
  return (
    <div className="animate-in fade-in duration-700">

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-500 mb-6">
                <div className="h-px w-8 bg-emerald-600 dark:bg-emerald-500"></div>
                <span className="text-xs font-black tracking-[0.3em] uppercase">Business Consultancy Partner</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-950 dark:text-white leading-[0.9] tracking-tighter mb-8">
                SCALING <span className="text-emerald-600 dark:text-emerald-500">FRONTIERS</span><br />
                THROUGH PRECISION.
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-10 font-medium">
                Cerelon Partner helps businesses grow through technology solutions, digital branding, and strategic export communication support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => navigate('contact')}>Start Your Inquiry</Button>
                <Button variant="secondary" onClick={() => navigate('services')} className="dark:text-white dark:border-slate-700 dark:hover:bg-white dark:hover:text-slate-950">Our Pillars</Button>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative border-l border-t border-slate-100 dark:border-slate-800 p-12">
                <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <MoveUpRight className="w-5 h-5" />
                </div>
                <h3 className="text-4xl font-black text-slate-200 dark:text-slate-800 mb-4 tracking-tighter">01</h3>
                <p className="text-slate-400 dark:text-slate-500 text-sm italic font-medium">
                  "Building credibility isn't about claims; it's about the seamless integration of technology and process."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900 py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-slate-200 dark:border-slate-800">
            {[
              {
                title: "Software",
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
              <div key={idx} className={`p-10 bg-white dark:bg-slate-950 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white transition-all duration-500 group ${idx !== 2 ? 'lg:border-r border-slate-200 dark:border-slate-800' : ''}`}>
                <div className="w-12 h-12 text-emerald-600 dark:text-emerald-500 group-hover:text-white mb-8 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2 text-slate-900 dark:text-white group-hover:text-white">
                  {pillar.title}<br />{pillar.subtitle}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-emerald-50 mb-8 h-12">
                  {pillar.desc}
                </p>
                <ul className="space-y-2 mb-10 opacity-60 group-hover:opacity-100 dark:text-slate-400 group-hover:text-white">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="text-xs font-bold uppercase tracking-widest flex items-center">
                      <div className="w-1 h-1 bg-current mr-2"></div> {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('services')}
                  className="text-xs font-black uppercase tracking-[0.2em] flex items-center text-slate-900 dark:text-white group-hover:text-white"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="mb-12">
                <h2 className="text-xs font-black tracking-[0.3em] uppercase text-emerald-600 dark:text-emerald-500 mb-4">Strategic Focus</h2>
                <h3 className="text-4xl font-black text-slate-950 dark:text-white tracking-tighter">Who We Accelerate</h3>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Exporters", text: "New and existing players seeking robust international communication desks." },
                  { title: "Startups", text: "High-growth ventures needing digital infrastructure from day one." },
                  { title: "SMEs", text: "Growing businesses automating processes to scale without friction." }
                ].map((item, idx) => (
                  <div key={idx} className="flex group">
                    <div className="mr-6 text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">0{idx + 1}</div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-950 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 dark:bg-slate-900 border dark:border-slate-800 p-12 flex flex-col justify-center">
              <img src="/1.png" alt="Cerelon Standard" className="w-16 h-16 mb-8 object-contain" />
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
};

export default Home;