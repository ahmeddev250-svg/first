import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cabinet from './components/Cabinet';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

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
    </div>
  );
}
