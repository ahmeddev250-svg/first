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

      </div>
    </section>
  );
}
