import { GraduationCap, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import RotatingText from './RotatingText';

export default function Education() {
  return (
    <section id="education" className="theme-section">
      <div className="theme-container">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <div className="mt-8 flex justify-center text-sm font-semibold text-cream-50 sm:text-base">
            <RotatingText words={['computer science', 'distributed systems', 'cloud foundations']} />
          </div>
        </Reveal>

        <div className="mx-auto max-w-2xl">
          <Reveal direction="right">
            <article className="warm-card card-animate flex flex-col gap-6 p-8 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg border border-caramel-200 bg-caramel-50">
                <GraduationCap size={28} className="text-caramel-500" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-xl font-bold text-cocoa-900">Master of Computer Science</h3>
                <p className="mb-3 text-base font-semibold text-rust-600">University of Central Missouri</p>
                <div className="flex items-center gap-1.5 text-sm text-cocoa-500">
                  <MapPin size={14} />
                  Warrensburg, Missouri
                </div>
                <div className="mt-5 border-t border-cocoa-100 pt-5">
                  <p className="text-sm leading-relaxed text-cocoa-600">
                    Graduate degree in Computer Science with focus on software engineering, distributed systems, and
                    cloud computing, providing the theoretical foundation for applied engineering at scale.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
