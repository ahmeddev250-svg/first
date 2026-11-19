import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/ORL+Rabat+Dr+Khaoula+Karim/data=!4m2!3m1!1s0x0:0xd7242bb8166d2dda?sa=X&ved=1t:2428&ictx=111';

const authenticReviews = [
  {
    id: 'rev-1',
    author: 'Najah Tawfi9',
    dateFr: 'Il y a un mois',
    dateAr: 'منذ شهر',
    rating: 5,
    lang: 'fr',
    text: '« Je recommande vivement la Dre Khawla Karim pour son professionnalisme, sa gentillesse et la qualité de sa prise en charge. Elle prend le temps d’expliquer les choses clairement, répond aux questions avec patience et met vraiment le patient en confiance. »',
  },
  {
    id: 'rev-2',
    author: 'Patient Google Maps',
    dateFr: 'Il y a un an',
    dateAr: 'منذ سنة',
    rating: 5,
    lang: 'ar',
    text: '« من افضل الاطباء توجيهات ممتازه بخصوص ممارسة هواية الغوص التي حرمت منها بسبب مشاكل في الاذن تقرير رائع بالانجليزيه لمتابعه العلاج في بلدي شكرا دكتوره و فقك الله لكل خير و شكر ا لممرضه الرائعه »',
  },
  {
    id: 'rev-3',
    author: 'Kaoutar MOUHAJIR',
    dateFr: 'Il y a un mois',
    dateAr: 'منذ شهر',
    rating: 5,
    lang: 'fr',
    text: '« Dr khaoula karim, je tiens à vous remercier sincèrement pour votre compétence, votre écoute, votre gentillesse et votre façon de toujours expliquer les choses avec clarté. Vous êtes une médecin à la fois très professionnelle, compréhensive et humaine. »',
  },
];

export default function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section id="avis" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2.5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-brand-pink-soft text-brand-plum text-xs font-bold">
              {t.testimonials.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-ink">
              {t.testimonials.title}
            </h2>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm sm:text-base font-bold text-brand-ink">
                {t.testimonials.ratingSummary}
              </span>
            </div>
          </div>

          <div className="glass-card p-4 space-y-2">
            <p className="text-xs font-bold text-brand-mauve">
              {t.testimonials.highlightsLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.testimonials.highlights.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-pink-soft text-brand-plum"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {authenticReviews.map((review) => (
            <article
              key={review.id}
              className="glass-card p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-brand-mauve/50" />
                </div>

                <p
                  dir={review.lang === 'ar' ? 'rtl' : 'ltr'}
                  lang={review.lang}
                  className={`text-sm text-brand-ink/90 leading-relaxed ${
                    review.lang === 'ar' ? 'font-arabic text-base' : ''
                  }`}
                >
                  {review.text}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-plum/10 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-brand-plum">{review.author}</p>
                  <p className="text-brand-muted">
                    {lang === 'fr' ? review.dateFr : review.dateAr}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/80 border border-brand-plum/15 text-[11px] font-medium text-brand-muted">
                  {t.testimonials.originalTag}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center pt-2">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-brand-plum glass-card hover:bg-white transition-all"
          >
            <span>{t.testimonials.viewAllMaps}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
