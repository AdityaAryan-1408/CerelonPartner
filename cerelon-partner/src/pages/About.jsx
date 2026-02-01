import React from 'react';
import { ShieldCheck, Globe } from 'lucide-react';

const About = () => {
  return (
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
};

export default About;