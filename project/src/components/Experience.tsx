import { MapPin, Calendar } from 'lucide-react';
import Reveal from './Reveal';
import RotatingText from './RotatingText';

type LogoName = 'aws' | 'cognizant';

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  logo: LogoName;
  impact: string;
  accent: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: 'Amazon Web Services (AWS)',
    role: 'Software Development Engineer',
    location: 'Jersey City, NJ',
    period: 'April 2025 - Present',
    logo: 'aws',
    impact: 'Cloud console engineering for high-scale container orchestration experiences.',
    accent: 'bg-caramel-50 text-rust-600 border-caramel-200',
    points: [
      'Managed development and maintenance of the AWS ECS Console using React, TypeScript, and Node.js for large-scale container orchestration for millions of users.',
      'Architected modular micro-frontend components and SPA structures enabling the Experience Development Team to deliver independent features without disrupting the core system.',
      'Implemented BFF design patterns as a translation layer between complex frontend requirements and distributed backend microservices.',
      'Resolved critical root causes within distributed service failures and API defects through deep-dive analysis, improving console uptime and reliability.',
      'Optimized PostgreSQL query performance and API Gateway configurations to reduce execution latency for container management tasks.',
      'Created a comprehensive regression testing framework utilizing Python and AI-driven scripts to automate manual QA and accelerate bi-weekly release cycles.',
      'Refined CI/CD infrastructure and Jenkins pipeline configurations to increase deployment frequency and reduce rollback time.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions (CTS)',
    role: 'Full Stack Developer Intern',
    location: 'Hyderabad, India',
    period: 'February 2022 - July 2022',
    logo: 'cognizant',
    impact: 'Enterprise frontend delivery with reusable components and reliable integrations.',
    accent: 'bg-rust-50 text-rust-700 border-rust-200',
    points: [
      'Constructed responsive web interfaces and enterprise application modules using HTML, CSS, and JavaScript ensuring consistent performance across mobile and desktop devices.',
      'Developed reusable and modular UI components following micro-frontend design principles to improve code maintainability and visual consistency.',
      'Integrated frontend modules with Node.js and Java backends enabling dynamic data rendering, secure form submissions, and real-time state updates.',
      'Debugged and fixed production frontend defects involving DOM rendering issues, asynchronous API call timing, and cross-browser compatibility.',
      'Collaborated with QA engineers and backend developers in an Agile environment to deliver feature updates aligned with the project roadmap.',
      'Provided technical support and documentation for newly developed features to assist team members with integration.',
    ],
  },
];

function AwsLogo() {
  return (
    <svg viewBox="0 0 150 82" role="img" aria-label="AWS logo" className="h-full w-full">
      <text
        x="20"
        y="46"
        fill="#252f3e"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="42"
        fontWeight="900"
      >
        aws
      </text>
      <path
        d="M29 58c21 13 51 13 76-1"
        fill="none"
        stroke="#ff9900"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M103 54l16 2-11 11" fill="none" stroke="#ff9900" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CognizantLogo() {
  return (
    <svg viewBox="0 0 210 58" role="img" aria-label="Cognizant logo" className="h-full w-full">
      <text
        x="6"
        y="38"
        fill="#1a4ca1"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="34"
        fontWeight="700"
      >
        cognizant
      </text>
    </svg>
  );
}

function CompanyLogo({ logo }: { logo: LogoName }) {
  return logo === 'aws' ? <AwsLogo /> : <CognizantLogo />;
}

export default function Experience() {
  return (
    <section id="experience" className="theme-section">
      <div className="theme-container">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">Career</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="mt-8 flex justify-center text-sm font-semibold text-cream-50 sm:text-base">
            <RotatingText words={['AWS impact', 'Cognizant foundation', 'full-stack growth']} />
          </div>
        </Reveal>

        <div className="relative">
          <div className="experience-line absolute bottom-0 left-14 top-0 hidden w-px bg-gradient-to-b from-caramel-200 via-rosewood-100 to-sage-200 md:block" />

          <div className="flex flex-col gap-9">
            {experiences.map((exp, index) => (
              <Reveal
                key={exp.company}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 120}
                className="flex flex-col gap-6 md:flex-row md:gap-10"
              >
                <div className="hidden w-28 flex-shrink-0 justify-center md:flex">
                  <div className="logo-card experience-logo z-10 flex h-20 w-28 items-center justify-center rounded-lg border border-cocoa-100 bg-white p-3 shadow-sm">
                    <CompanyLogo logo={exp.logo} />
                  </div>
                </div>

                <article className="warm-card experience-card flex-1 overflow-hidden">
                  <div className="border-b border-cocoa-100 bg-cream-100/70 p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="logo-card experience-logo flex h-16 w-28 flex-shrink-0 items-center justify-center rounded-lg border border-cocoa-100 bg-white p-2 shadow-sm md:hidden">
                          <CompanyLogo logo={exp.logo} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-cocoa-900">{exp.company}</h3>
                          <p className="mt-1 text-sm font-semibold text-rosewood-500">{exp.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 text-xs font-medium text-cocoa-500 sm:items-end">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className={`experience-impact mt-5 inline-flex rounded-lg border px-3 py-2 text-sm font-semibold ${exp.accent}`}>
                      {exp.impact}
                    </p>
                  </div>

                  <ul className="space-y-3 p-6">
                    {exp.points.map((p) => (
                      <li key={p} className="experience-point flex gap-3 text-sm leading-relaxed text-cocoa-600">
                        <span className="experience-dot mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rosewood-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
