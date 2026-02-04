import React from 'react';

const Footer = ({ navigate }) => {
  return (
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
          <p className="text-[10px] text-slate-600 uppercase font-black tracking-[0.2em]">&copy; {new Date().getFullYear()} Cerelon Partner. No Fake Claims.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            <span>SSL Secure</span>
            <span>Fast Loading</span>
            <span>ISO Driven</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;