'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type Category = 'All' | 'Film' | 'Documentary' | 'Commercial' | 'Events';

const categories: Category[] = ['All', 'Film', 'Documentary', 'Commercial', 'Events'];

interface Project {
  id: number;
  title: string;
  year: string;
  category: Omit<Category, 'All'>;
  desc: string;
  awards?: string[];
  festivals?: string[];
  gradient: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Oversight',
    year: '2020',
    category: 'Documentary',
    desc: 'A landmark historical documentary that earned three Emmy Awards, including Regional Emmy for Best Historical Documentary Film. Directed by Jon Shink & Michael Skinner.',
    awards: ['Regional Emmy — Best Historical Documentary', 'Emmy Award × 3'],
    festivals: ['Regional Emmy Awards'],
    gradient: 'linear-gradient(135deg, #1a0f00 0%, #3d2800 50%, #1a0f00 100%)',
    featured: true,
  },
  {
    id: 2,
    title: 'Marriage: Impossible',
    year: '2018',
    category: 'Film',
    desc: 'Feature film with production design blending contemporary and traditional Middle Eastern aesthetics. A complex, multi-location production with a full art department.',
    gradient: 'linear-gradient(135deg, #060d1a 0%, #0d1f35 50%, #060d1a 100%)',
  },
  {
    id: 3,
    title: 'The Aftermath of the Inauguration of the Public Toilet at Kilometer 375',
    year: '2014',
    category: 'Film',
    desc: 'Graduation thesis short film directed by Omar El-Zohairy. Received nominations and selections at major international festivals.',
    festivals: ['Cannes Film Festival', 'Palm Springs ShortFest', 'Dubai IFF', 'Durban IFF', 'Nashville FF', 'Montpellier FF'],
    awards: ['Best Live Action Short — Palm Springs ShortFest', 'Best Short Film — Mill Valley FF', 'Gold Djed — Luxor EEIFF'],
    gradient: 'linear-gradient(135deg, #0f0f0f 0%, #1a1208 50%, #0f0f0f 100%)',
    featured: true,
  },
  {
    id: 4,
    title: 'Oshtoora Festival',
    year: '2015–2016',
    category: 'Events',
    desc: 'Production Design Director for Egypt\'s Burning Man — the Oshtoora Music & Art Festival — across two seasons. Large-scale experiential environment design for thousands of attendees.',
    gradient: 'linear-gradient(135deg, #120a00 0%, #2a1500 50%, #120a00 100%)',
    featured: true,
  },
  {
    id: 5,
    title: 'Commercial Portfolio',
    year: '2010–Present',
    category: 'Commercial',
    desc: '200+ commercial productions across the Middle East, Turkey, Malaysia, UK, and the USA. Full production design and art direction for international brands and agencies.',
    gradient: 'linear-gradient(135deg, #0a0a12 0%, #12121f 50%, #0a0a12 100%)',
    featured: true,
  },
  {
    id: 6,
    title: 'TV Series & Films — Middle East',
    year: '2010–2019',
    category: 'Film',
    desc: 'Art Department work on numerous TV series and feature films throughout the Middle East. Building a foundation across genres, scales, and production cultures.',
    gradient: 'linear-gradient(135deg, #0a0f06 0%, #121a08 50%, #0a0f06 100%)',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

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
                  background: project.gradient,
                }}
              >
                {/* Background pattern */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,168,76,0.03) 30px, rgba(201,168,76,0.03) 31px)',
                }} />

                {/* Featured badge */}
                {project.featured && (
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem', zIndex: 3,
                    background: 'var(--gold)',
                    color: '#0a0a0a',
                    padding: '0.25rem 0.65rem',
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 600,
                  }}>
                    Featured
                  </div>
                )}

                {/* Category */}
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem', zIndex: 3,
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

                {/* Overlay — always visible base */}
                <div
                  className="portfolio-overlay"
                  style={{
                    position: 'absolute', inset: 0, zIndex: 2,
                    transition: 'opacity 0.4s ease',
                    opacity: hovered === project.id ? 1 : 0.7,
                  }}
                />

                {/* Content */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  zIndex: 3, padding: '1.5rem',
                  transform: hovered === project.id ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'transform 0.4s ease',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontWeight: 500,
                      fontSize: '1.35rem',
                      color: '#f5f0e8',
                      margin: 0,
                      lineHeight: 1.2,
                    }}>
                      {project.title.length > 40 ? project.title.slice(0, 40) + '…' : project.title}
                    </h3>
                    <span style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.65rem',
                      color: 'var(--gold)',
                      letterSpacing: '0.1em',
                      whiteSpace: 'nowrap',
                    }}>
                      {project.year}
                    </span>
                  </div>

                  {/* Description — show on hover */}
                  <motion.p
                    animate={{ opacity: hovered === project.id ? 1 : 0, height: hovered === project.id ? 'auto' : 0 }}
                    transition={{ duration: 0.35 }}
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.75rem',
                      lineHeight: 1.7,
                      color: '#c8c8c8',
                      margin: '0 0 0.75rem',
                      overflow: 'hidden',
                    }}
                  >
                    {project.desc}
                  </motion.p>

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

                {/* External link icon on hover */}
                {hovered === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 3,
                    }}
                  >
                    <ExternalLink size={24} style={{ color: 'rgba(255,255,255,0.3)' }} />
                  </motion.div>
                )}
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
