'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Production Design',
    subtitle: 'Film · TV · Streaming',
    price: 'Custom Quote',
    desc: 'Full production design services from pre-production through wrap. Script analysis, concept development, set design, art department management, and on-set supervision.',
    includes: [
      'Script breakdown & research',
      'Mood boards & concept decks',
      'Technical drawings & floor plans',
      'Art department coordination',
      'Budget & schedule management',
      'On-set supervision',
    ],
    highlight: false,
  },
  {
    title: 'Brand Campaign Design',
    subtitle: 'Commercial · UGC · Luxury',
    price: 'Starting at $2,500',
    desc: 'Cinematic production design for brand campaigns, UGC, and luxury brand content. Concepts, set builds, prop sourcing, and art direction — all in service of your brand story.',
    includes: [
      'Brand brief analysis',
      'Concept & mood board development',
      'Custom set design & build',
      'Prop sourcing & styling',
      'On-set art direction',
      'Usage rights & deliverables',
    ],
    highlight: true,
  },
  {
    title: 'Creative Consulting',
    subtitle: 'Direction · Strategy · Mentorship',
    price: 'Starting at $350/hr',
    desc: 'Strategic creative direction for projects and teams. Production design reviews, visual concept development, and mentorship for early-career designers and brands.',
    includes: [
      'Project brief review',
      'Visual strategy sessions',
      'Reference & concept review',
      'Production design audits',
      'Team workflow consulting',
      'Mentorship sessions',
    ],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#111111', padding: '8rem 0', borderTop: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
            style={{ marginBottom: '1rem' }}
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 400,
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              color: '#f5f0e8',
              margin: '0 auto 1.25rem',
              maxWidth: '600px',
            }}
          >
            Services &amp; <em style={{ color: 'var(--gold)' }}>Packages</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.9rem',
              color: '#888',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            Every project is unique. These packages are a starting point — reach out to discuss your specific needs.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1px',
          backgroundColor: '#2a2a2a',
          marginBottom: '4rem',
        }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              style={{
                backgroundColor: service.highlight ? '#1a1200' : '#111111',
                padding: '2.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                border: service.highlight ? '1px solid rgba(201,168,76,0.2)' : 'none',
              }}
            >
              {/* Popular badge */}
              {service.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-1px', left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--gold)',
                  color: '#0a0a0a',
                  padding: '0.25rem 1.2rem',
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}>
                  Most Popular
                </div>
              )}

              {/* Category */}
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                margin: service.highlight ? '1.5rem 0 0.5rem' : '0 0 0.5rem',
              }}>
                {service.subtitle}
              </p>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontWeight: 500,
                fontSize: '1.6rem',
                color: '#f5f0e8',
                margin: '0 0 0.5rem',
              }}>
                {service.title}
              </h3>

              {/* Price */}
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.8rem',
                color: '#c8c8c8',
                margin: '0 0 1.25rem',
                fontWeight: 500,
              }}>
                {service.price}
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(201,168,76,0.15)', margin: '0 0 1.5rem' }} />

              {/* Desc */}
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.82rem',
                lineHeight: 1.8,
                color: '#888',
                margin: '0 0 1.75rem',
              }}>
                {service.desc}
              </p>

              {/* Includes */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
                {service.includes.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.78rem',
                      color: '#c8c8c8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                    }}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: '0.6rem', flexShrink: 0 }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={service.highlight ? 'btn-gold' : 'btn-outline-gold'}
                style={{ textDecoration: 'none', textAlign: 'center' }}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.75rem',
            color: '#555',
            textAlign: 'center',
            lineHeight: 1.7,
          }}
        >
          All projects are subject to availability and scope review. IATSE rates apply for union productions.
          <br />International projects welcome — I have experience working across the Middle East, Europe, Asia, and North America.
        </motion.p>
      </div>
    </section>
  );
}
