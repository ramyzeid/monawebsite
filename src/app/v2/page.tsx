'use client';

import { useState } from 'react';
import { projects, CATEGORY_COLORS, ALL_CATEGORIES } from '@/data/projects';
import type { Category } from '@/data/projects';

export default function V2() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ background: '#f7f5f2', minHeight: '100vh', fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}>

      {/* ── Navigation ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(247,245,242,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}>
        <div style={{
          maxWidth: '1600px', margin: '0 auto',
          padding: '0 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '58px',
        }}>
          {/* Name + tagline */}
          <a href="/v2" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.24em', color: '#111', textTransform: 'uppercase', fontWeight: 500 }}>
              Mona Mekkawi
            </div>
            <div style={{ fontSize: '0.52rem', letterSpacing: '0.18em', color: '#999', textTransform: 'uppercase', marginTop: '2px' }}>
              Production Design / Art Direction
            </div>
          </a>

          {/* Category filters + Contact */}
          <nav style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            {(['All', ...ALL_CATEGORIES] as (Category | 'All')[]).map(cat => {
              const isActive = activeFilter === cat;
              const color = cat !== 'All' ? CATEGORY_COLORS[cat as Category].text : '#111';
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    background: isActive ? (cat === 'All' ? '#111' : CATEGORY_COLORS[cat as Category].bg) : 'transparent',
                    color: isActive ? (cat === 'All' ? '#f7f5f2' : color) : '#888',
                    border: isActive ? `1px solid ${cat === 'All' ? '#111' : CATEGORY_COLORS[cat as Category].border}` : '1px solid transparent',
                    padding: '0.35rem 0.85rem',
                    fontSize: '0.55rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s',
                    borderRadius: '0',
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#333'; e.currentTarget.style.borderColor = '#ddd'; }}}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = 'transparent'; }}}
                >
                  {cat}
                </button>
              );
            })}
            <a href="/#contact" style={{
              marginLeft: '1rem',
              fontSize: '0.55rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#111',
              textDecoration: 'none',
              border: '1px solid #111',
              padding: '0.35rem 0.85rem',
              transition: 'background 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#f7f5f2'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111'; }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ── Color Legend ── */}
      <div style={{
        position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 50,
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
      }}>
        {ALL_CATEGORIES.map(cat => (
          <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
            onClick={() => setActiveFilter(activeFilter === cat ? 'All' : cat)}>
            <div style={{
              width: '10px', height: '10px',
              background: CATEGORY_COLORS[cat].border,
              borderRadius: '50%',
              opacity: activeFilter === 'All' || activeFilter === cat ? 1 : 0.3,
              transition: 'opacity 0.2s',
            }} />
            <span style={{
              fontSize: '0.5rem', letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: activeFilter === 'All' || activeFilter === cat ? CATEGORY_COLORS[cat].text : '#bbb',
              transition: 'color 0.2s',
            }}>
              {cat}
            </span>
          </div>
        ))}
      </div>

      {/* ── Grouped Grid ── */}
      <main style={{ paddingTop: '58px' }}>
        {ALL_CATEGORIES.map(cat => {
          const group = filtered.filter(p => p.category === cat);
          if (group.length === 0) return null;
          const colors = CATEGORY_COLORS[cat];
          return (
            <div key={cat}>
              {/* Category header row */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.1rem 1.5rem',
                borderLeft: `3px solid ${colors.border}`,
                margin: '0',
                background: colors.bg,
              }}>
                <span style={{
                  fontSize: '0.55rem', letterSpacing: '0.28em',
                  textTransform: 'uppercase', fontWeight: 600,
                  color: colors.text,
                }}>
                  {cat}
                </span>
                <span style={{
                  fontSize: '0.5rem', letterSpacing: '0.15em',
                  color: '#aaa', textTransform: 'uppercase',
                }}>
                  {group.length} {group.length === 1 ? 'project' : 'projects'}
                </span>
              </div>

              {/* Tiles for this category */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '3px',
                background: '#e8e5e1',
                marginBottom: '3px',
              }}>
                {group.map(project => {
                  const isHovered = hovered === project.id;
                  return (
                    <a
                      key={project.id}
                      href={`/projects/${project.slug}`}
                      onMouseEnter={() => setHovered(project.id)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        position: 'relative',
                        display: 'block',
                        overflow: 'hidden',
                        background: '#1a1a1a',
                        aspectRatio: '4/3',
                        textDecoration: 'none',
                        outline: 'none',
                      }}
                    >
                      {/* Photo or placeholder */}
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: '100%', height: '100%',
                            objectFit: 'cover', display: 'block',
                            transition: 'transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          }}
                        />
                      ) : (
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: `linear-gradient(135deg, #111 0%, #1e1e1e 100%)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <div style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            border: `1px solid ${colors.border}`,
                            opacity: 0.4,
                          }} />
                        </div>
                      )}

                      {/* Category color top bar */}
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0,
                        height: '3px', background: colors.border, zIndex: 3,
                      }} />

                      {/* Hover overlay */}
                      <div style={{
                        position: 'absolute', inset: 0, zIndex: 2,
                        background: `linear-gradient(to top, rgba(0,0,0,0.82) 0%, ${colors.bg} 100%)`,
                        transition: 'opacity 0.4s ease',
                        opacity: isHovered ? 1 : 0,
                      }} />

                      {/* Text */}
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
                        padding: '1rem 1.15rem',
                        transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
                        opacity: isHovered ? 1 : 0,
                        transition: 'all 0.35s ease',
                      }}>
                        <h2 style={{
                          fontSize: 'clamp(0.72rem, 0.95vw, 0.92rem)',
                          fontWeight: 400, letterSpacing: '0.02em',
                          color: '#fff', margin: '0 0 0.2rem', lineHeight: 1.3,
                          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                        }}>
                          {project.title}
                        </h2>
                        <p style={{
                          fontSize: '0.48rem', letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.45)', margin: 0,
                        }}>
                          {project.role}
                        </p>
                      </div>

                      {/* Color dot */}
                      <div style={{
                        position: 'absolute', bottom: '0.7rem', right: '0.7rem', zIndex: 3,
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: colors.border,
                        opacity: isHovered ? 0 : 0.8,
                        transition: 'opacity 0.3s ease',
                      }} />

                      {/* Festival laurels */}
                      {project.laurels && (
                        <div style={{
                          position: 'absolute', bottom: '0.6rem', left: '0.6rem', zIndex: 4,
                          display: 'flex', gap: '0.4rem', alignItems: 'flex-end',
                        }}>
                          {project.laurels.map((laurel, i) => (
                            <img
                              key={i}
                              src={laurel}
                              alt="Festival laurel"
                              style={{
                                width: '58px',
                                height: '58px',
                                filter: 'drop-shadow(0 1px 6px rgba(0,0,0,0.9))',
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>

      {/* ── Footer ── */}
      <footer style={{
        padding: '2.5rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', margin: 0 }}>
          © Mona Mekkawi — Production Designer & Art Director
        </p>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', margin: 0 }}>
          IATSE Local 829 · Emmy Award Winner · New York
        </p>
      </footer>
    </div>
  );
}
