<<<<<<< HEAD
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
=======
import React from 'react';
import { Star, MapPin, Calendar, Phone, Award, ShieldCheck, Clock } from 'lucide-react';

export default function Hero({ onOpenAppointment }) {
  return (
    <section id="accueil" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-teal-50/50 via-slate-50 to-white">
      {/* Decorative Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-teal-300/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-teal-100 shadow-sm">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-xs font-bold text-slate-800">4.9 / 5</span>
              <span className="text-xs text-slate-500 border-l border-slate-300 pl-2">(126 avis Google)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Bienvenue au cabinet <br />
              <span className="text-teal-600 bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
                Dr. Khaoula Karim
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Médecin spécialiste en Oto-rhino-laryngologie (ORL) et chirurgie cervico-faciale à Rabat Agdal. Prise en charge experte des troubles de l’audition, de l’équilibre, de la respiration et de la voix.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={onOpenAppointment}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-teal-600/25 transition-all text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Prendre Rendez-vous en Ligne</span>
              </button>
              
              <a 
                href="tel:0771027788" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-800 font-bold px-7 py-4 rounded-2xl border border-slate-200 shadow-sm transition-all text-base"
              >
                <Phone className="w-5 h-5 text-teal-600" />
                <span>07 71 02 77 88</span>
              </a>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60">
                <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Écoute & Pédagogie</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60">
                <Award className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Expertise Reconnue</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60 col-span-2 sm:col-span-1">
                <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Rendez-vous Rapides</span>
              </div>
            </div>

          </div>

          {/* Right Column: Glass Card & Address Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Glass Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Cabinet ORL Rabat Agdal</h3>
                      <p className="text-xs text-slate-500">Immeuble Pirou, Av. Ibn Sina</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
                    Ouvert
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="font-bold text-slate-900 min-w-[90px]">Adresse:</span>
                    <span>Bureau 5 (2ème étage), en face de l’École Mohammedia des Ingénieurs (EMI), Av. Ibn Sina, Rabat 14000</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="font-bold text-slate-900 min-w-[90px]">Téléphone:</span>
                    <a href="tel:0771027788" className="text-teal-600 font-semibold hover:underline">07 71 02 77 88</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="font-bold text-slate-900 min-w-[90px]">Horaires:</span>
                    <span>Lun - Ven : 09:00 - 18:00</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href="https://www.google.com/maps/place/ORL+Rabat+Dr+Khaoula+Karim/@34.0011083,-6.8514442,17z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-all text-sm shadow-md"
                  >
                    Voir sur Google Maps & Itinéraire
                  </a>
                </div>
              </div>

              {/* Floating Badge Background Effect */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl -z-10" />

            </div>
          </div>

>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
        </div>
      </div>
    </section>
  );
}
