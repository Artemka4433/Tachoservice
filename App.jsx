// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TestimonialSection from './components/TestimonialSection';
import EventSection from './components/EventSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main className="main-content">
        <TestimonialSection />
        <EventSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;


