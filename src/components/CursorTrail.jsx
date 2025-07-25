// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';

// const CursorTrail = () => {
//   const circleRef = useRef(null);
//   const idleTimer = useRef(null);
//   const [isIdle, setIsIdle] = useState(false);
//   const logoRef = useRef(null);

//   useEffect(() => {
//     const circle = circleRef.current;
//     const logo = document.getElementById('logo'); // target logo by ID
//     if (!logo) return;

//     let mouse = { x: 0, y: 0 };
//     let pos = { x: 0, y: 0 };
//     let idle = false;

//     const lerp = (a, b, n) => (1 - n) * a + n * b;

//     const animate = () => {
//       const targetX = idle ? logo.getBoundingClientRect().right + 5 : mouse.x - 10;
//       const targetY = idle ? logo.getBoundingClientRect().top + 2 : mouse.y - 10;

//       pos.x = lerp(pos.x, targetX, 0.08);
//       pos.y = lerp(pos.y, targetY, 0.08);

//       gsap.set(circle, { x: pos.x, y: pos.y });

//       requestAnimationFrame(animate);
//     };

//     const resetIdleTimer = () => {
//       clearTimeout(idleTimer.current);
//       if (idle) {
//         setIsIdle(false);
//         idle = false;
//       }

//       idleTimer.current = setTimeout(() => {
//         setIsIdle(true);
//         idle = true;
//       }, 1000);
//     };

//     const handleMouseMove = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//       resetIdleTimer();
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     animate();
//     resetIdleTimer();

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       clearTimeout(idleTimer.current);
//     };
//   }, []);

//   return (
//     <div
//       ref={circleRef}
//       className="hidden md:block fixed top-0 left-0 w-5 h-5 bg-white border border-white/20 rounded-full pointer-events-none z-[9999]"
//       style={{
//         filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))',
//         mixBlendMode: 'difference',
//       }}
//     />
//   );
// };

// export default CursorTrail;

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CursorTrail = () => {
  const circleRef = useRef(null);
  const idleTimer = useRef(null);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const circle = circleRef.current;
    const logo = document.getElementById('logo'); // Target logo by ID
    if (!circle || !logo) return;

    let mouse = { x: 0, y: 0 };
    let pos = { x: 0, y: 0 };
    let idle = false;

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const animate = () => {
      const targetX = idle ? logo.getBoundingClientRect().right + 3 : mouse.x - 10;
      const targetY = idle ? logo.getBoundingClientRect().top + 1 : mouse.y - 10;

      pos.x = lerp(pos.x, targetX, 0.08);
      pos.y = lerp(pos.y, targetY, 0.08);

      gsap.set(circle, { x: pos.x, y: pos.y });

      // Animate size when idle or active
      gsap.to(circle, {
        width: idle ? 10 : 20,
        height: idle ? 10 : 20,
        duration: 0.3,
        ease: 'power2.out',
      });

      requestAnimationFrame(animate);
    };

    const resetIdleTimer = () => {
      clearTimeout(idleTimer.current);
      if (idle) {
        setIsIdle(false);
        idle = false;
      }

      idleTimer.current = setTimeout(() => {
        setIsIdle(true);
        idle = true;
      }, 2000);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      resetIdleTimer();
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();
    resetIdleTimer();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="hidden md:block fixed top-0 left-0 bg-white border border-white/20 rounded-full pointer-events-none z-[9999]"
      style={{
        width: '20px',
        height: '20px',
        filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))',
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CursorTrail;
