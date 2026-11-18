import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Najah Tawfi9",
      date: "Il y a un mois",
      rating: 5,
      text: "Je recommande vivement la Dre Khawla Karim pour son professionnalisme, sa gentillesse et la qualité de sa prise en charge. Elle prend le temps d’expliquer les choses clairement, répond aux questions avec patience et met vraiment le patient en confiance.",
      source: "Avis Google Maps"
    },
    {
      name: "Kaoutar MOUHAJIR",
      date: "Il y a un mois",
      rating: 5,
      text: "Dr khaoula karim, je tiens à vous remercier sincèrement pour votre compétence, votre écoute, votre gentillesse et votre façon de toujours expliquer les choses avec clarté. Vous êtes une médecin à la fois très professionnelle, compréhensive et remarquable.",
      source: "Avis Google Maps"
    },
    {
      name: "Patient Plongeur",
      date: "Il y a un an",
      rating: 5,
      text: "من افضل الاطباء توجيهات ممتازه بخصوص ممارسة هواية الغوص التي حرمت منها بسبب مشاكل في الاذن تقرير رائع بالانجليزيه لمتابعه العلاج في بلدي شكرا دكتوره و فقك الله لكل خير و شكر ا لممرضه الرائعه",
      source: "Avis Google Maps (Arabe)"
    }
  ];

  return (
    <section id="avis" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-3.5 py-1.5 rounded-full text-teal-700 text-xs font-bold uppercase tracking-wider">
            Avis Vérifiés
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ce que disent nos patients
          </h2>
          <p className="text-slate-600 text-base">
            Note globale de <strong className="text-slate-900">4.9 / 5</strong> basée sur 126 avis authentiques sur Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-6 right-6 text-teal-200">
                <Quote className="w-8 h-8 opacity-60" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-amber-500 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <span className="text-xs text-slate-500">{review.date}</span>
                </div>
                <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
