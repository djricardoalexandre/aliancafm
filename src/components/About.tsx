import { Heart, MapPin, Radio } from 'lucide-react';
import { radioConfig } from '../data/config';

export default function About() {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Radio size={40} className="text-green-600" />
              Sobre a Rádio
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {radioConfig.about.description}
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {radioConfig.about.mission}
            </p>
            <div className="flex items-start gap-3 text-gray-700 mb-3">
              <MapPin size={24} className="text-red-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">{radioConfig.city}, {radioConfig.state}</p>
                <p className="text-sm">{radioConfig.about.cityDescription}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Heart size={24} className="text-red-600" />
              <p className="font-semibold text-lg">Feita com amor para você!</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 via-yellow-400 to-red-500 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8">
                <img
                  src="/image.png"
                  alt="Rádio Aliança FM 87.9"
                  className="w-full h-auto rounded-xl shadow-lg transform transition-all hover:scale-105"
                />
                <div className="mt-6 text-center">
                  <p className="text-3xl font-bold text-green-600">{radioConfig.frequency} FM</p>
                  <p className="text-xl font-semibold text-gray-800 mt-2">{radioConfig.slogan}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
