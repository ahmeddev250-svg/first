import React from 'react';
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
