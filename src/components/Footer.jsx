import React from 'react';
<<<<<<< HEAD
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
=======
import { Stethoscope, Phone, MapPin, Mail, Calendar } from 'lucide-react';

export default function Footer({ onOpenAppointment }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Dr. Khaoula Karim</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cabinet d’Oto-rhino-laryngologie et de Chirurgie Cervico-Faciale à Rabat Agdal. Expertise, écoute et technologies de pointe.
            </p>
            <div className="pt-2">
              <button 
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre Rendez-vous</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="hover:text-teal-400 transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-teal-400 transition-colors">À Propos</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Prestations & Soins</a></li>
              <li><a href="#cabinet" className="hover:text-teal-400 transition-colors">Cabinet & Accès</a></li>
              <li><a href="#avis" className="hover:text-teal-400 transition-colors">Avis Patients</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base">Spécialités</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Audiométrie & Audition</li>
              <li>Fibroscopie Nasale</li>
              <li>Vertiges & Équilibre</li>
              <li>Infections ORL & Pédiatrie</li>
              <li>Aptitude Plongée Sous-Marine</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base">Contact & Adresse</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <span>Bureau 5 (2ème étage), Immeuble Pirou, Av. Ibn Sina, Agdal, Rabat</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:0771027788" className="hover:text-teal-400 transition-colors font-semibold text-white">07 71 02 77 88</a>
>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
              </div>
            </div>
          </div>

<<<<<<< HEAD
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
=======
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Dr. Khaoula Karim - Cabinet ORL Rabat Agdal. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Développé avec excellence pour la santé ORL à Rabat
          </p>
        </div>

      </div>
    </footer>
>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
  );
}
