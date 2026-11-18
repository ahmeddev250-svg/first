import React from 'react';
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
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Dr. Khaoula Karim - Cabinet ORL Rabat Agdal. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Développé avec excellence pour la santé ORL à Rabat
          </p>
        </div>

      </div>
    </footer>
  );
}
