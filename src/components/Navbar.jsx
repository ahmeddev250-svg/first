import React, { useState, useEffect } from 'react';
import { Stethoscope, Phone, Calendar, Menu, X, MapPin } from 'lucide-react';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-navigation' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-teal-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 transition-transform group-hover:scale-105">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900 tracking-tight block">Dr. Khaoula Karim</span>
              <span className="text-xs font-medium text-teal-700 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> ORL Rabat Agdal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors">Accueil</a>
            <a href="#apropos" className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors">À Propos</a>
            <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors">Prestations</a>
            <a href="#cabinet" className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors">Cabinet & Accès</a>
            <a href="#avis" className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors">Avis Patients</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0771027788" className="flex items-center gap-2 text-sm font-bold text-slate-800 bg-white/80 hover:bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-sm transition-all">
              <Phone className="w-4 h-4 text-teal-600" />
              <span>07 71 02 77 88</span>
            </a>
            <button 
              onClick={onOpenAppointment}
              className="flex items-center gap-2 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 px-5 py-2.5 rounded-xl shadow-lg shadow-teal-600/25 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre Rendez-vous</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/80 border border-slate-200 text-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#accueil" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 py-2 border-b border-slate-100">Accueil</a>
          <a href="#apropos" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 py-2 border-b border-slate-100">À Propos</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 py-2 border-b border-slate-100">Prestations</a>
          <a href="#cabinet" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 py-2 border-b border-slate-100">Cabinet & Accès</a>
          <a href="#avis" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 py-2 border-b border-slate-100">Avis Patients</a>
          
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:0771027788" className="flex items-center justify-center gap-2 text-sm font-bold text-slate-800 bg-slate-100 py-3 rounded-xl">
              <Phone className="w-4 h-4 text-teal-600" />
              <span>07 71 02 77 88</span>
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}
              className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-teal-600 py-3 rounded-xl shadow-lg shadow-teal-600/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre Rendez-vous</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
