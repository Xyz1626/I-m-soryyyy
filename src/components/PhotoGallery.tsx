import React, { useState } from 'react';
import { Zap, Star, Heart } from 'lucide-react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'

const PhotoGallery: React.FC = () => {
  // Placeholder images from Unsplash
  const placeholderImages = [
    {
      url: img1,
      caption: 'whyyy so madddd',
      effect: 'WIWIWI!',
      effectColor: 'text-yellow-500'
    },
    {
      url: img2,
      caption: 'will buy u melody if u maaf ',
      effect: 'YEYEY!',
      effectColor: 'text-blue-500'
    },
    {
      url: img3,
      caption: 'hello princess',
      effect: 'WUWUWU!',
      effectColor: 'text-yellow-500'
    },
    {
      url:  img4,
      caption: 'maaf me pls',
      effect: 'HEHEH!',
      effectColor: 'text-blue-500'
    },
    {
      url: img5,
      caption: 'again im solly',
      effect: 'WIWIWI!',
      effectColor: 'text-yellow-500'
    },
    {
      url: img6,
      caption: 'i lob u!',
      effect: 'WUWUWU!',
      effectColor: 'text-blue-500'
    },
    
    
  ];

  // Total slots in gallery (6 images + placeholders = 9 slots)
  const totalSlots = 6;
  const remainingSlots = totalSlots - placeholderImages.length;
  
  // State for comic book page flip effect
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  
  // Random comic effect icons
  const getRandomEffectIcon = (index: number) => {
    const icons = [
      <Zap key={`icon-${index}`} size={24} className="text-yellow-500" />,
      <Star key={`icon-${index}`} size={24} className="text-blue-500" />,
      <Heart key={`icon-${index}`} size={24} className="text-pink-500" />
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {placeholderImages.map((image, index) => (
        <div 
          key={index}
          className={`comic-frame bg-white p-3 rounded-lg shadow-lg transform transition-all duration-500 
                      ${flippedIndex === index ? 'scale-105 rotate-3' : 'hover:scale-105 hover:rotate-1'}`}
          style={{ 
            borderRadius: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
            border: '8px solid #000',
            position: 'relative',
            overflow: 'visible'
          }}
          onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
        >
          {/* Comic effect burst */}
          <div className={`absolute -top-4 -right-4 z-10 bg-${image.effectColor.replace('text-', '')} 
                           text-white font-comic font-bold py-2 px-4 rounded-full transform rotate-12
                           ${flippedIndex === index ? 'scale-125' : 'scale-100'} 
                           transition-all duration-300`}
               style={{
                 boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                 border: '2px solid black'
               }}>
            <span className="text-lg">{image.effect}</span>
          </div>
          
          <div className="relative overflow-hidden rounded-lg" style={{ paddingBottom: '100%' }}>
            <img 
              src={image.url} 
              alt={`Memory ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500
                        ${flippedIndex === index ? 'brightness-110 contrast-110' : ''}`}
              loading="lazy"
            />
            
            {/* Speech bubble caption */}
            <div className={`speech-bubble-comic absolute bottom-2 left-2 right-2 bg-white p-3 rounded-lg
                            transform transition-all duration-500
                            ${flippedIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{
                   border: '2px solid black',
                   boxShadow: '2px 2px 0 rgba(0,0,0,0.2)'
                 }}>
              <p className="font-comic text-center text-gray-800 text-sm">{image.caption}</p>
            </div>
          </div>
          
          {/* Comic style decorative element */}
          <div className="absolute -bottom-3 -left-3 transform -rotate-12">
            {getRandomEffectIcon(index)}
          </div>
        </div>
      ))}
      
      {/* Placeholder slots with comic style caption */}
      {Array.from({ length: remainingSlots }).map((_, index) => (
        <div 
          key={`placeholder-${index}`}
          className="comic-frame bg-white p-3 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:rotate-1"
          style={{ 
            borderRadius: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
            border: '8px solid #000',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          {/* Default comic effect burst */}
          <div className="absolute -top-4 -right-4 z-10 bg-red-500 
                          text-white font-comic font-bold py-2 px-4 rounded-full transform rotate-12
                          transition-all duration-300"
               style={{
                 boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                 border: '2px solid black'
               }}>
            <span className="text-lg">BAM!</span>
          </div>
          
          <div className="relative overflow-hidden rounded-lg bg-gray-200" style={{ paddingBottom: '100%' }}>
            {/* Optionally, you could add a default image or illustration here */}
          </div>
          
          {/* Speech bubble caption for placeholder */}
          <div className="speech-bubble-comic absolute bottom-2 left-2 right-2 bg-white p-3 rounded-lg
                           transform transition-all duration-500"
               style={{
                 border: '2px solid black',
                 boxShadow: '2px 2px 0 rgba(0,0,0,0.2)'
               }}>
            <p className="font-comic text-center text-gray-800 text-sm">Comic Caption</p>
          </div>
          
          {/* Comic style decorative element */}
          <div className="absolute -bottom-3 -left-3 transform -rotate-12">
            <Star size={24} className="text-pink-300" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
