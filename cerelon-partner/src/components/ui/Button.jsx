import React from 'react';

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

export default Button;