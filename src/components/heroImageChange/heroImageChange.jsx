"use client"
import React, { useState, useEffect, useCallback } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    { id: 1, src: "/images/cheetahHero.jpg", alt: "Eden Wildlife Preserve" },
    { id: 2, src: "/images/bengalHero.jpg", alt: "Eden Wildlife Preserve" },
    { id: 3, src: "/images/polarBearHero.jpg", alt: "Eden Wildlife Preserve" },
    { id: 4, src: "/images/birdsHero.jpg", alt: "Eden Wildlife Preserve" },
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch(error => console.error('Error preloading images:', error));
    };

    preloadImages();
  }, []);

  const transition = useCallback(() => {
    setIsTransitioning(true);
    
    // Calculate next indices
    const nextCurrentIndex = (currentIndex + 1) % images.length;
    const nextNextIndex = (nextCurrentIndex + 1) % images.length;
    
    // After transition completes
    setTimeout(() => {
      setCurrentIndex(nextCurrentIndex);
      setNextIndex(nextNextIndex);
      setIsTransitioning(false);
    }, 750); // Match the CSS transition duration
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      transition();
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesLoaded, transition]);

  const handleDotClick = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    const nextNextIndex = (index + 1) % images.length;
    
    setTimeout(() => {
      setCurrentIndex(index);
      setNextIndex(nextNextIndex);
      setIsTransitioning(false);
    }, 750);
  };

  useEffect(() => {
    // Add a resize observer to handle height changes
    const checkHeight = () => {
      const vh = window.innerHeight;
      document.documentElement.style.setProperty('--hero-height', 
        vh <= 800 ? '60vh' : '90vh'
      );
    };

    checkHeight();
    window.addEventListener('resize', checkHeight);
    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="heroSection w-full bg-black">
        <div className="heroImageContainer w-full" style={{ height: 'var(--hero-height)' }}>
          {/* Loading placeholder */}
        </div>
      </div>
    );
  }

  const ImageLayer = ({ index, isActive, shouldTransition }) => (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        opacity: isActive ? 1 : 0,
        transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: isActive ? 2 : 1
      }}
    >
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="w-screen h-full object-cover"
        style={{ height: 'var(--hero-height)' }}
      />
    </div>
  );

  return (
    <div className="heroSection w-full">
      <div className="heroImageContainer w-full relative bg-black" style={{ height: 'var(--hero-height)' }}>
        <ImageLayer
          index={currentIndex}
          isActive={!isTransitioning}
          shouldTransition={isTransitioning}
        />
        <ImageLayer
          index={nextIndex}
          isActive={isTransitioning}
          shouldTransition={isTransitioning}
        />

        {/* Overlay gradient */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), transparent)',
            pointerEvents: 'none'
          }}
        />

        {/* Vertical dots indicator */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              disabled={isTransitioning}
            />
          ))}
        </div>

        {/* Hero text and button */}
        <div className="heroTextContainer absolute bottom-0 left-0 w-full z-10">
          <div>
            <div className="heroText">EXPLORE THE WILD</div>
          </div>
          <div className="buyTicketsContainer">
            <a href="tickets">
              <button className="buyTicketsButton">
                BUY TICKETS
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;