import { useEffect, useState } from 'react';
import { Radio, Sparkles } from 'lucide-react';
import FloatingPlayer from './components/FloatingPlayer';
import WhatsAppButton from './components/WhatsAppButton';
import TopHits from './components/TopHits';
import NewsSection from './components/NewsSection';
import Schedule from './components/Schedule';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import { radioConfig } from './data/config';

function App() {
  const [bgColor, setBgColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const gradients = [
    'from-green-400 via-blue-500 to-purple-600',
    'from-yellow-400 via-red-500 to-pink-600',
    'from-green-500 via-teal-500 to-blue-600',
    'from-orange-400 via-red-500 to-rose-600'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingPlayer />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${gradients[bgColor]} transition-all duration-1000 overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center px-4 py-20">
          <div className="flex justify-center mb-8 transform hover:scale-110 transition-transform duration-500">
            <img
              src="/image.png"
              alt="Rádio Aliança FM 87.9"
              className="w-64 h-64 object-contain drop-shadow-2xl animate-bounce"
            />
          </div>

          <h1 className="text-7xl md:text-8xl font-black text-white mb-4 drop-shadow-lg transform hover:scale-105 transition-transform">
            {radioConfig.name.toUpperCase()}
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <Radio size={48} className="text-yellow-300 animate-pulse" />
            <p className="text-6xl font-bold text-yellow-300 drop-shadow-lg">{radioConfig.frequency}</p>
            <Sparkles size={48} className="text-yellow-300 animate-pulse" />
          </div>

          <p className="text-4xl font-bold text-white mb-8 drop-shadow-lg animate-pulse">
            {radioConfig.slogan.toUpperCase()}
          </p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl text-white drop-shadow-lg">
              {radioConfig.city} - {radioConfig.state}
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-full px-8 py-4 border-2 border-white">
              <p className="text-xl text-white font-semibold">
                Transmitindo 24 horas de música para você!
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Sucessos Nacionais', 'Hits Internacionais', 'Notícias', 'Programação 24h'].map((tag, index) => (
              <span
                key={index}
                className="bg-white bg-opacity-30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold transform hover:scale-110 hover:bg-opacity-50 transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <TopHits />
      <NewsSection />
      <Schedule />
      <About />
      <SocialLinks />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img src="/image.png" alt="Logo" className="w-16 h-16" />
          </div>
          <p className="text-lg font-semibold mb-2">{radioConfig.name} {radioConfig.frequency}</p>
          <p className="text-sm text-gray-400">{radioConfig.city} - {radioConfig.state} | {radioConfig.slogan}</p>
          <p className="text-xs text-gray-500 mt-4">
            © {new Date().getFullYear()} {radioConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
