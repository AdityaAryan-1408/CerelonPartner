import React from 'react';
import { Zap } from 'lucide-react';

const WhyChoose = () => {
  return (
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
};

export default WhyChoose;