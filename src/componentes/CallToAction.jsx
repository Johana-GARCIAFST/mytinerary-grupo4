import React, { useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import BackgroundHero from "../img/Background.jpg";
import "../calltoaction.css"

const CallToAction = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Duración del salto en milisegundos
    }, 5000); // Intervalo de 5 segundos

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="Hero" style={{ backgroundImage: `url(${BackgroundHero})` }}>
      <div className='Slogan'>
        <div className={`pin ${isAnimating ? 'animating' : ''}`}>
          <LocationOnIcon />
        </div>
        <div className="HeroText">¡Find your perfect trip, designed by insiders who know and love their cities!</div>
        <div className={`pin ${isAnimating ? 'animating' : ''}`}>
          <LocationOnIcon />
        </div>
      </div>
      <div className='CallToAction'>
        <div className="Call">Start planning your trip here!</div>
        <div className={`${isAnimating ? 'icon-animating' : ''}`}>
          <AdsClickIcon />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
