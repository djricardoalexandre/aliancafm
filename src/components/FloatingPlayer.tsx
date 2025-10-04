import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { radioConfig } from '../data/config';

export default function FloatingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-br from-green-500 via-yellow-400 to-red-500 rounded-2xl shadow-2xl p-4 w-64 transform transition-all hover:scale-105 hover:shadow-3xl">
      <audio ref={audioRef} src={radioConfig.streamUrl} />

      <div className="text-white text-center mb-3">
        <h3 className="font-bold text-lg">{radioConfig.name}</h3>
        <p className="text-sm opacity-90">{radioConfig.frequency} FM</p>
        <p className="text-xs mt-1 font-semibold">{radioConfig.slogan}</p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-3">
        <button
          onClick={togglePlay}
          className="bg-white text-green-600 rounded-full p-4 hover:bg-gray-100 transition-all transform hover:rotate-12"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>

        <button
          onClick={toggleMute}
          className="bg-white text-red-600 rounded-full p-3 hover:bg-gray-100 transition-all"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <Volume2 size={16} className="text-white" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="flex-1 h-2 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {isPlaying && (
        <div className="mt-3 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-white rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
