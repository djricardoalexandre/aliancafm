import { Newspaper, ExternalLink } from 'lucide-react';
import { newsData } from '../data/news';

export default function NewsSection() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3">
          <Newspaper size={40} className="text-red-600" />
          Notícias
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.source}
                </span>
                <ExternalLink size={16} className="text-gray-400 group-hover:text-red-600 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">Clique para ler mais</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
