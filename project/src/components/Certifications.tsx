import { Award, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import RotatingText from './RotatingText';

const certs = [
  {
    title: 'Python Programming Certification',
    issuer: 'GUVI',
    description:
      'Completed Python Programming certification covering core programming concepts, data structures, and practical application development.',
    link: 'https://www.guvi.in/verify-certificate?id=30i96jue2F62N90r1D',
    accent: 'text-rust-600 bg-rust-50 border-rust-200',
  },
  {
    title: 'Google Cloud Facilitator Program',
    issuer: 'Google Cloud / Google Skills Boost',
    description:
      'Earned Google Cloud credential through the Facilitator Program, demonstrating proficiency in cloud computing, GCP services, and cloud architecture fundamentals.',
    link: 'https://www.skills.google/public_profiles/4c4fcb57-551b-4022-870a-c31c46042898',
    accent: 'text-caramel-500 bg-caramel-50 border-caramel-200',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="theme-section">
      <div className="theme-container">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <div className="mt-8 flex justify-center text-sm font-semibold text-cream-50 sm:text-base">
            <RotatingText words={['verified learning', 'cloud fundamentals', 'python practice']} />
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {certs.map((cert, index) => (
            <Reveal key={cert.title} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 110}>
              <article className="warm-card card-animate h-full p-6">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg border ${cert.accent}`}>
                <Award size={24} />
              </div>
              <h3 className="mb-1 text-base font-bold text-cocoa-900">{cert.title}</h3>
              <p className="mb-3 text-sm font-semibold text-cocoa-500">{cert.issuer}</p>
              <p className="mb-5 text-sm leading-relaxed text-cocoa-600">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-rust-600 transition-colors hover:text-rust-700"
              >
                View Credential <ExternalLink size={14} />
              </a>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
