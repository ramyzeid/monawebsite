'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects as allProjects } from '@/data/projects';
import type { Category } from '@/data/projects';

type FilterCategory = 'All' | Category;

const categories: FilterCategory[] = ['All', 'Narrative', 'Documentary', 'Commercial', 'Events', 'Music Video'];

export default function Portfolio() {
  const [active, setActive] = useState<FilterCategory>('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active);

  return (
    <section id="portfolio" style={{ backgroundColor: '#0a0a0a', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label"
              style={{ marginBottom: '1rem' }}
            >
              Selected Works
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
                margin: 0,
              }}
            >
              Portfolio
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  background: active === cat ? 'var(--gold)' : 'transparent',
                  color: active === cat ? '#0a0a0a' : '#888',
                  border: active === cat ? '1px solid var(--gold)' : '1px solid #2a2a2a',
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-inter), sans-serif',
                  transition: 'all 0.3s ease',
                  fontWeight: active === cat ? 600 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1px',
            backgroundColor: '#1e1e1e',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45 }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#111',
                }}
              >
                {/* Real photo or fallback pattern */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                      transform: hovered === project.id ? 'scale(1.06)' : 'scale(1)',
                    }}
                  />
                ) : (
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,168,76,0.03) 30px, rgba(201,168,76,0.03) 31px)',
                  }} />
                )}

                {/* Internal link overlay */}
                <a
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.title}`}
                  style={{ position: 'absolute', inset: 0, zIndex: 4 }}
                />

                {/* Category */}
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem', zIndex: 3, pointerEvents: 'none',
                  border: '1px solid rgba(201,168,76,0.35)',
                  color: 'var(--gold)',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-inter), sans-serif',
                }}>
                  {project.category}
                </div>

                {/* Overlay */}
                <div
                  style={{
                    position: 'absolute', inset: 0, zIndex: 2,
                    transition: 'opacity 0.4s ease',
                    opacity: hovered === project.id ? 1 : 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                  }}
                />

                {/* Content */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  zIndex: 3, padding: '1.5rem',
                  pointerEvents: 'none',
                  transform: hovered === project.id ? 'translateY(0)' : 'translateY(8px)',
                  opacity: hovered === project.id ? 1 : 0,
                  transition: 'transform 0.4s ease, opacity 0.4s ease',
                }}>
                  <div style={{ marginBottom: '0.25rem' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontWeight: 500,
                      fontSize: '1.35rem',
                      color: '#f5f0e8',
                      margin: 0,
                      lineHeight: 1.2,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {project.title}
                    </h3>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.7)',
                    margin: '0 0 0.5rem',
                  }}>
                    {project.role}
                  </p>

                  {/* Awards */}
                  {project.awards && hovered === project.id && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.awards.slice(0, 2).map((award) => (
                        <span key={award} style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.1em',
                          color: 'var(--gold)',
                          fontFamily: 'var(--font-inter), sans-serif',
                          background: 'rgba(201,168,76,0.1)',
                          padding: '0.2rem 0.5rem',
                          border: '1px solid rgba(201,168,76,0.25)',
                        }}>
                          ★ {award}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3.5rem' }}
        >
          <a href="#contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
