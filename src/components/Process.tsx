'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: '01',
    title:  'Script Analysis\n& Research',
    desc:   'Deep dive into the script, themes, and world. Historical research, location scouting, reference gathering, and understanding the director\'s vision. Every design decision starts here.',
    icon:   '◎',
  },
  {
    number: '02',
    title:  'Concept & Mood\nBoarding',
    desc:   'Translating narrative into visual language. I build comprehensive mood boards, color palettes, and concept decks that define the aesthetic universe of the project.',
    icon:   '◈',
  },
  {
    number: '03',
    title:  'Technical Drawing\n& Sketching',
    desc:   'Hand-drawn and digital floor plans, elevations, and sketches. Precise technical documentation that bridges the gap between creative vision and practical construction.',
    icon:   '◇',
  },
  {
    number: '04',
    title:  'Budget & Schedule\nManagement',
    desc:   'Detailed budgeting, sourcing, and scheduling. Managing vendors, rentals, fabrication, and set dressing — ensuring every dollar serves the story.',
    icon:   '◆',
  },
  {
    number: '05',
    title:  'Set Construction\n& Dressing',
    desc:   'Overseeing art department teams, construction crews, prop masters, and set decorators. Bringing every detail to life — from architecture to the smallest prop.',
    icon:   '◉',
  },
  {
    number: '06',
    title:  'On-Set Collaboration\n& Wrap',
    desc:   'Active presence on set, collaborating with the Director, DP, and all departments. Continuous adaptation until picture wrap — then archiving and completing the design record.',
    icon:   '✦',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section id="process" ref={sectionRef} style={{ backgroundColor: '#0a0a0a', padding: '8rem 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label"
            style={{ marginBottom: '1rem' }}
          >
            How I Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 400,
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              color: '#f5f0e8',
              margin: 0,
            }}
          >
            The Production Design<br />
            <em style={{ color: 'var(--gold)' }}>Process</em>
          </motion.h2>
        </div>

        {/* Animated progress line */}
        <div style={{ position: 'relative', marginBottom: '4rem', height: '1px', backgroundColor: '#2a2a2a' }}>
          <motion.div
            style={{
              position: 'absolute', top: 0, left: 0,
              height: '100%',
              width: lineWidth,
              background: 'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.3))',
            }}
          />
        </div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '0',
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: 'easeOut' as const }}
              style={{
                padding: '2.5rem 2rem',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid #1e1e1e' : 'none',
                borderBottom: i < 3 ? '1px solid #1e1e1e' : 'none',
                position: 'relative',
                cursor: 'default',
                transition: 'background 0.3s ease',
              }}
              onHoverStart={e => {
                (e.target as HTMLElement).closest('[data-step]')!;
              }}
              whileHover={{ backgroundColor: 'rgba(22,22,22,0.8)' }}
              data-step={step.number}
            >
              {/* Icon + Number */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: 'rgba(201,168,76,0.15)',
                  fontWeight: 300,
                }}>
                  {step.number}
                </span>
                <span style={{ fontSize: '1.1rem', color: 'var(--gold)', opacity: 0.7 }}>
                  {step.icon}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontWeight: 500,
                fontSize: '1.4rem',
                lineHeight: 1.25,
                color: '#f5f0e8',
                margin: '0 0 1rem',
                whiteSpace: 'pre-line',
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.82rem',
                lineHeight: 1.8,
                color: '#888',
                margin: 0,
              }}>
                {step.desc}
              </p>

              {/* Gold corner accent */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                width: '20px',
                height: '20px',
                borderBottom: '1px solid rgba(201,168,76,0.2)',
                borderRight: '1px solid rgba(201,168,76,0.2)',
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
