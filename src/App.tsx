import React, { useState, useEffect, useRef } from 'react';
import { Music, Pause, Play, Heart } from 'lucide-react';
import HeartGame from './components/HeartGame';
import PhotoGallery from './components/PhotoGallery';
import backgroundMusic from './assets/background.mp3';

const EnvelopeOverlay = ({ onFinish }: { onFinish: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      onFinish();
    }, 1200);
  };

  return (
    <div
      className={`envelope-overlay ${isOpen ? 'fade-out' : ''}`}
      onClick={handleClick}
    >
      <div className={`envelope ${isOpen ? 'open' : ''}`}>
        <div className="envelope-flap"></div>
        <div className="envelope-body"></div>
        <span className="envelope-text">Click to open your apology letter ❤️</span>
      </div>
    </div>
  );
};

function App() {
  const [name] = useState('My Love');
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(backgroundMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    audioRef.current.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
    });
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplaythrough', () => {
          setAudioLoaded(true);
        });
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error('Audio play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      {showEnvelope ? (
        <EnvelopeOverlay onFinish={() => setShowEnvelope(false)} />
      ) : (
        <div className="fade-in">
          <div className="min-h-screen bg-pink-50 font-comic relative overflow-x-hidden">
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute animate-float opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${15 + Math.random() * 15}s`,
                    transform: `scale(${0.5 + Math.random() * 1.5})`,
                  }}
                >
                  <Heart size={30} fill="#f472b6" stroke="#f472b6" />
                </div>
              ))}
            </div>

            <header className="relative pt-16 pb-8 text-center z-10">
              <h1 className="text-5xl md:text-7xl font-bold text-pink-600 animate-bounce-slow inline-block relative">
                I'm Really Sorry {name}
                <span className="absolute -top-6 -right-6 animate-float-delay">
                  <Heart size={30} fill="#f472b6" stroke="#f472b6" />
                </span>
                <span className="absolute -bottom-4 -left-6 animate-float">
                  <Heart size={24} fill="#f472b6" stroke="#f472b6" />
                </span>
              </h1>
              
              <div className="absolute top-6 right-6 flex items-center space-x-2">
                <button 
                  onClick={toggleMusic}
                  disabled={!audioLoaded}
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center"
                  aria-label={isPlaying ? 'Pause music' : 'Play music'}
                >
                  <Music className="text-pink-500" size={20} />
                  {isPlaying ? 
                    <Pause className="text-pink-500 ml-1" size={16} /> : 
                    <Play className="text-pink-500 ml-1" size={16} />
                  }
                </button>
              </div>
            </header>

            <main className="container mx-auto px-4 pb-20 z-10 relative">
              <section className="mb-16 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-8 shadow-lg transform rotate-1 relative" 
                     style={{ 
                       backgroundImage: "url('https://www.transparenttextures.com/patterns/lined-paper.png')" 
                     }}>
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-300 rounded-full shadow-md transform -rotate-12"></div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-blue-300 rounded-full shadow-md transform rotate-12"></div>
                  
                  <h2 className="text-3xl font-handwriting text-pink-700 mb-6 animate-fade-in">My Dearest Love,</h2>
                  
                  <div className="space-y-4 font-handwriting text-lg text-gray-700">
                    <p className="animate-fade-in animation-delay-100">
                      I know I messed up, and my heart aches knowing I've hurt you. You mean everything to me, 
                      and seeing you upset because of my actions breaks my heart.
                    </p>
                    <p className="animate-fade-in animation-delay-200">
                      Every moment we spend together is precious to me, and I never meant to cause you any pain. 
                      I've been thinking about what happened, and I realize my mistakes.
                    </p>
                    <p className="animate-fade-in animation-delay-300">
                      You deserve better, and I promise to be more thoughtful, more caring, and more understanding. 
                      Our love is too special to let any misunderstanding come between us.
                    </p>
                    <p className="animate-fade-in animation-delay-400 font-bold">
                      Forever yours,
                    </p>
                    <p className="animate-fade-in animation-delay-500 font-bold text-xl text-pink-600">
                      Your Love ❤️
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16 max-w-2xl mx-auto">
                <div className="bg-amber-50 rounded-lg p-8 shadow-lg transform -rotate-1 relative border-4 border-amber-200"
                     style={{ 
                       backgroundImage: "url('https://www.transparenttextures.com/patterns/notebook.png')" 
                     }}>
                  <h2 className="text-3xl font-comic text-amber-800 mb-6 text-center animate-fade-in">A Poem From My Heart</h2>
                  
                  <div className="space-y-6 font-handwriting text-lg text-gray-800 text-center">
                    <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
                      <p className="animate-fade-in animation-delay-100">
                        In moments of silence, my heart speaks true,<br />
                        Every beat echoes my love for you.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
                    </div>
                    
                    <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
                      <p className="animate-fade-in animation-delay-200">
                        Though words may fail and actions too,<br />
                        My love remains forever true.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
                    </div>
                    
                    <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
                      <p className="animate-fade-in animation-delay-300">
                        Please forgive the pain I've caused,<br />
                        Let our love heal without pause.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
                    </div>
                    
                    <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
                      <p className="animate-fade-in animation-delay-400">
                        With this promise, pure and new,<br />
                        I'll cherish every moment with you.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-comic text-pink-700 mb-6 text-center">Our Beautiful Memories</h2>
                <PhotoGallery />
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-comic text-pink-700 mb-6 text-center">Pop These Hearts of Love!</h2>
                <p className="text-center text-gray-600 mb-4">Pop 5 hearts to see a special message just for you ❤️</p>
                <HeartGame />
              </section>
            </main>

            <footer className="bg-pink-100 py-6 text-center text-pink-600 font-comic">
              <p>Made with endless love, just for you ❤️</p>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;