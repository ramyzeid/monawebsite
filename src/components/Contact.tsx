'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const projectTypes = [
  'Feature Film', 'Short Film', 'Documentary', 'TV Series', 'Streaming',
  'Commercial', 'Brand Campaign', 'UGC Project', 'Luxury Brand', 'Events & Experiential',
  'Creative Consulting', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with a form service (e.g. Formspree, Resend, Sendgrid)
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#161616',
    border: '1px solid #2a2a2a',
    color: '#f5f0e8',
    padding: '0.9rem 1rem',
    fontSize: '0.85rem',
    fontFamily: 'var(--font-inter), sans-serif',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{ backgroundColor: '#0a0a0a', padding: '8rem 0', borderTop: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'start' }}>

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="section-label" style={{ marginBottom: '1rem' }}>Get in Touch</p>
            <h2 style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              color: '#f5f0e8',
              margin: '0 0 1.5rem',
              lineHeight: 1.2,
            }}>
              Let&apos;s Create<br />
              <span style={{ color: 'var(--gold)' }}>Something Extraordinary.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              color: '#888',
              margin: '0 0 3rem',
            }}>
              Whether you&apos;re working on a film, building a brand campaign, or need an immersive experience designed —
              I&apos;d love to hear about your project. Based in New York, available worldwide.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '36px', height: '36px', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                  <Mail size={14} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 0.1rem' }}>Email</p>
                  <a href="mailto:hello@monamekkawi.com" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', color: '#c8c8c8', textDecoration: 'none' }}
                     className="gold-underline">
                    hello@monamekkawi.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '36px', height: '36px', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                  <MapPin size={14} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 0.1rem' }}>Based in</p>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', color: '#c8c8c8', margin: 0 }}>
                    New York, USA · Available Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Follow the Work</p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { href: 'https://www.instagram.com/monamekkawi/', icon: <Instagram size={16} />, label: 'Instagram' },
                  { href: 'https://www.imdb.com/name/nm11703843/', icon: <span style={{ fontSize: '0.65rem', fontWeight: 700 }}>IMDb</span>, label: 'IMDb' },
                  { href: 'mailto:hello@monamekkawi.com', icon: <Mail size={16} />, label: 'Email' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: '44px', height: '44px',
                      border: '1px solid #2a2a2a',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#888',
                      textDecoration: 'none',
                      transition: 'border-color 0.3s, color 0.3s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                      (e.currentTarget as HTMLElement).style.color = '#888';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  border: '1px solid rgba(201,168,76,0.3)',
                  padding: '4rem 3rem',
                  textAlign: 'center',
                  background: 'rgba(201,168,76,0.03)',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✦</div>
                <h3 style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '2rem',
                  color: '#f5f0e8',
                  margin: '0 0 1rem',
                  fontWeight: 400,
                }}>
                  Message Received
                </h3>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', color: '#888', lineHeight: 1.8 }}>
                  Thank you for reaching out. I&apos;ll review your project details and get back to you within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.5rem' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.5rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@studio.com"
                      required
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.5rem' }}>
                    Project Type
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                  >
                    <option value="" disabled>Select a project type</option>
                    {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.5rem' }}>
                    Tell Me About Your Project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your vision, timeline, budget range, and any other details that would help me understand your project..."
                    required
                    rows={6}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-gold"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '0.75rem', cursor: 'pointer', border: 'none', width: '100%',
                  }}
                >
                  <Send size={14} />
                  Send Your Project Brief
                </button>

                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.65rem', color: '#555', textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
                  I typically respond within 24–48 hours. Your information is kept private and never shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
