import { Mail, Linkedin, Github, ArrowDown, Download, Sparkles, CheckCircle2, Code2, CloudCog } from 'lucide-react';
import RotatingText from './RotatingText';

const strengths = ['Cloud-scale interfaces', 'Micro-frontends', 'AI-assisted QA'];
const heroRoles = ['Full-stack development', 'Software Engineer', 'Micro-frontends', 'AI automation', 'Reliable systems'];
const heroStats = [
  { value: 'AWS', label: 'ECS Console' },
  { value: 'MFE', label: 'SPA Architecture' },
  { value: 'AI', label: 'Testing Automation' },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-rust-700 pt-16">
      <div className="hero-glow absolute inset-0" />
      <div className="hero-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(61,13,3,0.58),rgba(127,30,5,0.14)_55%,rgba(255,90,20,0.25))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-rust-300/40" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col-reverse items-center gap-14 md:flex-row md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <p className="hero-enter hero-role-pill mb-4 inline-flex items-center gap-2 rounded-lg border border-cream-100/30 bg-rust-900/25 px-3 py-2 text-sm font-semibold uppercase tracking-widest text-cream-50 shadow-sm backdrop-blur">
              <Sparkles size={15} />
              Full-Stack Engineer at AWS
            </p>

            <h1 className="hero-enter hero-enter-2 mb-5 font-display text-5xl font-extrabold leading-[1.05] text-cream-50 sm:text-6xl lg:text-7xl">
              Sai Samhitha
              <span className="block text-caramel-100">Mudigonda</span>
            </h1>

            <div className="hero-enter hero-enter-2 hero-typewriter-row mb-5 flex flex-col items-center gap-3 text-2xl font-bold text-cream-50 sm:text-3xl lg:text-4xl md:flex-row md:justify-start">
              <span>I build</span>
              <RotatingText
                words={heroRoles}
                mode="typewriter"
                interval={1100}
                typeSpeed={62}
                deleteSpeed={30}
                className="hero-typewriter"
              />
            </div>

            <p className="hero-enter hero-enter-2 mx-auto mb-7 max-w-xl text-lg leading-relaxed text-cream-100 md:mx-0">
              Building polished, reliable product experiences across AWS cloud consoles, distributed services,
              micro-frontend systems, and automation workflows.
            </p>

            <div className="hero-enter hero-enter-3 mb-9 flex flex-wrap justify-center gap-2 md:justify-start">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="hero-strength-chip inline-flex items-center gap-1.5 rounded-lg border border-cream-100/30 bg-rust-900/20 px-3 py-2 text-xs font-semibold text-cream-50 shadow-sm backdrop-blur"
                >
                  <CheckCircle2 size={14} className="text-caramel-100" />
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-enter hero-enter-4 mb-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <button
                onClick={() => scrollTo('contact')}
                className="magnetic-button rounded-lg bg-caramel-400 px-6 py-3 text-sm font-semibold text-cream-50 shadow-soft transition-colors hover:bg-caramel-300"
              >
                Get In Touch
              </button>
              <a
                href="/SaiSamhitha,_Mudigonda.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-cream-100/35 bg-rust-900/20 px-6 py-3 text-sm font-semibold text-cream-50 backdrop-blur transition-colors hover:border-caramel-100 hover:bg-rust-900/30"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>

            <div className="hero-enter hero-enter-4 flex items-center justify-center gap-4 md:justify-start">
              <a
                href="mailto:saisamhitha099@gmail.com"
                aria-label="Email Sai Samhitha"
                className="hero-social-link flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/35 bg-rust-900/20 text-cream-100 backdrop-blur transition-all hover:border-caramel-100 hover:text-white"
              >
                <Mail size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-samhitha-mudigonda"
                target="_blank"
                rel="noreferrer"
                aria-label="Sai Samhitha on LinkedIn"
                className="hero-social-link flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/35 bg-rust-900/20 text-cream-100 backdrop-blur transition-all hover:border-caramel-100 hover:text-white"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://github.com/SaiSamhitha2907"
                target="_blank"
                rel="noreferrer"
                aria-label="Sai Samhitha on GitHub"
                className="hero-social-link flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/35 bg-rust-900/20 text-cream-100 backdrop-blur transition-all hover:border-caramel-100 hover:text-white"
              >
                <Github size={17} />
              </a>
            </div>

            <div className="hero-enter hero-enter-4 mt-8 grid max-w-xl grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div key={stat.value} className="glass-panel hero-stat-card rounded-lg px-3 py-3 text-center md:text-left">
                  <p className="font-display text-2xl font-bold text-cream-50">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-snug text-cream-100">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex-shrink-0 md:w-auto">
            <div className="hero-enter hero-enter-3 hero-portrait relative mx-auto w-64 sm:w-72 lg:w-80">
              <div className="hero-photo-ring absolute -inset-4 z-0 rounded-full border border-caramel-100/50 bg-cream-50/12" />
              <div className="hero-badge hero-badge-left absolute -left-16 top-9 z-20 hidden max-w-[9.5rem] items-center gap-2 rounded-lg border border-cream-100/30 bg-rust-900/55 px-2.5 py-2 text-xs font-bold text-cream-50 shadow-soft backdrop-blur sm:flex float-slow text-left">
                <span className="hero-sticker-icon flex h-7 w-7 items-center justify-center rounded-md bg-caramel-400/90 text-cream-50">
                  <Code2 size={15} />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-cream-100">Frontend</span>
                  React + TS
                </span>
              </div>
              <div className="hero-badge hero-badge-right absolute -right-24 top-1/2 z-20 hidden max-w-[10.5rem] -translate-y-1/2 items-center gap-2 rounded-lg border border-cream-100/30 bg-caramel-400 px-2.5 py-2 text-xs font-bold text-cream-50 shadow-soft sm:flex float-slow float-delay text-left">
                <span className="hero-sticker-icon hero-sticker-icon-dark flex h-7 w-7 items-center justify-center rounded-md bg-rust-900/70 text-caramel-100">
                  <CloudCog size={15} />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-cream-100">Cloud</span>
                  AWS ECS
                </span>
              </div>
              <div className="hero-photo-frame float-slow relative z-10 aspect-square overflow-hidden rounded-full border-4 border-cream-50 shadow-soft ring-1 ring-caramel-100/40">
               <img
  src="/profile.jpeg"
  alt="Sai Samhitha Mudigonda"
  className="hero-photo-img h-full w-full object-cover"
/>
              </div>
              <div className="hero-status-badge absolute -bottom-3 left-1/2 z-20 flex w-max -translate-x-1/2 items-center gap-2 rounded-lg border border-caramel-100/60 bg-rust-900/75 px-4 py-2 text-xs font-bold text-cream-50 shadow-soft backdrop-blur">
                <span className="pulse-dot h-2 w-2 rounded-full bg-caramel-300" />
                AWS Cloud Engineer
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="group flex flex-col items-center gap-2 text-cream-100 transition-colors hover:text-white"
          >
            <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
            <ArrowDown size={18} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
