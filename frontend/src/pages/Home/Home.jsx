import React from 'react';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-blue-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Willkommen bei VoiceLink
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ihre professionelle Voice-Kommunikationsplattform
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-lg">
            Jetzt starten
          </button>
        </div>
      </section>
      
      {/* Service Section */}
      <section id="service" className="h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-4xl px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Unsere Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Voice Calls</h3>
              <p className="text-gray-600">Kristallklare Sprachübertragung in HD-Qualität</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Video Konferenzen</h3>
              <p className="text-gray-600">Professionelle Videokonferenzen für Teams</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Chat Integration</h3>
              <p className="text-gray-600">Nahtlose Integration von Text und Voice</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-4xl px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Über uns
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            VoiceLink wurde mit dem Ziel entwickelt, die Art und Weise zu revolutionieren, 
            wie Menschen miteinander kommunizieren. Unser Team aus erfahrenen Entwicklern 
            und Kommunikationsexperten arbeitet täglich daran, Ihnen die beste Voice-Experience zu bieten.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-gray-600">
                Verbindungen schaffen durch kristallklare Kommunikation
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-gray-600">
                Die Zukunft der digitalen Kommunikation gestalten
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;