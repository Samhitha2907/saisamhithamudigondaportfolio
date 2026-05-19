import { Activity, Bot, Cloud, GitBranch, MonitorCheck, PanelsTopLeft } from 'lucide-react';
import Reveal from './Reveal';
import RotatingText from './RotatingText';

const projects = [
  {
    title: 'AWS ECS Console Enhancement',
    category: 'Cloud / Full-Stack',
    description:
      'Contributed to the AWS ECS Console, a web interface enabling developers to manage containerized workloads. Built modular micro-frontend components using React and TypeScript, improved PostgreSQL query performance, and implemented BFF patterns to bridge frontend and distributed microservices.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Micro-frontend', 'BFF', 'AWS ECS'],
    accent: 'border-caramel-200 bg-caramel-50 text-caramel-500',
    icon: <Cloud size={20} />,
  },
  {
    title: 'AI-Driven Regression Testing Framework',
    category: 'Automation / QA',
    description:
      'Designed and built a regression testing framework using Python and AI-driven scripts to automate manual QA efforts at AWS. The system accelerated bi-weekly release cycles and increased deployment confidence across the ECS team.',
    tags: ['Python', 'AI Automation', 'PyTest', 'CI/CD', 'Jenkins', 'AWS'],
    accent: 'border-rosewood-200 bg-rosewood-50 text-rosewood-500',
    icon: <Bot size={20} />,
  },
  {
    title: 'CI/CD Pipeline Optimization',
    category: 'DevOps / Infrastructure',
    description:
      'Refined CI/CD infrastructure and Jenkins pipeline configurations at AWS to increase deployment frequency while reducing rollback time during production incidents. Implemented CloudWatch monitoring and alerting to improve observability.',
    tags: ['Jenkins', 'CI/CD', 'CloudWatch', 'AWS CDK', 'Kubernetes (EKS)', 'CloudFormation'],
    accent: 'border-sage-200 bg-sage-50 text-sage-500',
    icon: <GitBranch size={20} />,
  },
  {
    title: 'Enterprise Full-Stack Web Application',
    category: 'Full-Stack / Frontend',
    description:
      'During my internship at Cognizant, developed responsive enterprise web application modules using HTML, CSS, JavaScript, and Node.js with Java backends. Built reusable UI components and integrated dynamic data rendering with secure form handling.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Java', 'Spring Boot', 'REST APIs'],
    accent: 'border-cocoa-200 bg-cocoa-50 text-cocoa-600',
    icon: <PanelsTopLeft size={20} />,
  },
  {
    title: 'Distributed Service Monitoring & Reliability',
    category: 'Cloud / Observability',
    description:
      'Conducted root cause analysis on distributed service failures and API defects in the AWS ECS platform. Implemented CloudWatch monitoring, resolved API Gateway bottlenecks, and improved console uptime and reliability metrics.',
    tags: ['AWS CloudWatch', 'API Gateway', 'Distributed Systems', 'Observability', 'On-Call'],
    accent: 'border-rosewood-200 bg-rosewood-50 text-rosewood-500',
    icon: <Activity size={20} />,
  },
  {
    title: 'Micro-frontend SPA Architecture',
    category: 'Architecture / Frontend',
    description:
      'Architected and implemented modular micro-frontend SPA structures that enabled independent feature delivery by multiple teams without disrupting core systems. Applied BFF design patterns to decouple frontend requirements from backend microservices.',
    tags: ['Micro-frontend', 'React', 'Next.js', 'TypeScript', 'BFF', 'SPA', 'GraphQL'],
    accent: 'border-caramel-200 bg-caramel-50 text-caramel-500',
    icon: <MonitorCheck size={20} />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="theme-section">
      <div className="theme-container">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">Work</p>
          <h2 className="section-title">Projects & Contributions</h2>
          <div className="mt-8 flex justify-center text-sm font-semibold text-cream-50 sm:text-base">
            <RotatingText words={['console enhancements', 'testing automation', 'cloud reliability']} />
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream-100">
            A curated set of engineering work across cloud consoles, automation, infrastructure, and frontend
            architecture.
          </p>
        </Reveal>

        <div className="project-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <Reveal key={p.title} direction={index % 2 === 0 ? 'left' : 'right'} delay={(index % 3) * 90}>
              <article className="warm-card project-card rotating-border group flex h-full flex-col p-6 card-animate">
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="mb-5 flex items-start justify-between gap-4 pr-12">
                  <div className={`project-icon flex h-12 w-12 items-center justify-center rounded-lg border ${p.accent}`} aria-hidden="true">
                    {p.icon}
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className={`rounded-lg border px-2.5 py-1 text-xs font-bold ${p.accent}`}>
                    {p.category}
                  </span>
                  <span className="project-pulse-line h-px flex-1 bg-cocoa-100" />
                </div>
                <h3 className="mb-3 pr-12 text-base font-bold leading-snug text-cocoa-900 transition-colors group-hover:text-rust-700">
                  {p.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-cocoa-500">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="project-tag rounded-md bg-cream-100 px-2 py-1 text-xs font-medium text-cocoa-500 ring-1 ring-cocoa-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
