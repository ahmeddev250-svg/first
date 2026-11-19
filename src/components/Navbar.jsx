<<<<<<< HEAD
import React, { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import logoImg from '../assets/images/logo.png';

export default function Navbar({ onOpenBooking }) {
  const { lang, toggleLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#accueil', label: t.nav.home },
    { href: '#parcours', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#cabinet', label: t.nav.cabinet },
    { href: '#avis', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 glass-navigation">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-6 h-22 sm:h-24 py-2.5">
          {/* Logo & Brand */}
          <a href="#accueil" className="flex items-center gap-3.5 shrink-0 group">
            <img
              src={logoImg}
              alt={t.doctorName}
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain rounded-full bg-white p-0.5 shadow-sm border border-brand-plum/15 transition-transform duration-300 group-hover:scale-105 shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-brand-plum leading-tight whitespace-nowrap">
                {t.doctorName}
              </span>
              <span className="text-xs sm:text-sm font-medium text-brand-muted whitespace-nowrap">
                {lang === 'fr' ? 'ORL & Chirurgie Cervico-Faciale' : 'طب وجراحة الأنف والأذن والحنجرة'}
=======
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
>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
              </span>
            </div>
          </a>

<<<<<<< HEAD
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-brand-ink/85 hover:text-brand-plum transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-3.5 shrink-0">
            {/* Language Switcher */}
            <div
              className="inline-flex items-center rounded-full p-1 bg-brand-pink-soft border border-brand-plum/15 shrink-0"
              role="group"
              aria-label="Language Switcher"
            >
              <button
                type="button"
                onClick={() => toggleLanguage('fr')}
                className={`px-3 py-1 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  lang === 'fr'
                    ? 'bg-brand-plum text-white shadow-sm'
                    : 'text-brand-plum hover:bg-white/60'
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => toggleLanguage('ar')}
                className={`px-3 py-1 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  lang === 'ar'
                    ? 'bg-brand-plum text-white shadow-sm'
                    : 'text-brand-plum hover:bg-white/60'
                }`}
              >
                AR
              </button>
            </div>

            {/* Direct Phone */}
            <a
              href="tel:+212634193387"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-brand-plum bg-white/80 hover:bg-white border border-brand-plum/20 transition-all whitespace-nowrap shrink-0"
              dir="ltr"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>06 34 19 33 87</span>
            </a>

            {/* Appointment CTA */}
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-brand-plum hover:bg-brand-plum-dark shadow-md shadow-brand-plum/20 transition-all whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>{t.nav.bookBtn}</span>
            </button>
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => toggleLanguage()}
              className="md:hidden px-3 py-1.5 rounded-full text-sm font-bold bg-brand-pink-soft text-brand-plum border border-brand-plum/20"
            >
              {lang === 'fr' ? 'AR' : 'FR'}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-brand-plum hover:bg-brand-pink-soft transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown */}
      {mobileOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-brand-plum/10 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-lg font-semibold text-brand-ink hover:text-brand-plum"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-brand-plum/10 flex flex-col sm:flex-row gap-2.5">
            <a
              href="tel:+212634193387"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-base font-semibold text-brand-plum bg-brand-pink-soft"
              dir="ltr"
            >
              <Phone className="w-4 h-4" />
              <span>06 34 19 33 87</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-base font-semibold text-white bg-brand-plum"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookBtn}</span>
=======
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
>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
