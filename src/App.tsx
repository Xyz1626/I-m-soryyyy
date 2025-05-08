// import React, { useState, useEffect, useRef } from 'react';
// import { Music, Pause, Play, RefreshCw, Heart } from 'lucide-react';
// import HeartGame from './components/HeartGame';
// import PhotoGallery from './components/PhotoGallery';
// import backgroundMusic from './assets/background-music.mp3';

// function App() {
//   const [name, setName] = useState('Sarah');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioLoaded, setAudioLoaded] = useState(false);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     // Create audio element
//     audioRef.current = new Audio(backgroundMusic);
//     audioRef.current.loop = true;
//     audioRef.current.volume = 0.3;
//     audioRef.current.addEventListener('canplaythrough', () => {
//       setAudioLoaded(true);
//     });

//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.removeEventListener('canplaythrough', () => {
//           setAudioLoaded(true);
//         });
//       }
//     };
//   }, []);

//   const toggleMusic = () => {
//     if (!audioRef.current) return;
    
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play().catch(e => console.error("Audio play failed:", e));
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 font-comic relative overflow-x-hidden">
//       {/* Floating hearts background */}
//       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//         {[...Array(15)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute animate-float opacity-20"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${15 + Math.random() * 15}s`,
//               transform: `scale(${0.5 + Math.random() * 1.5})`,
//             }}
//           >
//             <Heart size={30} fill="#f472b6" stroke="#f472b6" />
//           </div>
//         ))}
//       </div>

//       {/* Header */}
//       <header className="relative pt-16 pb-8 text-center z-10">
//         <h1 className="text-5xl md:text-7xl font-bold text-pink-600 animate-bounce-slow inline-block relative">
//           I'm Sorry {name}
//           <span className="absolute -top-6 -right-6 animate-float-delay">
//             <Heart size={30} fill="#f472b6" stroke="#f472b6" />
//           </span>
//           <span className="absolute -bottom-4 -left-6 animate-float">
//             <Heart size={24} fill="#f472b6" stroke="#f472b6" />
//           </span>
//         </h1>
        
//         {/* Music control */}
//         <div className="absolute top-6 right-6 flex items-center space-x-2">
//           <button 
//             onClick={toggleMusic}
//             disabled={!audioLoaded}
//             className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center"
//             aria-label={isPlaying ? "Pause music" : "Play music"}
//           >
//             <Music className="text-pink-500" size={20} />
//             {isPlaying ? 
//               <Pause className="text-pink-500 ml-1" size={16} /> : 
//               <Play className="text-pink-500 ml-1" size={16} />
//             }
//           </button>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 pb-20 z-10 relative">
//         {/* Letter Section */}
//         <section className="mb-16 max-w-2xl mx-auto">
//           <div className="bg-white rounded-lg p-8 shadow-lg transform rotate-1 relative" 
//                style={{ 
//                  backgroundImage: "url('https://www.transparenttextures.com/patterns/lined-paper.png')" 
//                }}>
//             <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-300 rounded-full shadow-md transform -rotate-12"></div>
//             <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-blue-300 rounded-full shadow-md transform rotate-12"></div>
            
//             <h2 className="text-3xl font-handwriting text-pink-700 mb-6 animate-fade-in">Dear {name},</h2>
            
//             <div className="space-y-4 font-handwriting text-lg text-gray-700">
//               <p className="animate-fade-in animation-delay-100">
//                 I wanted to take a moment to say how truly sorry I am. Sometimes words come out wrong, 
//                 actions don't match intentions, and feelings get hurt along the way.
//               </p>
//               <p className="animate-fade-in animation-delay-200">
//                 You mean the world to me, and the last thing I ever want to do is cause you pain. 
//                 I've been reflecting on what happened, and I realize now how my actions affected you.
//               </p>
//               <p className="animate-fade-in animation-delay-300">
//                 I promise to do better, to listen more, and to be the person you deserve. 
//                 Our friendship/relationship is too important to let misunderstandings come between us.
//               </p>
//               <p className="animate-fade-in animation-delay-400 font-bold">
//                 With all my heart,
//               </p>
//               <p className="animate-fade-in animation-delay-500 font-bold text-xl text-pink-600">
//                 Me
//               </p>
//             </div>
            
//             <div className="absolute -right-2 top-1/3 transform rotate-12">
//               <Heart size={24} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
//             </div>
//             <div className="absolute -left-2 bottom-1/4 transform -rotate-12">
//               <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
//             </div>
//           </div>
//         </section>

//         {/* Poem Section - Updated with improved hover effects */}
//         <section className="mb-16 max-w-2xl mx-auto">
//           <div className="bg-amber-50 rounded-lg p-8 shadow-lg transform -rotate-1 relative border-4 border-amber-200"
//                style={{ 
//                  backgroundImage: "url('https://www.transparenttextures.com/patterns/notebook.png')" 
//                }}>
//             <h2 className="text-3xl font-comic text-amber-800 mb-6 text-center animate-fade-in">A Poem For You</h2>
            
//             <div className="space-y-6 font-handwriting text-lg text-gray-800 text-center">
//               <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
//                 <p className="animate-fade-in animation-delay-100">
//                   Words can hurt, actions too,<br />
//                   I never meant to upset you.
//                 </p>
//               </div>
              
//               <div className="flex justify-center">
//                 <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
//               </div>
              
//               <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
//                 <p className="animate-fade-in animation-delay-200">
//                   Time can heal what's broken now,<br />
//                   To mend our bond, I make this vow.
//                 </p>
//               </div>
              
//               <div className="flex justify-center">
//                 <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
//               </div>
              
//               <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
//                 <p className="animate-fade-in animation-delay-300">
//                   Forgiveness is what I seek today,<br />
//                   To chase the clouds of doubt away.
//                 </p>
//               </div>
              
//               <div className="flex justify-center">
//                 <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
//               </div>
              
//               <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
//                 <p className="animate-fade-in animation-delay-400">
//                   With this apology, sincere and true,<br />
//                   I hope to start again with you.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Photo Gallery - Updated with comic-style borders and effects */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-comic text-pink-700 mb-6 text-center">Our Memories</h2>
//           <PhotoGallery />
//         </section>

//         {/* Interactive Game - Updated with easier difficulty and tutorial */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-comic text-pink-700 mb-6 text-center">Pop Some Hearts!</h2>
//           <p className="text-center text-gray-600 mb-4">Click on 5 hearts to reveal a special message</p>
//           <HeartGame />
//         </section>
//       </main>

//       <footer className="bg-pink-100 py-6 text-center text-pink-600 font-comic">
//         <p>Made with ❤️ just for you</p>
//       </footer>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect, useRef } from 'react';
import { Music, Pause, Play, Heart } from 'lucide-react';
import HeartGame from './components/HeartGame';
import PhotoGallery from './components/PhotoGallery';
import backgroundMusic from './assets/background.mp3';
import './EnvelopeAnimation.css';

const EnvelopeOverlay = ({ onFinish }: { onFinish: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    // Wait until the flap animation and fade out are complete
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
        <span className="envelope-text">Click to open</span>
      </div>
    </div>
  );
};

function App() {
  const [name] = useState('Madam Jii');
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
          {/* Main App Content */}
          <div className="min-h-screen bg-pink-50 font-comic relative overflow-x-hidden">
            {/* Floating hearts background */}
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

            {/* Header */}
            <header className="relative pt-16 pb-8 text-center z-10">
              <h1 className="text-5xl md:text-7xl font-bold text-pink-600 animate-bounce-slow inline-block relative">
                I'm Sorry {name}
                <span className="absolute -top-6 -right-6 animate-float-delay">
                  <Heart size={30} fill="#f472b6" stroke="#f472b6" />
                </span>
                <span className="absolute -bottom-4 -left-6 animate-float">
                  <Heart size={24} fill="#f472b6" stroke="#f472b6" />
                </span>
              </h1>
              {/* Music control */}
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
              {/* Letter Section */}
              <section className="mb-16 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-8 shadow-lg transform rotate-1 relative" 
                     style={{ 
                       backgroundImage: "url('https://www.transparenttextures.com/patterns/lined-paper.png')" 
                     }}>
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-300 rounded-full shadow-md transform -rotate-12"></div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-blue-300 rounded-full shadow-md transform rotate-12"></div>
                  
                  <h2 className="text-3xl font-handwriting text-pink-700 mb-6 animate-fade-in">
                    Dear {name},
                  </h2>
                  
                  <div className="space-y-4 font-handwriting text-lg text-gray-700">
                    <p className="animate-fade-in animation-delay-100">
                      I wanted to take a moment to say how truly sorry I am. Sometimes words come out wrong, 
                      actions don't match intentions, and feelings get hurt along the way.
                    </p>
                    <p className="animate-fade-in animation-delay-200">
                      You mean the world to me, and the last thing I ever want to do is cause you pain. 
                      I've been reflecting on what happened, and I realize now how my actions affected you.
                    </p>
                    <p className="animate-fade-in animation-delay-300">
                      I promise to do better, to listen more, and to be the person you deserve. 
                      Our friendship/relationship is too important to let misunderstandings come between us.
                    </p>
                    <p className="animate-fade-in animation-delay-400 font-bold">
                      With all my heart,
                    </p>
                    <p className="animate-fade-in animation-delay-500 font-bold text-xl text-pink-600">
                      Me
                    </p>
                  </div>
                  
                  <div className="absolute -right-2 top-1/3 transform rotate-12">
                    <Heart size={24} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
                  </div>
                  <div className="absolute -left-2 bottom-1/4 transform -rotate-12">
                    <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
                  </div>
                </div>
              </section>

              {/* Poem Section */}
              <section className="mb-16 max-w-2xl mx-auto">
                <div className="bg-amber-50 rounded-lg p-8 shadow-lg transform -rotate-1 relative border-4 border-amber-200"
                     style={{ 
                       backgroundImage: "url('https://www.transparenttextures.com/patterns/notebook.png')" 
                     }}>
                  <h2 className="text-3xl font-comic text-amber-800 mb-6 text-center animate-fade-in">
                    A Poem For You
                  </h2>
                  
                  <div className="space-y-6 font-handwriting text-lg text-gray-800 text-center">
                    <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
                      <p className="animate-fade-in animation-delay-100">
                        Words can hurt, actions too,<br />
                        I never meant to upset you.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
                    </div>
                    
                    <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
                      <p className="animate-fade-in animation-delay-200">
                        Time can heal what's broken now,<br />
                        To mend our bond, I make this vow.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
                    </div>
                    
                    <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
                      <p className="animate-fade-in animation-delay-300">
                        Forgiveness is what I seek today,<br />
                        To chase the clouds of doubt away.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <Heart size={20} fill="#f472b6" stroke="#f472b6" className="animate-pulse" />
                    </div>
                    
                    <div className="poem-stanza transition-all duration-300 ease-in-out hover:bg-amber-100 hover:shadow-inner p-3 rounded-lg">
                      <p className="animate-fade-in animation-delay-400">
                        With this apology, sincere and true,<br />
                        I hope to start again with you.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Photo Gallery */}
              <section className="mb-16">
                <h2 className="text-3xl font-comic text-pink-700 mb-6 text-center">
                  Our Memories
                </h2>
                <PhotoGallery />
              </section>

              {/* Interactive Game */}
              <section className="mb-16">
                <h2 className="text-3xl font-comic text-pink-700 mb-6 text-center">
                  Pop Some Hearts!
                </h2>
                <p className="text-center text-gray-600 mb-4">
                  Click on 5 hearts to reveal a special message
                </p>
                <HeartGame />
              </section>
            </main>

            <footer className="bg-pink-100 py-6 text-center text-pink-600 font-comic">
              <p>Made with ❤️ just for you</p>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
