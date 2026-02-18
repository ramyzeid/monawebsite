'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Portfolio',      href: '#portfolio' },
  { label: 'Process',        href: '#process' },
  { label: 'Awards',         href: '#awards' },
  { label: 'Collaborations', href: '#brands' },
  { label: 'Services',       href: '#services' },
  { label: 'Contact',        href: '#contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111111', borderTop: '1px solid #2a2a2a' }}>

      {/* Top CTA bar */}
      <div style={{
        background: 'linear-gradient(90deg, #1a1200 0%, #201800 50%, #1a1200 100%)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        padding: '3.5rem 2rem',
        textAlign: 'center',
      }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            margin: '0 0 1rem',
          }}
        >
          Ready to Begin?
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#f5f0e8',
            margin: '0 0 2rem',
          }}
        >
          Your next project deserves a world-class set.
        </motion.h3>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="#contact"
          className="btn-gold"
          style={{ textDecoration: 'none' }}
        >
          Start a Conversation
        </motion.a>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem',
        }}>

          {/* Brand column */}
          <div>
            <a href="#" style={{ textDecoration: 'none' }}>
              <div style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '1.5rem',
                fontWeight: 300,
                letterSpacing: '0.25em',
                color: '#f5f0e8',
                marginBottom: '1rem',
              }}>
                MONA <span style={{ color: 'var(--gold)' }}>MEKKAWI</span>
              </div>
            </a>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.78rem',
              lineHeight: 1.8,
              color: '#666',
              margin: '0 0 1.5rem',
              maxWidth: '260px',
            }}>
              Emmy Award-winning Production Designer &amp; Art Director.
              NYU Tisch MFA · IATSE Local 829 · Based in New York.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[
                { href: 'https://www.instagram.com/monamekkawi/', icon: <Instagram size={14} />, label: 'Instagram' },
                { href: 'https://www.imdb.com/name/nm11703843/', icon: <span style={{ fontSize: '0.6rem', fontWeight: 700 }}>IMDb</span>, label: 'IMDb' },
                { href: 'mailto:hello@monamekkawi.com', icon: <Mail size={14} />, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '36px', height: '36px',
                    border: '1px solid #2a2a2a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#666', textDecoration: 'none',
                    transition: 'border-color 0.3s, color 0.3s',
                    fontSize: '0.7rem',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                    (e.currentTarget as HTMLElement).style.color = '#666';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              margin: '0 0 1.5rem',
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="gold-underline"
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.78rem',
                      color: '#666',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c8c8c8')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#666')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              margin: '0 0 1.5rem',
            }}>
              Credentials
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                'Emmy Award Winner (×3)',
                'IATSE Local 829 Member',
                'NYU Tisch School of the Arts, MFA',
                'Egyptian Higher Institute of Cinema, BFA',
                'Cannes · Sundance · Berlin',
                '14+ Years International Experience',
                '200+ Commercial Productions',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.75rem',
                    color: '#555',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: 'rgba(201,168,76,0.4)', fontSize: '0.5rem' }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              margin: '0 0 1.5rem',
            }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', color: '#555', margin: '0 0 0.2rem', letterSpacing: '0.1em' }}>EMAIL</p>
                <a href="mailto:hello@monamekkawi.com" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.8rem', color: '#888', textDecoration: 'none' }}
                   className="gold-underline">
                  hello@monamekkawi.com
                </a>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', color: '#555', margin: '0 0 0.2rem', letterSpacing: '0.1em' }}>LOCATION</p>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.8rem', color: '#888', margin: 0 }}>
                  New York, USA
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', color: '#555', margin: '0 0 0.2rem', letterSpacing: '0.1em' }}>AVAILABILITY</p>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.8rem', color: '#888', margin: 0 }}>
                  Worldwide · Union &amp; Non-Union
                </p>
              </div>
              <a href="#contact" className="btn-outline-gold" style={{ textDecoration: 'none', textAlign: 'center', marginTop: '0.5rem' }}>
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #2a2a2a',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.65rem',
            color: '#444',
            margin: 0,
          }}>
            © {new Date().getFullYear()} Mona Mekkawi. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.6rem',
              color: '#333',
              letterSpacing: '0.1em',
            }}>
              IATSE LOCAL 829 · NYU TISCH · EMMY AWARD WINNER
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
