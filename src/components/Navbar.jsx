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
              </span>
            </div>
          </a>

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
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
