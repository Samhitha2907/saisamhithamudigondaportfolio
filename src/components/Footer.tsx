import { Mail, Linkedin, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rust-800 py-12 text-cream-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold">Sai Samhitha Mudigonda</p>
            <p className="mt-1 text-sm text-cream-200">Full-Stack Engineer | AWS</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:saisamhitha099@gmail.com"
              aria-label="Email Sai Samhitha"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-rust-900/35 text-cream-200 transition-all hover:bg-caramel-400 hover:text-white"
            >
              <Mail size={16} />
            </a>
         <a
  href="https://www.linkedin.com/in/saisamhithamudigonda/"
  target="_blank"
  rel="noreferrer"
  aria-label="Sai Samhitha on LinkedIn"
  className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-rust-900/35 text-cream-200 transition-all hover:bg-caramel-400 hover:text-white"
>
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/SaiSamhitha2907"
              target="_blank"
              rel="noreferrer"
              aria-label="Sai Samhitha on GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-rust-900/35 text-cream-200 transition-all hover:bg-caramel-400 hover:text-cocoa-900"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-rust-600 pt-8 text-center">
          <p className="flex items-center justify-center gap-1.5 text-sm text-cream-200">
            Built with <Heart size={13} className="fill-caramel-300 text-caramel-300" /> by Sai Samhitha
            Mudigonda | {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
