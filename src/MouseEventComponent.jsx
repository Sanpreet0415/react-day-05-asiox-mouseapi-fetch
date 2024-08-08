import React, { useEffect, useState } from 'react';

export const MouseEventComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <h1>Mouse Position</h1>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  );
};


