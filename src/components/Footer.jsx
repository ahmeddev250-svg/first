import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import logoImg from '../assets/images/logo.png';

const INSTAGRAM_URL = 'https://www.instagram.com/rabat.orl/?hl=en';
const FACEBOOK_URL = 'https://web.facebook.com/RabatORLKarim/?_rdc=1&_rdr#';
const LINKEDIN_URL = 'https://www.linkedin.com/in/khaoula-karim-566333118/';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="mt-16 bg-brand-plum text-white border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={logoImg}
                  alt={t.doctorName}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full bg-white p-1 shadow-md shrink-0"
                />
                <div>
                  <p className="font-bold text-white text-xl sm:text-2xl leading-tight">
                    {t.doctorName}
                  </p>
                  <p className="text-sm sm:text-base text-brand-pink font-medium mt-0.5">
                    {t.specialtySub}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                {t.specialtyMain}
              </p>
            </div>

            {/* Navigation Column */}
            <div className="space-y-3.5">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base font-medium text-white/85">
                <li>
                  <a href="#accueil" className="hover:text-brand-pink transition-colors">
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a href="#parcours" className="hover:text-brand-pink transition-colors">
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-brand-pink transition-colors">
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a href="#cabinet" className="hover:text-brand-pink transition-colors">
                    {t.nav.cabinet}
                  </a>
                </li>
                <li>
                  <a href="#avis" className="hover:text-brand-pink transition-colors">
                    {t.nav.reviews}
                  </a>
                </li>
              </ul>
            </div>

            {/* Coordonnées Column */}
            <div className="space-y-3.5">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {t.footer.contactTitle}
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-white/90">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-pink shrink-0 mt-1" />
                  <span className="leading-relaxed">{t.cabinet.addressValue}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-pink shrink-0" />
                  <a
                    href="tel:+212537681744"
                    dir="ltr"
                    className="hover:text-brand-pink transition-colors font-medium"
                  >
                    05 37 68 17 44
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#4ADE80] shrink-0" />
                  <a
                    href="https://wa.me/212634193387"
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="hover:text-brand-pink transition-colors font-semibold"
                  >
                    WhatsApp : 06 34 19 33 87
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-pink shrink-0" />
                  <a
                    href="mailto:dr.khaoulakarim@gmail.com"
                    dir="ltr"
                    className="hover:text-brand-pink transition-colors"
                  >
                    dr.khaoulakarim@gmail.com
                  </a>
                </p>

                {/* Instagram, Facebook & LinkedIn Icons */}
                <div className="pt-3 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white hover:bg-white hover:text-brand-plum transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white hover:bg-white hover:text-brand-plum transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white hover:bg-white hover:text-brand-plum transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/15 text-center text-sm text-white/75">
            © {currentYear} {t.cabinetTitle} — {t.footer.rights}
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/212634193387"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.footer.whatsappFloat}
        className="fixed bottom-5 end-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs sm:text-sm shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">{t.footer.whatsappFloat}</span>
      </a>
    </>
  );
}
