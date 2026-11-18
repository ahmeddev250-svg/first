import React from 'react';
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
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
