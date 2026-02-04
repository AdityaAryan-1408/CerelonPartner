import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    requirement: 'Technology & Automation', 
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
      } else {
        setError("Transmission failed. Please try again or use WhatsApp.");
      }
    } catch (err) {
      setError("Network error. Please check connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 outline-none focus:border-emerald-600 dark:focus:border-emerald-500 text-slate-900 dark:text-white transition-colors";

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <h1 className="text-5xl font-black tracking-tighter uppercase mb-10 leading-tight text-slate-950 dark:text-white">
              Secure Your<br />Consultation
            </h1>
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="w-12 h-12 border border-slate-200 dark:border-slate-700 flex items-center justify-center mr-6 group-hover:border-emerald-600 dark:group-hover:border-emerald-500 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email</p>
                  <p className="font-bold text-slate-900 dark:text-white">contact@cerelonpartner.com</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 border border-slate-200 dark:border-slate-700 flex items-center justify-center mr-6 group-hover:border-emerald-600 dark:group-hover:border-emerald-500 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Phone</p>
                  <p className="font-bold text-slate-900 dark:text-white">+91 7282001593</p>
                </div>
              </div>
              <div className="pt-8">
                <a href="https://wa.me/7282001593" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 font-black uppercase tracking-widest text-xs flex items-center justify-center w-full sm:w-auto transition-colors">
                  <MessageSquare className="w-4 h-4 mr-2" /> Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 border border-slate-100 dark:border-slate-800 transition-colors">
              {sent ? (
                <div className="text-center py-20 animate-in zoom-in duration-500">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 dark:text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-black tracking-tighter uppercase mb-2 text-slate-900 dark:text-white">Transmitted</h3>
                  <p className="text-slate-500 dark:text-slate-400">We will respond within 24 business hours.</p>
                  <button onClick={() => setSent(false)} className="mt-8 text-xs font-bold uppercase tracking-widest text-emerald-600 underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                      <input required name="name" value={formData.name} onChange={handleChange} type="text" className={inputClasses} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Company</label>
                      <input required name="company" value={formData.company} onChange={handleChange} type="text" className={inputClasses} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Business Email</label>
                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className={inputClasses} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Requirement</label>
                    <select name="requirement" value={formData.requirement} onChange={handleChange} className={`${inputClasses} font-bold text-sm uppercase`}>
                      <option>Technology & Automation</option>
                      <option>Digital & Creative</option>
                      <option>Export Support</option>
                      <option>General Partner Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Brief Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} className={`${inputClasses} h-32 resize-none`} placeholder="Growth objectives..."></textarea>
                  </div>
                  
                  {error && <p className="text-red-500 text-xs font-bold">{error}</p>}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-slate-950 dark:bg-emerald-600 text-white font-black py-4 uppercase tracking-[0.2em] text-sm hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Submit Inquiry'}
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