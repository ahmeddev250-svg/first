import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle, Instagram, Facebook, Linkedin, DoorOpen, DoorClosed } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { getClinicOpenStatus } from '../utils/clinicStatus';

import receptionImg from '../assets/images/reception.jpg';
import waiting1Img from '../assets/images/waiting-room-1.jpg';
import waiting2Img from '../assets/images/waiting-room-2.jpg';
import consultationImg from '../assets/images/consultation-room.jpg';
import equipAudiometry from '../assets/images/equip-audiometry.jpg';
import equipEndoscopy from '../assets/images/equip-endoscopy.jpg';
import equipVng from '../assets/images/equip-vng.jpg';
import equipVr from '../assets/images/equip-vr.jpg';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/ORL+Rabat+Dr+Khaoula+Karim/data=!4m2!3m1!1s0x0:0xd7242bb8166d2dda?sa=X&ved=1t:2428&ictx=111';

const INSTAGRAM_URL = 'https://www.instagram.com/rabat.orl/?hl=en';
const FACEBOOK_URL = 'https://web.facebook.com/RabatORLKarim/?_rdc=1&_rdr#';
const LINKEDIN_URL = 'https://www.linkedin.com/in/khaoula-karim-566333118/';

const galleryItems = [
  { src: receptionImg, category: 'spaces', labelFr: 'Accueil & Réception', labelAr: 'قاعة الاستقبال' },
  { src: waiting1Img, category: 'spaces', labelFr: "Salle d'attente", labelAr: 'قاعة الانتظار' },
  { src: consultationImg, category: 'spaces', labelFr: 'Salle de consultation ORL', labelAr: 'قاعة الفحص الطبي' },
  { src: waiting2Img, category: 'spaces', labelFr: 'Espace détente', labelAr: 'فضاء الانتظار' },
  { src: equipAudiometry, category: 'tech', labelFr: 'Audiomètre clinique', labelAr: 'جهاز قياس السمع' },
  { src: equipEndoscopy, category: 'tech', labelFr: 'Endoscope ORL', labelAr: 'منظار الأنف والحنجرة' },
  { src: equipVng, category: 'tech', labelFr: 'Vidéonystagmographie', labelAr: 'التخطيط المرئي لحركة العين' },
  { src: equipVr, category: 'tech', labelFr: 'Réalité virtuelle vestibulaire', labelAr: 'جهاز الواقع الافتراضي للدوخة' },
];

export default function Cabinet() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [status, setStatus] = useState(() => getClinicOpenStatus());

  useEffect(() => {
    const timer = setInterval(() => setStatus(getClinicOpenStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  const filteredPhotos =
    filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="cabinet" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-brand-pink-soft text-brand-plum text-xs font-bold">
              {t.cabinet.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-ink">
              {t.cabinet.title}
            </h2>
            <p className="text-base text-brand-muted">{t.cabinet.subtitle}</p>
          </div>

          <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-2xl glass-card">
            {[
              { key: 'all', label: t.cabinet.galleryTabs.all },
              { key: 'spaces', label: t.cabinet.galleryTabs.spaces },
              { key: 'tech', label: t.cabinet.galleryTabs.tech },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === tab.key
                    ? 'bg-brand-plum text-white shadow-sm'
                    : 'text-brand-ink hover:bg-brand-pink-soft'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="glass-card p-2 group overflow-hidden">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-pink-soft">
                <img
                  src={photo.src}
                  alt={lang === 'fr' ? photo.labelFr : photo.labelAr}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-brand-ink/75 to-transparent">
                  <p className="text-xs font-semibold text-white">
                    {lang === 'fr' ? photo.labelFr : photo.labelAr}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-pink-soft text-brand-plum shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-mauve">
                    {t.cabinet.addressLabel}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-brand-ink mt-1">
                    {t.cabinet.addressValue}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-pink-soft text-brand-plum shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-mauve">
                    {t.cabinet.phoneLabel}
                  </h3>
                  <a
                    href="tel:+212537681744"
                    className="text-sm sm:text-base font-bold text-brand-ink hover:text-brand-plum mt-0.5 inline-block"
                    dir="ltr"
                  >
                    05 37 68 17 44
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-mauve">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/212634193387"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-emerald-700 hover:underline mt-0.5 inline-block"
                    dir="ltr"
                  >
                    06 34 19 33 87
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-pink-soft text-brand-plum shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-mauve">
                    {t.cabinet.emailLabel}
                  </h3>
                  <a
                    href="mailto:dr.khaoulakarim@gmail.com"
                    className="text-sm font-semibold text-brand-ink hover:text-brand-plum mt-0.5 inline-block"
                    dir="ltr"
                  >
                    dr.khaoulakarim@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-pink-soft text-brand-plum shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-mauve">
                      {t.cabinet.hoursLabel}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                        status.isOpen
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border-rose-200'
                      }`}
                    >
                      {status.isOpen ? (
                        <DoorOpen className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <DoorClosed className="w-3.5 h-3.5 text-rose-600" />
                      )}
                      <span>{status.isOpen ? t.cabinet.statusOpen : t.cabinet.statusClosed}</span>
                      <span className="font-normal opacity-85">
                        ({lang === 'fr' ? status.nextFr : status.nextAr})
                      </span>
                    </span>
                  </div>
                  <p className="text-sm font-medium text-brand-ink">{t.cabinet.hoursWeek}</p>
                  <p className="text-sm font-medium text-brand-ink">{t.cabinet.hoursSat}</p>
                </div>
              </div>

              {/* Instagram, Facebook & LinkedIn Icons in Coordonnées */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @rabat.orl"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-pink-soft hover:bg-brand-plum text-brand-plum hover:text-white text-xs font-bold transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook RabatORLKarim"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-pink-soft hover:bg-brand-plum text-brand-plum hover:text-white text-xs font-bold transition-all"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Dr. Khaoula KARIM"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-pink-soft hover:bg-brand-plum text-brand-plum hover:text-white text-xs font-bold transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white bg-brand-plum hover:bg-brand-plum-dark transition-all"
            >
              <span>{t.cabinet.directionsBtn}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7 glass-card p-2.5 min-h-[340px]">
            <iframe
              title="ORL Rabat Dr Khaoula Karim - Google Maps"
              src="https://maps.google.com/maps?q=ORL+Rabat+Dr+Khaoula+Karim,+Avenue+Ibn+Sina,+Rabat&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[320px] rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
