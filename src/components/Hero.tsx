'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const TICKER_ITEMS = [
  'Production Designer',
  'Art Director',
  'Emmy Award Winner',
  'NYU Tisch MFA',
  'IATSE Local 829',
  'Filmmaker',
  'Cannes Selection',
  'Sundance Alumni',
  'Berlin IFF',
  'UGC Specialist',
  'Luxury Brand Campaigns',
  'Set Designer',
];

const ticker = [...TICKER_ITEMS, ...TICKER_ITEMS];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y    = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };
  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      ref={ref}
      id="home"
      style={{ position: 'relative', height: '100svh', minHeight: '700px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Background layers */}
      <motion.div style={{ y, position: 'absolute', inset: 0 }}>
        {/* Deep gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 80% at 50% 120%, rgba(201,168,76,0.07) 0%, transparent 60%), #0a0a0a',
        }} />
        {/* Subtle side lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(201,168,76,0.025) 120px, rgba(201,168,76,0.025) 121px)',
        }} />
        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 110% 110% at 50% 50%, transparent 40%, rgba(10,10,10,0.8) 100%)',
        }} />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 10,
          opacity: fade as unknown as number,
        }}
      >
        {/* Award badge */}
        <motion.div variants={fadeIn} style={{ marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            border: '1px solid rgba(201,168,76,0.4)',
            padding: '0.45rem 1.2rem',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontFamily: 'var(--font-inter), sans-serif',
          }}>
            <span style={{ fontSize: '0.75rem' }}>★</span>
            Emmy Award Winner
            <span style={{ color: 'rgba(201,168,76,0.4)' }}>·</span>
            First Egyptian Woman
          </span>
        </motion.div>

        {/* Name */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 0.88,
              letterSpacing: '-0.01em',
              color: '#f5f0e8',
              margin: 0,
            }}
          >
            <span style={{ display: 'block', fontSize: 'clamp(5rem, 16vw, 14rem)' }}>
              Mona
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(5rem, 16vw, 14rem)', color: 'var(--gold)' }}
                  className="shimmer-gold">
              Mekkawi
            </span>
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          style={{
            width: '60px', height: '1px',
            background: 'var(--gold)',
            margin: '2rem auto',
          }}
        />

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.68rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#c8c8c8',
            margin: '0 0 2.5rem',
          }}
        >
          Production Designer&nbsp;·&nbsp;Art Director&nbsp;·&nbsp;Filmmaker
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#portfolio" className="btn-gold" style={{ textDecoration: 'none' }}>
            View Portfolio
          </a>
          <a href="#contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>
            Work With Me
          </a>
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <div style={{
        position: 'relative', zIndex: 10,
        borderTop: '1px solid rgba(42,42,42,0.6)',
        borderBottom: '1px solid rgba(42,42,42,0.6)',
        backgroundColor: 'rgba(17,17,17,0.6)',
        backdropFilter: 'blur(8px)',
        overflow: 'hidden',
        padding: '0.8rem 0',
      }}>
        <div className="marquee-track">
          {ticker.map((item, i) => (
            <span
              key={i}
              style={{
                whiteSpace: 'nowrap',
                padding: '0 2.5rem',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: i % 2 === 0 ? '#c8c8c8' : 'var(--gold)',
                fontFamily: 'var(--font-inter), sans-serif',
              }}
            >
              {item}
              {i % 2 === 0 && (
                <span style={{ marginLeft: '2.5rem', color: 'rgba(201,168,76,0.35)' }}>✦</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '4rem',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(200,200,200,0.4)', writingMode: 'vertical-rl', fontFamily: 'var(--font-inter), sans-serif' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} style={{ color: 'var(--gold)' }} />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div style={{ position: 'absolute', top: '6rem', left: '2rem', zIndex: 10, opacity: 0.3 }}>
        <div style={{ width: '20px', height: '1px', background: 'var(--gold)', marginBottom: '1px' }} />
        <div style={{ width: '1px', height: '20px', background: 'var(--gold)' }} />
      </div>
      <div style={{ position: 'absolute', top: '6rem', right: '2rem', zIndex: 10, opacity: 0.3, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div style={{ width: '20px', height: '1px', background: 'var(--gold)', marginBottom: '1px' }} />
        <div style={{ width: '1px', height: '20px', background: 'var(--gold)', marginLeft: 'auto' }} />
      </div>
    </section>
  );
}
