import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cabinet from './components/Cabinet';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
<<<<<<< HEAD

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen ambient-mesh flex flex-col">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <Services onOpenBooking={handleOpenBooking} />
        <Cabinet />
        <Testimonials />
      </main>

      <Footer />

      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={selectedService}
      />
=======
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
>>>>>>> 676164b98c0ff65297d7ed4e40989dd0fea00cb4
    </div>
  );
}
