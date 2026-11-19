import React, { useState, useEffect } from 'react';
import { Calendar, PhoneCall, MapPin, Activity, Stethoscope, Star, DoorOpen, DoorClosed } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { getClinicOpenStatus } from '../utils/clinicStatus';
import doctorImg from '../assets/images/doctor.webp';
import logoImg from '../assets/images/logo.png';

export default function Hero({ onOpenBooking }) {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState(() => getClinicOpenStatus());

  useEffect(() => {
    const timer = setInterval(() => setStatus(getClinicOpenStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-brand-plum">
                <MapPin className="w-3.5 h-3.5 text-brand-mauve" />
                <span>{t.hero.badge}</span>
              </div>

              <a
                href="#avis"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-brand-ink hover:border-brand-plum/40 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{t.hero.ratingBadge}</span>
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                  status.isOpen
                    ? 'bg-emerald-50/90 text-emerald-800 border-emerald-200'
                    : 'bg-rose-50/90 text-rose-800 border-rose-200'
                }`}
              >
                {status.isOpen ? (
                  <DoorOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                ) : (
                  <DoorClosed className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                )}
                <span className="relative flex h-2 w-2">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      status.isOpen ? 'bg-emerald-400' : 'bg-rose-400'
                    }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${
                      status.isOpen ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                  />
                </span>
                <span>{status.isOpen ? t.cabinet.statusOpen : t.cabinet.statusClosed}</span>
                <span className="font-medium opacity-80">
                  • {lang === 'fr' ? status.nextFr : status.nextAr}
                </span>
              </a>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-ink leading-tight tracking-tight whitespace-pre-line">
              {t.hero.title}
            </h1>

            <div className="space-y-1.5 border-s-4 border-brand-plum ps-4">
              <p className="text-base sm:text-lg font-bold text-brand-plum">
                {t.specialtyMain}
              </p>
              <p className="text-sm sm:text-base font-semibold text-brand-mauve">
                {t.specialtySub}
              </p>
            </div>

            <p className="text-base text-brand-muted leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-brand-plum hover:bg-brand-plum-dark shadow-lg shadow-brand-plum/25 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.hero.ctaPrimary}</span>
              </button>

              <a
                href="tel:+212634193387"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-sm sm:text-base font-semibold text-brand-plum glass-card hover:bg-white transition-all"
              >
                <PhoneCall className="w-4 h-4 text-brand-mauve" />
                <span dir="ltr">{t.hero.ctaSecondary}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="glass-card p-3 sm:p-4 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-pink-soft">
                <img
                  src={doctorImg}
                  alt={t.doctorName}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent" />

                <div className="absolute bottom-3 inset-x-3 glass-card p-3 flex items-center gap-3 bg-white/85">
                  <img
                    src={logoImg}
                    alt={t.doctorName}
                    className="w-14 h-14 object-contain rounded-full bg-white p-0.5 border border-brand-plum/15 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-brand-plum truncate">
                      {t.doctorName}
                    </p>
                    <p className="text-xs text-brand-muted truncate">
                      Immeuble Pirou, Av. Ibn Sina, Agdal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          <div className="glass-card p-5 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-brand-pink-soft text-brand-plum shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-brand-ink text-base">{t.hero.card1Title}</h2>
              <p className="text-sm text-brand-muted mt-1">{t.hero.card1Desc}</p>
            </div>
          </div>

          <div className="glass-card p-5 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-brand-pink-soft text-brand-plum shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-brand-ink text-base">{t.hero.card2Title}</h2>
              <p className="text-sm text-brand-muted mt-1">{t.hero.card2Desc}</p>
            </div>
          </div>

          <div className="glass-card p-5 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-brand-pink-soft text-brand-plum shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-brand-ink text-base">{t.hero.card3Title}</h2>
              <p className="text-sm text-brand-muted mt-1">{t.hero.card3Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
