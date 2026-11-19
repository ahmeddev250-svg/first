import React from 'react';
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
        </div>
      </div>
    </section>
  );
}
