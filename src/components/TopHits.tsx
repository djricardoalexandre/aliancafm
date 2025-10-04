import { Music, TrendingUp } from 'lucide-react';
import { topHitsData } from '../data/topHits';

interface Hit {
  id: string;
  title: string;
  artist: string;
  play_count: number;
}

export default function TopHits() {
  const nationalHits = topHitsData
    .filter(hit => hit.category === 'nacional')
    .sort((a, b) => b.play_count - a.play_count)
    .slice(0, 10);

  const internationalHits = topHitsData
    .filter(hit => hit.category === 'internacional')
    .sort((a, b) => b.play_count - a.play_count)
    .slice(0, 10);

  const HitsList = ({ hits, title, gradient }: { hits: Hit[]; title: string; gradient: string }) => (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 shadow-lg transform transition-all hover:scale-105`}>
      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <TrendingUp size={28} />
        {title}
      </h3>
      <div className="space-y-3">
        {hits.length > 0 ? (
          hits.map((hit, index) => (
            <div
              key={hit.id}
              className="bg-white bg-opacity-90 rounded-lg p-3 flex items-center gap-3 transform transition-all hover:bg-opacity-100 hover:translate-x-2"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-red-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </div>
              <Music size={20} className="text-green-600" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{hit.title}</p>
                <p className="text-sm text-gray-600">{hit.artist}</p>
              </div>
              <div className="text-xs text-gray-500">{hit.play_count} plays</div>
            </div>
          ))
        ) : (
          <p className="text-white text-center py-4">Em breve as músicas mais tocadas!</p>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Top Músicas Mais Tocadas
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <HitsList
            hits={nationalHits}
            title="Sucessos Nacionais"
            gradient="from-green-600 to-yellow-500"
          />
          <HitsList
            hits={internationalHits}
            title="Sucessos Internacionais"
            gradient="from-blue-600 to-purple-600"
          />
        </div>
      </div>
    </section>
  );
}
