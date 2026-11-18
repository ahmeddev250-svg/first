import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cabinet from './components/Cabinet';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      <Navbar onOpenAppointment={() => setIsAppointmentOpen(true)} />
      <main>
        <Hero onOpenAppointment={() => setIsAppointmentOpen(true)} />
        <About />
        <Services onOpenAppointment={() => setIsAppointmentOpen(true)} />
        <Cabinet />
        <Testimonials />
      </main>
      <Footer onOpenAppointment={() => setIsAppointmentOpen(true)} />
      
      <AppointmentModal 
        isOpen={isAppointmentOpen} 
        onClose={() => setIsAppointmentOpen(false)} 
      />
      <WhatsAppButton />
    </div>
  );
}
