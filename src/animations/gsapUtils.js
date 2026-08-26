import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const {
      y = 35,
      x = 0,
      opacity = 0,
      scale = 1,
      duration = 0.8,
      stagger = 0,
      ease = 'power3.out',
      start = 'top 85%',
      scrub = false
    } = options;

    const targets = el.children.length > 0 && options.stagger ? el.children : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, x, opacity, scale },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          duration,
          stagger: stagger ? 0.12 : 0,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            once: !scrub,
            scrub
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options]);

  return ref;
}

export function useGsapTextSplit() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
