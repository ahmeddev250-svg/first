import React from 'react';
<<<<<<< HEAD
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import consultationImg from '../assets/images/consultation-room.jpg';
import receptionImg from '../assets/images/reception.jpg';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="parcours" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="glass-card p-2">
              <img
                src={receptionImg}
                alt={t.cabinetTitle}
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl"
              />
            </div>
            <div className="glass-card p-2 mt-6">
              <img
                src={consultationImg}
                alt={t.about.equipmentTitle}
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-pink-soft text-brand-plum text-xs font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>{t.about.eyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-ink leading-snug">
              {t.about.title}
            </h2>

            <p className="text-base text-brand-muted leading-relaxed">
              {t.about.bio}
            </p>

            <div className="glass-card p-6 space-y-3.5">
              {t.about.credentials.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-plum shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium text-brand-ink">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-brand-plum/5 border border-brand-plum/15">
              <h3 className="font-bold text-brand-plum text-base">
                {t.about.equipmentTitle}
              </h3>
              <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                {t.about.equipmentDesc}
              </p>
            </div>
          </div>
=======
import { Award, Heart, CheckCircle2, Stethoscope, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Professional Portrait / Visual Glass Box */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-teal-400 rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
              <div className="glass-card p-8 rounded-3xl border border-slate-200/80 relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-700 mb-2">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Dr. Khaoula Karim</h3>
                <p className="text-sm font-semibold text-teal-700">Médecin Oto-rhino-laryngologiste & Chirurgien Cervico-Facial</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Diplômée et expérimentée, le Dr. Khaoula Karim accueille ses patients dans son cabinet moderne situé au cœur de Rabat Agdal, offrant un plateau technique de pointe et une prise en charge personnalisée.
                </p>
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span>Écoute attentive & bienveillance reconnue</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span>Examens approfondis et explications claires</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span>Bilans médicaux multilingues (Français / Anglais)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-teal-50 px-3.5 py-1.5 rounded-full text-teal-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> À Propos du Cabinet
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Une prise en charge globale et rigoureuse de la santé ORL
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Le cabinet du Dr. Khaoula Karim est dédié au diagnostic, au traitement et au suivi des pathologies de l’oreille, du nez, des sinus, du pharynx, du larynx et du cou, chez l’adulte comme chez l’enfant.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Que ce soit pour une baisse d’audition, des vertiges, des acouphènes, des infections chroniques, des troubles de la voix ou pour des certifications médicales spécifiques (telles que l’aptitude à la plongée sous-marine), le cabinet met un point d’honneur à offrir un accueil chaleureux et des explications claires et transparentes à chaque patient.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 space-y-2">
                <div className="text-teal-600 font-bold text-lg">Plateau Technique</div>
                <p className="text-xs text-slate-600">Équipements de pointe pour l’audiométrie, la fibroscopie nasale et l’exploration des vertiges.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 space-y-2">
                <div className="text-teal-600 font-bold text-lg">Suivi Personnalisé</div>
                <p className="text-xs text-slate-600">Protocoles de soins sur mesure et rapports détaillés adaptés à chaque situation clinique.</p>
              </div>
            </div>

          </div>

>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
        </div>
      </div>
    </section>
  );
}
