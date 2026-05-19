import { Cloud, Code2, GitBranch, Monitor, Server, Wrench } from 'lucide-react';
import Reveal from './Reveal';
import RotatingText from './RotatingText';

const skillGroups = [
  {
    category: 'Languages',
    icon: <Code2 size={21} />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin', 'SQL', 'HTML5', 'CSS3'],
    accent: 'text-rosewood-500 bg-rosewood-50 border-rosewood-100',
    chip: 'bg-rosewood-50 text-rosewood-600 border-rosewood-100',
  },
  {
    category: 'Frontend',
    icon: <Monitor size={21} />,
    skills: ['React.js', 'Next.js', 'Redux', 'GraphQL', 'tRPC', 'Responsive Design', 'WCAG Accessibility', 'Webpack'],
    accent: 'text-caramel-400 bg-caramel-50 border-caramel-100',
    chip: 'bg-caramel-50 text-caramel-500 border-caramel-100',
  },
  {
    category: 'Backend',
    icon: <Server size={21} />,
    skills: ['Node.js', 'Spring Boot', 'REST APIs', 'GraphQL', 'PostgreSQL', 'DynamoDB', 'API Gateway', 'CloudFormation'],
    accent: 'text-sage-500 bg-sage-50 border-sage-100',
    chip: 'bg-sage-50 text-sage-500 border-sage-100',
  },
  {
    category: 'Architecture',
    icon: <GitBranch size={21} />,
    skills: ['Micro-frontend SPA', 'BFF Pattern', 'Microservices', 'Distributed Systems', 'API Gateway'],
    accent: 'text-cocoa-600 bg-cocoa-50 border-cocoa-100',
    chip: 'bg-cocoa-50 text-cocoa-600 border-cocoa-100',
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud size={21} />,
    skills: ['Amazon ECS', 'AWS Lambda', 'Kubernetes (EKS)', 'Azure', 'GCP', 'Jenkins CI/CD', 'CDK', 'CloudWatch', 'S3'],
    accent: 'text-caramel-500 bg-cream-100 border-caramel-100',
    chip: 'bg-cream-100 text-cocoa-700 border-caramel-100',
  },
  {
    category: 'Testing & Tools',
    icon: <Wrench size={21} />,
    skills: ['Jest', 'Cypress', 'PyTest', 'AI-driven tools', 'Git', 'Agile/Scrum'],
    accent: 'text-rosewood-500 bg-cream-100 border-rosewood-100',
    chip: 'bg-cream-100 text-rosewood-600 border-rosewood-100',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="theme-section">
      <div className="theme-container">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">Technical Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="mt-8 flex justify-center text-sm font-semibold text-cream-50 sm:text-base">
            <RotatingText words={['React ecosystems', 'AWS delivery', 'reliable pipelines']} />
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.category}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={(index % 3) * 90}
            >
              <div className="warm-card skill-card h-full p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className={`skill-icon flex h-11 w-11 items-center justify-center rounded-lg border ${group.accent}`}>
                  {group.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-cocoa-900">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-chip rounded-md border px-2.5 py-1 text-xs font-semibold ${group.chip}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
