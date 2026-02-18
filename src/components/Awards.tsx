'use client';

import { motion } from 'framer-motion';

const emmyAwards = [
  { title: 'Regional Emmy', sub: 'Best Historical Documentary Film', film: 'Oversight (2020)' },
  { title: 'Emmy Award', sub: 'Outstanding Documentary', film: 'Oversight (2020)' },
  { title: 'Emmy Award', sub: 'Historical Programming', film: 'Oversight (2020)' },
];

const festivalCredits = [
  { name: 'Cannes Film Festival',              role: 'Official Selection' },
  { name: 'Sundance Film Festival',            role: 'Official Selection' },
  { name: 'Berlin International Film Festival',role: 'Official Selection' },
  { name: 'Palm Springs ShortFest',            role: 'Best Live Action Short Over 15 Min' },
  { name: 'Mill Valley Film Festival',         role: 'Best Short Film' },
  { name: 'Dubai International Film Festival', role: 'Official Selection' },
  { name: 'Durban International Film Festival',role: 'Official Selection' },
  { name: 'Nashville Film Festival',           role: 'Official Selection' },
  { name: 'Montpellier Film Festival',         role: 'Official Selection' },
  { name: 'Luxor Egyptian & European FF',      role: 'The Gold Djed Award' },
];

export default function Awards() {
  return (
    <section id="awards" style={{ backgroundColor: '#111111', padding: '8rem 0', borderTop: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-label"
          style={{ marginBottom: '1rem' }}
        >
          Recognition
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
            margin: '0 0 4rem',
          }}
        >
          Awards &amp; <em style={{ color: 'var(--gold)' }}>Festivals</em>
        </motion.h2>

        {/* Emmy spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            background: 'linear-gradient(135deg, #1a1200 0%, #201800 40%, #0f0c00 100%)',
            border: '1px solid rgba(201,168,76,0.25)',
            padding: '3.5rem',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="gold-glow"
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            top: '-30%', left: '-10%',
            width: '60%', height: '160%',
            background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3rem', alignItems: 'center', position: 'relative' }}>

            {/* Trophy icon */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '100px', height: '100px',
                border: '1px solid rgba(201,168,76,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.5rem',
                marginBottom: '0.75rem',
                background: 'rgba(201,168,76,0.05)',
              }}>
                🏆
              </div>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                margin: 0,
              }}>
                Emmy Award
              </p>
            </div>

            {/* Text */}
            <div>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                margin: '0 0 0.75rem',
              }}>
                Historic Achievement
              </p>
              <h3 style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontWeight: 400,
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: '#f5f0e8',
                margin: '0 0 0.75rem',
                lineHeight: 1.3,
              }}>
                First Egyptian Woman to Win an Emmy Award
              </h3>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.85rem',
                color: '#888',
                margin: '0 0 2rem',
                lineHeight: 1.7,
              }}>
                The documentary <em style={{ color: '#c8c8c8' }}>Oversight</em>, directed by Jon Shink &amp; Michael Skinner,
                earned three Emmy Awards — with Mona Mekkawi as Production Designer, cementing her place
                in history as a pioneering force in international cinema.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {emmyAwards.map((award) => (
                  <div
                    key={award.title + award.sub}
                    style={{
                      border: '1px solid rgba(201,168,76,0.2)',
                      padding: '0.75rem 1.25rem',
                      background: 'rgba(201,168,76,0.04)',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.7rem', color: 'var(--gold)', margin: '0 0 0.2rem', fontWeight: 600 }}>
                      {award.title}
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.65rem', color: '#c8c8c8', margin: '0 0 0.1rem' }}>
                      {award.sub}
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', color: '#666', margin: 0 }}>
                      {award.film}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Festival grid */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label"
          style={{ marginBottom: '1.5rem' }}
        >
          Film Festival Selections &amp; Awards
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1px',
          backgroundColor: '#2a2a2a',
        }}>
          {festivalCredits.map((fest, i) => (
            <motion.div
              key={fest.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              style={{
                backgroundColor: '#111111',
                padding: '1.5rem',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#161616')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#111111')}
            >
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.78rem',
                color: '#f5f0e8',
                margin: '0 0 0.3rem',
                fontWeight: 500,
              }}>
                {fest.name}
              </p>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.65rem',
                color: 'var(--gold)',
                margin: 0,
                letterSpacing: '0.05em',
              }}>
                {fest.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
