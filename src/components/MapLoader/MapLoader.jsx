import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './MapLoader.css';

function MapLoader() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const timeline = anime.timeline({
      easing: 'linear',
      begin: () => button.classList.add('hidden'),
      complete: () => button.classList.remove('hidden')
    });

    // Show the x character
    timeline.add({
      targets: '.start',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 350,
      delay: anime.stagger(350),
    });

    // Show the dashed line
    timeline.add({
      targets: '.in-between',
      strokeDashoffset: [0, anime.setDashoffset],
      duration: 1500,
    });

    // Ping, show the goalpost icon
    timeline.add({
      targets: '.end',
      rotate: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutBounce',
      duration: 400,
    });

    // Add event listener to restart the timeline animation
    button.addEventListener('click', () => timeline.restart());

    // Cleanup function to remove event listener
    return () => {
      button.removeEventListener('click', () => timeline.restart());
    };
  }, []);

  return (
      <div className='mapLoader'>
        <svg viewBox="0 0 100 100">
          <rect width="100" height="100" rx="2" fill="#242539" />
          <g fill="none" stroke="#4DC498" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            
            {/* This is the Dotted Line */}
            <g transform="translate(20 35)">
              <path d="M 0 0 v 25 h 15 l 10 -15 h 10 v 20 h 25" strokeDasharray="3 6" strokeDashoffset="2" />
              <path className="in-between" stroke="#242539" strokeWidth="2.5" d="M 60 30 h -25 v -20 h -10 l -10 15 h -15 v -25" />
            </g>
            {/* This is the X */}
            <g transform="translate(20 35)">
              <path className="start" d="M -3 -3 l 6 6" />
              <path className="start" d="M 3 -3 l -6 6" />
            </g>
            {/* This is the End Point */}
            <g transform="translate(80 65)">
              <g transform="translate(40 20)">
                <g className="end">
                  <g transform="translate(-40 -20)">
                    <path d="M 0 0 q 6 -6 6 -10 a 6 6 0 0 0 -12 0 q 0 4 6 10" />

                    <circle cy="-10" r="2" stroke="none" fill="#4DC498" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <button ref={buttonRef} className="hidden">Restart</button>
      </div>
  );
}

export default MapLoader;
