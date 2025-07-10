import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorTrail = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    let mouse = { x: 0, y: 0 };
    let pos = { x: 0, y: 0 };

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const animate = () => {
      pos.x = lerp(pos.x, mouse.x - 10, 0.08);
      pos.y = lerp(pos.y, mouse.y - 10, 0.08);

      gsap.set(circle, { x: pos.x, y: pos.y });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate(); 

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="fixed top-0 left-0 w-5 h-5 bg-white border border-white/20 rounded-full pointer-events-none z-[9999]"
      style={{
        filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))',
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CursorTrail;
