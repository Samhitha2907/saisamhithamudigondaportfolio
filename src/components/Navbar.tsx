import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Education', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-rust-300/35 bg-rust-800/95 shadow-sm backdrop-blur-md'
          : 'border-cream-100/15 bg-rust-800/90 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-xl font-bold text-cream-50"
          aria-label="Go to top"
        >
          Samhitha
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm font-medium text-cream-100 transition-colors hover:text-white"
              >
                {l}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/SaiSamhitha,_Mudigonda.pdf"
              download
              className="flex items-center gap-1.5 rounded-lg bg-caramel-400 px-4 py-2 text-sm font-semibold text-cream-50 transition-colors hover:bg-caramel-300"
            >
              <Download size={14} />
              Resume
            </a>
          </li>
        </ul>

        <button
          className="text-cream-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-rust-300/35 bg-rust-800 px-6 py-4 md:hidden">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-left text-sm font-medium text-cream-100 hover:text-white"
            >
              {l}
            </button>
          ))}
          <a
            href="/Samhitha,_Mudigonda.pdf"
            download
            className="flex w-fit items-center gap-1.5 rounded-lg bg-caramel-400 px-4 py-2 text-sm font-semibold text-cream-50"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
