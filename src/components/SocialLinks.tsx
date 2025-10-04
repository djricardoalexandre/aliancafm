import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { radioConfig } from '../data/config';

export default function SocialLinks() {
  const socials = [
    { icon: Facebook, name: 'Facebook', color: 'hover:bg-blue-600', link: radioConfig.social.facebook },
    { icon: Instagram, name: 'Instagram', color: 'hover:bg-pink-600', link: radioConfig.social.instagram },
    { icon: Youtube, name: 'YouTube', color: 'hover:bg-red-600', link: radioConfig.social.youtube },
    { icon: Twitter, name: 'Twitter', color: 'hover:bg-blue-400', link: radioConfig.social.twitter }
  ];

  return (
    <section className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Siga-nos nas Redes Sociais</h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gray-800 ${social.color} text-white rounded-full p-4 transition-all transform hover:scale-110 shadow-lg`}
              title={social.name}
            >
              <social.icon size={32} />
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Promoções</h3>
          <p className="text-lg">Em breve!</p>
          <p className="text-sm mt-2 opacity-90">
            Fique ligado nas nossas redes sociais para não perder nenhuma promoção
          </p>
        </div>
      </div>
    </section>
  );
}
