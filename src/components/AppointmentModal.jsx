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
        >
          <X className="w-5 h-5" />
        </button>

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

      </div>
    </div>
  );
}
