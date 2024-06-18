import { FC, useEffect, useState } from 'react';
import React from 'react';

export const SmileySpinner: FC<{ icon: any }> = ({
  icon,
}) => {

  const [degrees, setDegrees] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('happened')
      setDegrees(d => d > 360 ? 0 : d + 1);
    }, 1);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <img src={icon} alt='spinner icon' style={{ transform: `rotate(${degrees}deg)` }} />
  );
};
