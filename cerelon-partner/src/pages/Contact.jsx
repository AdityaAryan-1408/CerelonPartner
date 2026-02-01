import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

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
                <form onSubmit={handleSubmit} className="space-y-6">
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

export default Contact;