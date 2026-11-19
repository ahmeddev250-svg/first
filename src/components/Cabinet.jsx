<<<<<<< HEAD
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
=======
import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function Cabinet() {
  return (
    <section id="cabinet" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-3.5 py-1.5 rounded-full text-teal-700 text-xs font-bold uppercase tracking-wider">
            Localisation & Accès
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Votre Cabinet ORL à Rabat Agdal
          </h2>
          <p className="text-slate-600 text-base">
            Situé au cœur du quartier Agdal, facilement accessible en voiture, taxi ou transport en commun (en face de l'EMI).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-slate-200/80 space-y-6">
              
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-teal-600" />
                <span>Coordonnées du Cabinet</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-slate-900 min-w-[100px]">Adresse:</span>
                  <span>Bureau 5 (2ème étage), Immeuble Pirou, Av. Ibn Sina, Rabat 14000 (En face de l'École Mohammedia des Ingénieurs - EMI).</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-900 min-w-[100px]">Téléphone:</span>
                  <a href="tel:0771027788" className="text-teal-600 font-semibold hover:underline flex items-center gap-1.5">
                    <Phone className="w-4 h-4" /> 07 71 02 77 88
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-bold text-slate-900 min-w-[100px]">Horaires:</span>
                  <div>
                    <p className="font-medium text-slate-800">Lundi au Vendredi : 09:00 - 18:00</p>
                    <p className="text-xs text-slate-500 mt-0.5">Samedi & Dimanche : Fermé (Urgences sur avis)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://www.google.com/maps/place/ORL+Rabat+Dr+Khaoula+Karim/@34.0011083,-6.8514442,17z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-teal-600/20 text-sm transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Obtenir l’Itinéraire</span>
                </a>
                <a 
                  href="tel:0771027788" 
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Appeler</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="glass-card p-3 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden h-[450px]">
              <iframe
                title="Google Maps Location Dr Khaoula Karim"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.518290270425!2d-6.8536328!3d34.0011083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d2d22d0f1b1%3A0xd7242bb8166d2dda!2sORL%20Rabat%20Dr%20Khaoula%20Karim!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
      </div>
    </section>
  );
}
