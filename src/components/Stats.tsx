'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 14, suffix: '+', label: 'Years of Experience', sub: 'Across 4 continents' },
  { value: 200, suffix: '+', label: 'Commercial Productions', sub: 'As Production Designer & Art Director' },
  { value: 3, suffix: '', label: 'Emmy Awards', sub: 'Regional Emmy for Best Historical Documentary' },
  { value: 12, suffix: '+', label: 'Countries', sub: 'International production experience' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref  = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps    = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section style={{ backgroundColor: '#111111', borderTop: '1px solid #2a2a2a', borderBottom: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              style={{
                padding: '3.5rem 2rem',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid #2a2a2a' : 'none',
                position: 'relative',
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 300,
                lineHeight: 1,
                color: 'var(--gold)',
                marginBottom: '0.5rem',
              }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#f5f0e8',
                margin: '0 0 0.4rem',
                fontWeight: 500,
              }}>
                {stat.label}
              </p>

              {/* Sub */}
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.65rem',
                color: '#888',
                margin: 0,
                lineHeight: 1.5,
              }}>
                {stat.sub}
              </p>

              {/* Gold bottom border on hover */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: '30%', right: '30%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                opacity: 0.5,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
