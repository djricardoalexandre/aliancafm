import { Clock, Radio } from 'lucide-react';
import { scheduleData } from '../data/schedule';

export default function Schedule() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3">
          <Clock size={40} className="text-green-600" />
          Programação
        </h2>

        <div className="bg-gradient-to-br from-green-500 via-yellow-400 to-red-500 rounded-2xl p-1">
          <div className="bg-white rounded-xl p-6">
            <div className="space-y-4">
              {scheduleData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 transition-all transform hover:translate-x-2"
                >
                  <Radio size={24} className="text-red-600" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-green-700">{item.time}</span>
                      <span className="font-semibold text-gray-900">{item.show}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.host}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
