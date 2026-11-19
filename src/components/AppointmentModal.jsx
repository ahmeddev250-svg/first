<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from 'react';
import { X, Calendar, Clock, Send, Info, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const WHATSAPP_NUMBER = '212634193387';

function getTodayISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function generate30MinSlots(dateStr) {
  if (!dateStr) return [];
  const [year, month, day] = dateStr.split('-').map(Number);
  const selectedDate = new Date(year, month - 1, day);
  const dayOfWeek = selectedDate.getDay();

  if (dayOfWeek === 0) return [];

  const ranges =
    dayOfWeek === 6
      ? [{ startHour: 9, endHour: 13 }]
      : [{ startHour: 9, endHour: 18 }];

  const now = new Date();
  const isToday =
    now.getFullYear() === year &&
    now.getMonth() === month - 1 &&
    now.getDate() === day;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const slots = [];
  ranges.forEach(({ startHour, endHour }) => {
    for (let totalMin = startHour * 60; totalMin < endHour * 60; totalMin += 30) {
      const startH = String(Math.floor(totalMin / 60)).padStart(2, '0');
      const startM = String(totalMin % 60).padStart(2, '0');
      const endTotal = totalMin + 30;
      const endH = String(Math.floor(endTotal / 60)).padStart(2, '0');
      const endM = String(endTotal % 60).padStart(2, '0');

      const disabled = isToday && totalMin <= currentMinutes;
      slots.push({
        label: `${startH}:${startM} – ${endH}:${endM}`,
        disabled,
      });
    }
  });

  return slots;
}

export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  const { t, lang } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState(getTodayISO());
  const [timeSlot, setTimeSlot] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const slots = useMemo(() => generate30MinSlots(date), [date]);

  useEffect(() => {
    setTimeSlot('');
  }, [date]);

  if (!isOpen) return null;

  const validate = () => {
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = t.booking.errors.name;
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      nextErrors.phone = t.booking.errors.phone;
    }
    if (!service) nextErrors.service = t.booking.errors.service;
    if (!date || date < getTodayISO()) nextErrors.date = t.booking.errors.date;
    if (!timeSlot) nextErrors.time = t.booking.errors.time;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const cleanNotes = notes.trim() || (lang === 'fr' ? 'Aucune' : 'لا توجد');

    const message =
      lang === 'fr'
        ? `Bonjour,

Je souhaite prendre un rendez-vous au Cabinet Dr. Khaoula KARIM.

Nom : ${name.trim()}
Téléphone : ${phone.trim()}
Prestation : ${service}
Date : ${date}
Heure : ${timeSlot}
Durée : 30 minutes
Notes : ${cleanNotes}

Merci de me confirmer la disponibilité.`
        : `مرحباً،

أرغب في حجز موعد في عيادة الدكتورة خولة كريم.

الاسم : ${name.trim()}
رقم الهاتف : ${phone.trim()}
الخدمة المطلوبة : ${service}
التاريخ : ${date}
الوقت : ${timeSlot}
مدة الموعد : 30 دقيقة
ملاحظات : ${cleanNotes}

شكراً، يرجى تأكيد الموعد.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-ink/45 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="glass-card bg-white/95 w-full max-w-2xl p-6 sm:p-8 relative my-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-full text-brand-muted hover:text-brand-plum hover:bg-brand-pink-soft transition-colors"
          aria-label="Close"
=======
import React, { useState } from 'react';
import { X, Calendar, Phone, User, FileText, CheckCircle2, Send } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Consultation ORL Générale',
    date: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNum = '212771027788'; // Doctor's WhatsApp number
    const message = encodeURIComponent(
      `*Demande de Rendez-vous - Cabinet Dr. Khaoula Karim*\n\n` +
      `*Nom:* ${formData.name}\n` +
      `*Téléphone:* ${formData.phone}\n` +
      `*Prestation:* ${formData.service}\n` +
      `*Date Souhaitée:* ${formData.date}\n` +
      `*Notes:* ${formData.notes || 'Aucune'}`
    );

    window.open(`https://wa.me/${phoneNum}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="glass-card bg-white/95 w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl border border-white relative overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
        >
          <X className="w-5 h-5" />
        </button>

<<<<<<< HEAD
        <div className="space-y-1 mb-6 pe-8">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-plum">
            {t.booking.title}
          </h2>
          <p className="text-xs sm:text-sm font-medium text-brand-muted">
            {t.booking.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-brand-ink mb-1.5">
                {t.booking.nameLabel}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.booking.namePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-brand-plum/20 text-sm focus:outline-none focus:border-brand-plum"
              />
              {errors.name && (
                <p className="text-xs text-red-600 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-ink mb-1.5">
                {t.booking.phoneLabel}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.booking.phonePlaceholder}
                dir="ltr"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-brand-plum/20 text-sm focus:outline-none focus:border-brand-plum"
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-ink mb-1.5">
              {t.booking.serviceLabel}
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-brand-plum/20 text-sm focus:outline-none focus:border-brand-plum"
            >
              <option value="">{t.booking.servicePlaceholder}</option>
              {t.services.items.map((item) => (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-xs text-red-600 mt-1">{errors.service}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-brand-ink mb-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-plum" />
              <span>{t.booking.dateLabel}</span>
            </label>
            <input
              type="date"
              min={getTodayISO()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-brand-plum/20 text-sm focus:outline-none focus:border-brand-plum"
            />
            {errors.date && (
              <p className="text-xs text-red-600 mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-brand-ink mb-2">
              <Clock className="w-3.5 h-3.5 text-brand-plum" />
              <span>{t.booking.timeLabel}</span>
            </label>

            {slots.length === 0 ? (
              <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl p-3">
                {t.booking.noSlots}
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-h-44 overflow-y-auto p-1">
                {slots.map((slot) => {
                  const isSelected = timeSlot === slot.label;
                  return (
                    <button
                      key={slot.label}
                      type="button"
                      disabled={slot.disabled}
                      onClick={() => setTimeSlot(slot.label)}
                      dir="ltr"
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                        slot.disabled
                          ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through'
                          : isSelected
                          ? 'bg-brand-plum text-white border-brand-plum shadow-sm'
                          : 'bg-white text-brand-ink border-brand-plum/20 hover:border-brand-plum hover:bg-brand-pink-soft'
                      }`}
                    >
                      {slot.label}
                    </button>
                  );
                })}
              </div>
            )}
            {errors.time && (
              <p className="text-xs text-red-600 mt-1">{errors.time}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-ink mb-1.5">
              {t.booking.notesLabel}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.booking.notesPlaceholder}
              className="w-full px-3.5 py-2 rounded-xl bg-white border border-brand-plum/20 text-sm focus:outline-none focus:border-brand-plum"
            />
          </div>

          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-brand-pink-soft/80 border border-brand-plum/15 text-xs text-brand-ink">
            <Info className="w-4 h-4 text-brand-plum shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-brand-plum">{t.booking.pendingNoticeTitle}</p>
              <p className="text-brand-muted mt-0.5">{t.booking.pendingNoticeText}</p>
            </div>
          </div>

          {submitted && (
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="font-medium">{t.booking.sentSuccess}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-brand-plum hover:bg-brand-plum-dark shadow-lg shadow-brand-plum/20 inline-flex items-center justify-center gap-2 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{t.booking.submitBtn}</span>
          </button>
        </form>
=======
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
              Réservation en Ligne
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Prendre Rendez-vous</h3>
            <p className="text-sm text-slate-600">
              Remplissez ce formulaire pour envoyer votre demande directement par WhatsApp au cabinet du Dr. Khaoula Karim.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Nom & Prénom</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  required
                  placeholder="Ex. Amin Alami"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 font-medium text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Numéro de Téléphone</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input 
                  type="tel" 
                  required
                  placeholder="Ex. +212 6XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 font-medium text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Motif / Prestation</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 font-medium text-slate-800"
              >
                <option value="Consultation ORL Générale">Consultation ORL Générale</option>
                <option value="Audiométrie & Audition">Audiométrie & Audition</option>
                <option value="Fibroscopie Nasale">Fibroscopie Nasale</option>
                <option value="Vertiges & Équilibre">Vertiges & Équilibre</option>
                <option value="Certificat Plongée Sous-Marine">Certificat Plongée Sous-Marine</option>
                <option value="Autre Motif">Autre Motif</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Date Souhaitée</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input 
                  type="date" 
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 font-medium text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Notes / Précisions (Optionnel)</label>
              <textarea 
                rows="2"
                placeholder="Précisez vos symptômes ou vos préférences..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 font-medium text-slate-800 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-teal-600/25 transition-all text-sm mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer la Demande sur WhatsApp</span>
            </button>

          </form>

        </div>

>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
      </div>
    </div>
  );
}
