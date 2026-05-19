import { Code2, Cloud, Users, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import RotatingText from './RotatingText';

const highlights = [
  {
    icon: <Code2 size={22} className="text-rosewood-500" />,
    title: 'Full-Stack Development',
    desc: 'React, Node.js, TypeScript, and Java Spring Boot across polished product surfaces.',
  },
  {
    icon: <Cloud size={22} className="text-caramel-400" />,
    title: 'Cloud & DevOps',
    desc: 'AWS ECS, Lambda, Kubernetes, CloudWatch, and CI/CD systems built for resilient releases.',
  },
  {
    icon: <Users size={22} className="text-sage-500" />,
    title: 'Leadership & Mentorship',
    desc: 'Turning complex requirements into practical roadmaps while supporting junior engineers.',
  },
];

const stats = [
  { value: 'Millions', label: 'of developers supported through cloud console work' },
  { value: 'Bi-weekly', label: 'release cycles strengthened with regression automation' },
  { value: 'Full-stack', label: 'ownership from frontend polish to backend reliability' },
];

export default function About() {
  return (
    <section id="about" className="theme-section">
      <div className="theme-container">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">Elegant Engineering, Built To Scale</h2>
          <div className="mt-8 flex justify-center text-sm font-semibold text-cream-50 sm:text-base">
            <RotatingText words={['cloud-first thinking', 'frontend elegance', 'automation discipline']} />
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal direction="left">
            <div className="about-panel glass-panel rounded-lg p-6 card-animate rotating-border">
              <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-cream-100/25 bg-rust-900/25 px-3 py-2 text-sm font-semibold text-cream-50">
                <Sparkles size={16} className="text-caramel-100" />
                Warm product thinking with cloud-scale discipline
              </div>

              <p className="mb-5 text-base leading-relaxed text-cream-100">
                I am a Full-Stack Engineer currently working at{' '}
                <strong className="text-white">Amazon Web Services (AWS)</strong> in Jersey City, NJ,
                where I build and maintain the AWS ECS Console, a platform used by developers worldwide for
                container orchestration.
              </p>
              <p className="mb-5 text-base leading-relaxed text-cream-100">
                I specialize in <strong className="text-white">micro-frontend SPA architecture</strong>{' '}
                and <strong className="text-white">BFF design patterns</strong>, with a focus on delivering
                calm, high-performance user experiences in distributed cloud environments.
              </p>
              <p className="text-base leading-relaxed text-cream-100">
                I hold a <strong className="text-white">Master of Computer Science</strong> from the
                University of Central Missouri. I am passionate about AI-driven automation, system reliability,
                and helping teams move faster with thoughtful engineering practices.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.value} className="about-stat-card rounded-lg border border-cream-100/25 bg-rust-900/25 p-4 card-animate rotating-border">
                    <p className="font-display text-2xl font-bold text-caramel-100">{stat.value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-cream-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
                {highlights.map((h, index) => (
              <Reveal key={h.title} direction={index % 2 === 0 ? 'right' : 'left'} delay={index * 110}>
                <div className="about-highlight-card warm-card flex items-start gap-4 p-5 card-animate rotating-border">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-cream-100">
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-cocoa-900">{h.title}</h3>
                    <p className="text-sm leading-relaxed text-cocoa-500">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
