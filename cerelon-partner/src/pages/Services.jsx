import React from 'react';
import { Code2, Palette, Globe } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-32 pb-24 animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-slate-950 dark:text-white">Capabilities</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-medium">Bespoke solutions across three specialized pillars designed to build credibility and generate leads.</p>
        </div>

        <div className="space-y-12">
          <div className="border border-slate-200 dark:border-slate-800 p-8 md:p-12 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors group bg-white dark:bg-slate-900">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                  <Code2 />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 text-slate-950 dark:text-white">Software Solutions</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Building the infrastructure that powers modern business operations.</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { t: "Software Solutions", d: "Custom business tools built for your specific workflow." },
                  { t: "Web Development", d: "High-speed, SEO-focused corporate portals." },
                  { t: "App Development", d: "Strategic mobile presence for iOS and Android." },
                  { t: "Business Automation", d: "Replacing manual friction with digital accuracy." }
                ].map((s, i) => (
                  <div key={i} className="pb-6 border-b border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold mb-2 text-slate-900 dark:text-white">{s.t}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 p-8 md:p-12 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors group bg-white dark:bg-slate-900">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                  <Palette />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 text-slate-950 dark:text-white">Digital & Creative</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Branding and marketing that drives authority and inquiries.</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { t: "Digital Marketing", d: "Integrated presence strategy across channels." },
                  { t: "Performance Marketing", d: "ROI-driven campaigns and lead acquisition." },
                  { t: "Social Media", d: "Management and content for brand authority." },
                  { t: "Graphic Design", d: "Professional branding and visual identities." }
                ].map((s, i) => (
                  <div key={i} className="pb-6 border-b border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold mb-2 text-slate-900 dark:text-white">{s.t}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 p-8 md:p-12 hover:border-emerald-500 transition-colors group bg-slate-950 dark:bg-black">
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
};

export default Services;