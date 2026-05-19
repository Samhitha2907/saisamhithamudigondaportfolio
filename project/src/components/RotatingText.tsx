import { useEffect, useState } from 'react';

type RotatingTextProps = {
  words: string[];
  interval?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  mode?: 'rotate' | 'typewriter';
  className?: string;
};

export default function RotatingText({
  words,
  interval = 1900,
  typeSpeed = 70,
  deleteSpeed = 34,
  mode = 'rotate',
  className = '',
}: RotatingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);

  const currentWord = words[wordIndex] ?? '';

  useEffect(() => {
    if (mode !== 'rotate' || words.length <= 1) return;

    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, mode, words.length]);

  useEffect(() => {
    if (mode !== 'typewriter' || !currentWord) return;

    const completedWord = !deleting && displayText === currentWord;
    const deletedWord = deleting && displayText === '';
    const delay = completedWord ? interval : deletedWord ? 240 : deleting ? deleteSpeed : typeSpeed;

    const timer = window.setTimeout(() => {
      if (completedWord) {
        setDeleting(true);
        return;
      }

      if (deletedWord) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      const nextLength = displayText.length + (deleting ? -1 : 1);
      setDisplayText(currentWord.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [currentWord, deleteSpeed, deleting, displayText, interval, mode, typeSpeed, words.length]);

  if (mode === 'rotate') {
    return (
      <span className={`rotator-shell ${className}`}>
        <span key={currentWord} className="rotator-word">
          {currentWord}
        </span>
      </span>
    );
  }

  return (
    <span className={`rotator-shell typewriter-shell ${className}`} aria-live="polite">
      <span className="rotator-word typewriter-word">
        {displayText || '\u00a0'}
      </span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
