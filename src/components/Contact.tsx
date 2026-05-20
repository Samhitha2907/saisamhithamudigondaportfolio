import { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';
import RotatingText from './RotatingText';

const contactMethods = [
  {
    label: 'Email',
    value: 'saisamhitha099@gmail.com',
    href: 'mailto:saisamhitha099@gmail.com',
    icon: <Mail size={20} />,
  },
  {
    label: 'Phone',
    value: '+1 913-956-9619',
    href: 'tel:+19139569619',
    icon: <Phone size={20} />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sai-samhitha-mudigonda',
    href: 'https://www.linkedin.com/in/sai-samhitha-mudigonda',
    icon: <Linkedin size={20} />,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="theme-section">
      <div className="theme-container">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="mt-8 flex justify-center text-sm font-semibold text-cream-50 sm:text-base">
            <RotatingText words={['new roles', 'collaborations', 'engineering conversations']} />
          </div>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream-100">
            Open to new opportunities, collaborations, and thoughtful engineering conversations.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-5">
            {contactMethods.map((method, index) => (
              <Reveal key={method.label} direction="left" delay={index * 100}>
                <a
                  href={method.href}
                  target={method.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={method.label === 'LinkedIn' ? 'noreferrer' : undefined}
                  className="warm-card card-animate flex items-center gap-4 p-5"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-rust-200 bg-rust-50 text-rust-600">
                    {method.icon}
                  </span>
                  <span>
                    <span className="mb-0.5 block text-xs font-semibold uppercase tracking-wider text-cocoa-400">
                      {method.label}
                    </span>
                    <span className="break-all text-sm font-semibold text-cocoa-900">{method.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal direction="right">
            <form onSubmit={submit} className="warm-card card-animate flex flex-col gap-4 p-6">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 py-8" aria-live="polite">
                  <CheckCircle size={42} className="text-sage-500" />
                  <p className="text-lg font-bold text-cocoa-900">Message Sent!</p>
                  <p className="text-center text-sm text-cocoa-500">Thanks for reaching out. I will get back to you soon.</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 text-sm font-semibold text-rust-600 hover:text-rust-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa-500">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-cocoa-100 bg-cream-100 px-4 py-2.5 text-sm text-cocoa-900 placeholder-cocoa-300 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-rust-300"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa-500">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-cocoa-100 bg-cream-100 px-4 py-2.5 text-sm text-cocoa-900 placeholder-cocoa-300 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-rust-300"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa-500">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      required
                      rows={4}
                      placeholder="Your message..."
                      className="w-full resize-none rounded-lg border border-cocoa-100 bg-cream-100 px-4 py-2.5 text-sm text-cocoa-900 placeholder-cocoa-300 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-rust-300"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="magnetic-button flex items-center justify-center gap-2 rounded-lg bg-rust-700 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-rust-600 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="h-4 w-4 rounded-full border-2 border-cream-50 border-t-transparent animate-spin" />
                    ) : (
                      <Send size={15} />
                    )}
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
