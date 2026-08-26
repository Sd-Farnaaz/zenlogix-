import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports touch or reduced motion
    const touchQuery = window.matchMedia('(pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchQuery.matches || motionQuery.matches) {
      setIsTouch(true);
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out'
      });
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      gsap.set(ring, {
        x: ringX,
        y: ringY
      });

      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animFrame = requestAnimationFrame(render);

    const onOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, input, select, textarea');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor-text');
        setCursorText(text || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${isHovered ? 'is-hovered' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={cursorRingRef}
        className={`custom-cursor-ring ${isHovered ? 'is-hovered' : ''} ${cursorText ? 'has-text' : ''}`}
        aria-hidden="true"
      >
        {cursorText && <span className="cursor-text-label">{cursorText}</span>}
      </div>
    </>
  );
}
