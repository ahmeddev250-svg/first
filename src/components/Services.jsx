import React from 'react';
<<<<<<< HEAD
import { Calendar, ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { useLanguage } from './LanguageContext';

import equipVng from '../assets/images/equip-vng.jpg';
import consultationImg from '../assets/images/consultation-room.jpg';
import equipAudiometry from '../assets/images/equip-audiometry.jpg';
import equipVr from '../assets/images/equip-vr.jpg';
import equipEndoscopy from '../assets/images/equip-endoscopy.jpg';
import waitingRoomImg from '../assets/images/waiting-room-1.jpg';

const serviceImages = {
  vertige: equipVng,
  chirurgie: consultationImg,
  audiometrie: equipAudiometry,
  allergie: equipVr,
  endoscopie: equipEndoscopy,
  sommeil: waitingRoomImg,
};

export default function Services({ onOpenBooking }) {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-pink-soft text-brand-plum text-xs font-bold">
            {t.services.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-ink">
            {t.services.title}
          </h2>
          <p className="text-base text-brand-muted">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="glass-card overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-brand-pink-soft">
                  <img
                    src={serviceImages[service.id]}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/35 to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-brand-ink leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-pink-soft text-brand-plum"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold text-brand-plum bg-white/80 hover:bg-brand-plum hover:text-white border border-brand-plum/20 transition-all"
                >
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {t.services.bookAction}
                  </span>
                  <ArrowIcon className="w-4 h-4" />
=======
import { Ear, Activity, Wind, Stethoscope, Compass, FileCheck } from 'lucide-react';

export default function Services({ onOpenAppointment }) {
  const servicesList = [
    {
      icon: <Ear className="w-7 h-7 text-teal-600" />,
      title: "Audiométrie & Troubles de l'Audition",
      description: "Bilan complet de l'audition (audiométrie tonale et vocale, tympanométrie) pour adultes et enfants, diagnostic et appareillage."
    },
    {
      icon: <Wind className="w-7 h-7 text-teal-600" />,
      title: "Fibroscopie Nasale & Sinusienne",
      description: "Examen endoscopique indolore des fosses nasales, du rhinopharynx et du larynx pour diagnostiquer les sinusites et obstructions."
    },
    {
      icon: <Compass className="w-7 h-7 text-teal-600" />,
      title: "Vertiges & Troubles de l'Équilibre",
      description: "Exploration des vertiges positionnels (VPPB), de la maladie de Menière et des troubles vestibulaires avec manœuvres libératoires."
    },
    {
      icon: <Stethoscope className="w-7 h-7 text-teal-600" />,
      title: "Infections ORL & Pédiatrie",
      description: "Prise en charge des otites à répétition, angines, rhino-pharyngites, végétations et pose de diabolos chez l'enfant."
    },
    {
      icon: <Activity className="w-7 h-7 text-teal-600" />,
      title: "Ronflement & Apnée du Sommeil",
      description: "Évaluation des troubles respiratoires nocturnes, ronflements chroniques et orientation vers les examens polysomnographiques."
    },
    {
      icon: <FileCheck className="w-7 h-7 text-teal-600" />,
      title: "Certificats & Aptitude Plongée",
      description: "Examens otologiques approfondis et délivrance de certificats d'aptitude médicale (notamment pour la plongée sous-marine)."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-3.5 py-1.5 rounded-full text-teal-700 text-xs font-bold uppercase tracking-wider">
            Domaines d’Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Prestations & Soins Spécialisés ORL
          </h2>
          <p className="text-slate-600 text-base">
            Des soins de qualité fondés sur les recommandations scientifiques actuelles et pratiqués avec des équipements modernes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-3xl border border-slate-200/80 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-100/80 flex items-center justify-center transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-700">Cabinet Rabat Agdal</span>
                <button 
                  onClick={onOpenAppointment}
                  className="text-xs font-bold text-slate-800 hover:text-teal-600 flex items-center gap-1 transition-colors"
                >
                  Prendre RDV &rarr;
>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
                </button>
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
=======

>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
      </div>
    </section>
  );
}
