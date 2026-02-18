'use client';

import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const skills = [
  'Production Design', 'Art Direction', 'Set Design', 'Mood Boarding',
  'Technical Drawing', 'Budget Management', 'Virtual Production',
  'Cinematography', 'Game Design', 'Film Aesthetics', 'Costume Design',
  'UGC Direction', 'Brand Campaigns', 'Festival Films',
];

const education = [
  {
    school: 'New York University — Tisch School of the Arts',
    degree: 'MFA, Design for Stage and Film',
    year: '2023',
    note: 'Also studied: Cinematography, Virtual Production, Game Design, Film Aesthetics & Editing',
  },
  {
    school: 'Egyptian Higher Institute of Cinema — Academy of Arts',
    degree: 'BFA, Production Design & Costume Design',
    year: '2014',
    note: 'Cairo, Egypt',
  },
];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#0a0a0a', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label"
          style={{ marginBottom: '1rem' }}
        >
          About
        </motion.p>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>

          {/* Left — Image + accreditations */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
          >
            {/* Portrait placeholder */}
            <div
              className="img-placeholder gold-glow"
              style={{
                aspectRatio: '3/4',
                maxHeight: '560px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Gold corner frames */}
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
                <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
                <div style={{ width: '1px', height: '24px', background: 'var(--gold)' }} />
              </div>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
                <div style={{ width: '1px', height: '24px', background: 'var(--gold)' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ width: '1px', height: '24px', background: 'var(--gold)' }} />
                <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <div style={{ width: '1px', height: '24px', background: 'var(--gold)', marginLeft: 'auto' }} />
                <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
              </div>

              {/* Placeholder text */}
              <div style={{
                position: 'absolute', inset: 0, zIndex: 1,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '0.75rem',
              }}>
                <span style={{ fontSize: '2rem', opacity: 0.15 }}>◈</span>
                <span style={{
                  fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.3)', fontFamily: 'var(--font-inter), sans-serif',
                }}>
                  Portrait Photo
                </span>
              </div>
            </div>

            {/* Accreditation badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
              {['IATSE Local 829', 'NYU Tisch MFA', 'Emmy Winner', '14+ Years'].map((badge) => (
                <span
                  key={badge}
                  style={{
                    border: '1px solid rgba(201,168,76,0.3)',
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-inter), sans-serif',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                lineHeight: 1.15,
                color: '#f5f0e8',
                margin: '0 0 2rem',
              }}
            >
              An Egyptian Voice<br />
              <span style={{ color: 'var(--gold)' }}>in Global Cinema.</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}
            >
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: '#c8c8c8', margin: 0 }}>
                I am Mona Mekkawi — an international Production Designer and Art Director based in New York,
                with over 14 years of experience across the Middle East, Turkey, Malaysia, the UK, and the United States.
                I started my career at 17, becoming one of the youngest production designers in Egypt.
              </p>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: '#c8c8c8', margin: 0 }}>
                My work has screened at <span style={{ color: '#f5f0e8' }}>Cannes, Sundance, and the Berlin International Film Festival</span>,
                and the documentary <em>Oversight</em>, which I designed, earned three Emmy Awards — making me the
                <span style={{ color: 'var(--gold)' }}> first Egyptian woman to win an Emmy</span>.
              </p>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: '#c8c8c8', margin: 0 }}>
                I have designed over 200 commercial productions, served as a proud member of IATSE Local 829,
                and designed immersive experiences including Egypt&apos;s Burning Man equivalent — the Oshtoora Music &amp;
                Art Festival — for two seasons. My craft is storytelling through space, texture, and light.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="section-label" style={{ marginBottom: '1.25rem' }}>Education</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    style={{
                      borderLeft: '1px solid rgba(201,168,76,0.35)',
                      paddingLeft: '1.25rem',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.05em', margin: '0 0 0.2rem', fontWeight: 500 }}>
                      {edu.year} · {edu.degree}
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', color: '#f5f0e8', margin: '0 0 0.2rem' }}>
                      {edu.school}
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.75rem', color: '#888', margin: 0 }}>
                      {edu.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ marginTop: '2.5rem' }}
            >
              <p className="section-label" style={{ marginBottom: '1rem' }}>Expertise</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      backgroundColor: '#161616',
                      border: '1px solid #2a2a2a',
                      padding: '0.35rem 0.8rem',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      color: '#c8c8c8',
                      fontFamily: 'var(--font-inter), sans-serif',
                      transition: 'border-color 0.3s, color 0.3s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                      (e.currentTarget as HTMLElement).style.color = '#c8c8c8';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
