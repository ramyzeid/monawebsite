import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, CATEGORY_COLORS } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mona Mekkawi`,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const colors = CATEGORY_COLORS[project.category];
  const [hero, ...rest] = project.images.length > 0 ? project.images : [undefined];

  return (
    <div style={{ background: '#f7f5f2', minHeight: '100vh', fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}>

      {/* ── Fixed Nav ── */}
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
          {/* Back arrow + name */}
          <Link href="/v2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1 }}>←</span>
            <div>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.24em', color: '#111', textTransform: 'uppercase', fontWeight: 500 }}>
                Mona Mekkawi
              </div>
              <div style={{ fontSize: '0.52rem', letterSpacing: '0.18em', color: '#999', textTransform: 'uppercase', marginTop: '2px' }}>
                Production Design / Art Direction
              </div>
            </div>
          </Link>

          {/* Category badge */}
          <div style={{
            fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: colors.text, border: `1px solid ${colors.border}`,
            background: colors.bg, padding: '0.3rem 0.8rem',
          }}>
            {project.category}
          </div>
        </div>
      </header>

      {/* ── Main content ── */}
      <main style={{ paddingTop: '58px' }}>

        {/* ── Hero image ── */}
        {hero && (
          <div style={{ position: 'relative', width: '100%', maxHeight: '85vh', overflow: 'hidden' }}>
            <img
              src={hero}
              alt={project.title}
              style={{ width: '100%', height: '85vh', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '40%',
              background: 'linear-gradient(to top, rgba(247,245,242,1) 0%, transparent 100%)',
            }} />
          </div>
        )}

        {/* ── Title + credits block ── */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 2rem 3rem' }}>
          <h1 style={{
            fontFamily: '"Cormorant Garamond", "Georgia", serif',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 400, color: '#111',
            margin: '0 0 0.5rem', lineHeight: 1.1,
          }}>
            {project.title}
          </h1>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: colors.text, fontWeight: 600,
            }}>
              {project.year}
            </span>
            <span style={{ color: '#ccc' }}>·</span>
            <span style={{
              fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#777',
            }}>
              {project.role}
            </span>
          </div>

          {/* Awards */}
          {project.awards && project.awards.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.awards.map((award) => (
                <span key={award} style={{
                  fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#C9A050', background: 'rgba(201,160,80,0.1)',
                  border: '1px solid rgba(201,160,80,0.3)',
                  padding: '0.3rem 0.7rem',
                }}>
                  ★ {award}
                </span>
              ))}
            </div>
          )}

          {/* Festivals */}
          {project.festivals && project.festivals.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {project.festivals.map((fest) => (
                <span key={fest} style={{
                  fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#888', border: '1px solid #ddd',
                  padding: '0.25rem 0.6rem',
                }}>
                  {fest}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p style={{
            fontSize: '0.8rem', lineHeight: 1.75, color: '#555',
            margin: '0 0 1.5rem', maxWidth: '600px',
          }}>
            {project.desc}
          </p>

          {/* Credits grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '1rem', borderTop: '1px solid #e5e2de', paddingTop: '1.5rem',
          }}>
            {project.director && (
              <div>
                <div style={{ fontSize: '0.48rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>Director</div>
                <div style={{ fontSize: '0.7rem', color: '#333' }}>{project.director}</div>
              </div>
            )}
            {project.dp && (
              <div>
                <div style={{ fontSize: '0.48rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>DP</div>
                <div style={{ fontSize: '0.7rem', color: '#333' }}>{project.dp}</div>
              </div>
            )}
            {project.producer && (
              <div>
                <div style={{ fontSize: '0.48rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>Producer</div>
                <div style={{ fontSize: '0.7rem', color: '#333' }}>{project.producer}</div>
              </div>
            )}
            {project.company && (
              <div>
                <div style={{ fontSize: '0.48rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>Production</div>
                <div style={{ fontSize: '0.7rem', color: '#333' }}>{project.company}</div>
              </div>
            )}
          </div>
        </div>

        {/* ── Image grid (remaining stills) ── */}
        {rest.length > 0 && (
          <div style={{ padding: '0 0 4rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: rest.length === 1
                ? '1fr'
                : rest.length === 2
                ? 'repeat(2, 1fr)'
                : 'repeat(auto-fill, minmax(480px, 1fr))',
              gap: '3px',
              background: '#e8e5e1',
            }}>
              {rest.map((src, i) => (
                <div key={i} style={{ overflow: 'hidden', aspectRatio: '4/3', background: '#1a1a1a' }}>
                  <img
                    src={src}
                    alt={`${project.title} — still ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer style={{
        padding: '2.5rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}>
        <Link href="/v2" style={{
          fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#888', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          ← All Projects
        </Link>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', margin: 0 }}>
          © Mona Mekkawi — Production Designer & Art Director
        </p>
      </footer>
    </div>
  );
}
