import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up';
  delay?: number;
};

export default function Reveal({ children, className = '', direction = 'up', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const directionClass = {
    left: 'reveal-left',
    right: 'reveal-right',
    up: 'reveal-up',
  }[direction];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const reveal = () => setVisible(true);
    const fallback = window.setTimeout(reveal, 1800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          window.clearTimeout(fallback);
          reveal();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.04, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-card ${directionClass} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
