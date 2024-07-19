import React, { useState, useEffect } from 'react';
import './ExplorerMap.css';

const ExplorerMap = () => {
  const [isXVisible, setIsXVisible] = useState(false);
  const [areLinesVisible, setAreLinesVisible] = useState(false);

  const handleClick = () => {
    setIsXVisible(true);
  };

  useEffect(() => {
    if (isXVisible) {
      // Delay showing the dashed lines after the "X" is visible
      const timer = setTimeout(() => {
        setAreLinesVisible(true);
      }, 500); // Adjust delay to match "X" animation duration

      // Cleanup timeout if component unmounts
      return () => clearTimeout(timer);
    }
  }, [isXVisible]);

  return (
    <div>
      <button onClick={handleClick}>Toggle X</button>
      <div className='explorerMap'>
        <div className={`drawX ${isXVisible ? 'active' : ''}`}></div>
        <div className={`dashLines ${areLinesVisible ? 'active' : ''}`}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </div>
  );
}

export default ExplorerMap;
