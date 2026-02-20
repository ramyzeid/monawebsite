'use client';

const films = [
  {
    title: 'Oversight',
    year: '2020',
    category: 'Documentary',
    director: 'Jon Michael Shink',
    producer: 'Michael Skinner',
    company: 'Pendragon Productions',
    role: 'Production Designer',
    awards: ['Emmy Award — Outstanding Documentary Historical × 3'],
    festivals: ['Regional Emmy Awards 2020'],
    stills: [
      '/projects/stills/oversight_0.jpg',
      '/projects/stills/oversight_1.jpg',
      '/projects/stills/oversight_2.jpg',
    ],
  },
  {
    title: 'The Aftermath of the Inauguration of the Public Toilet at Kilometer 375',
    year: '2014',
    category: 'Short Film',
    director: 'Omar El-Zohairy',
    dp: 'Mahmoud Youssef',
    role: 'Production Designer',
    awards: ['Best Live Action Short — Palm Springs ShortFest', 'Best Short Film — Mill Valley FF', 'Gold Djed — Luxor EEIFF'],
    festivals: ['Cannes Film Festival', 'Sundance Film Festival', 'Berlin International Film Festival'],
    stills: [
      '/projects/stills/toilet-375_0.jpg',
    ],
  },
  {
    title: 'Nothing Will Ever Be the Same',
    year: '2022',
    category: 'Short Film — Period',
    director: 'Matthew Handal',
    dp: 'Till Neumann',
    producer: 'Ryan Sheehy',
    role: 'Production Designer',
    stills: [
      '/projects/stills/nothing-will-ever_0.jpg',
      '/projects/stills/nothing-will-ever_1.jpg',
      '/projects/stills/nothing-will-ever_2.jpg',
    ],
  },
  {
    title: 'FLEXN',
    year: '2022',
    category: 'Short Film',
    director: 'Ryan Sheehy',
    dp: 'John Fitzpatrick',
    producer: 'Xavier Andrews',
    role: 'Production Designer',
    stills: [
      '/projects/stills/flexn_0.png',
      '/projects/stills/flexn_1.png',
      '/projects/stills/flexn_2.png',
    ],
  },
  {
    title: 'Wading',
    year: '2022',
    category: 'Short Film',
    director: 'Nada Bedair',
    dp: 'ChrisDel Rio Solorzano',
    producer: 'Macdaleine St. Remy',
    role: 'Production Designer',
    laurels: [
      '/laurels/palm-springs-2023.svg',
      '/laurels/nyu-tisch-firstrun-2023.svg',
    ],
    stills: [
      '/projects/stills/fishtank_0.png',
      '/projects/stills/fishtank_1.jpg',
    ],
  },
  {
    title: 'Heptapus',
    year: '2022',
    category: 'Short Film',
    director: 'Cooper Troxell',
    dp: 'Jason Chau',
    producer: 'Dawn Han',
    role: 'Production Designer',
    stills: [
      '/projects/stills/heptapus_0.jpg',
      '/projects/stills/heptapus_1.jpg',
      '/projects/stills/heptapus_2.jpg',
    ],
  },
  {
    title: 'The Great Filter',
    year: '2022',
    category: 'Short Film',
    director: 'Derin Celik',
    producer: 'Ditte Ravnild',
    role: 'Production Designer',
    stills: [
      '/projects/stills/great-filter_0.jpg',
    ],
  },
  {
    title: 'No Words',
    year: '2022',
    category: 'Short Film',
    director: 'Ryan Sheehy',
    dp: 'Amber Steele',
    producer: 'Simone Stadler',
    role: 'Production Designer',
    stills: [
      '/projects/stills/no-words_0.jpg',
      '/projects/stills/no-words_1.jpg',
      '/projects/stills/no-words_2.jpg',
    ],
  },
  {
    title: 'Hold Me Tight',
    year: '2022',
    category: 'Short Film',
    director: 'Cathleen Chia-Shu Chou',
    producer: 'Dorothy Wang',
    role: 'Production Designer',
    stills: [
      '/projects/stills/hold-me-tight_0.jpg',
      '/projects/stills/hold-me-tight_1.jpg',
      '/projects/stills/hold-me-tight_2.jpg',
    ],
  },
  {
    title: 'Hole-y',
    year: '2022',
    category: 'Short Film',
    director: 'Bavly Soliman',
    dp: 'Thomas Heban',
    producer: 'Mark Lotfy',
    role: 'Production Designer',
    stills: [
      '/projects/stills/hole-y_0.jpg',
      '/projects/stills/hole-y_1.jpg',
      '/projects/stills/hole-y_2.jpg',
    ],
  },
];

export default function Narrative() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}>

      {/* ── Navigation ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          padding: '0 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '56px',
        }}>
          <a href="/v2" style={{ textDecoration: 'none' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.24em', color: '#111', textTransform: 'uppercase', fontWeight: 500 }}>
              Mona Mekkawi
            </div>
            <div style={{ fontSize: '0.5rem', letterSpacing: '0.18em', color: '#999', textTransform: 'uppercase', marginTop: '2px' }}>
              Production Design / Art Direction
            </div>
          </a>
          <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {[
              { label: 'Narrative', href: '/v2/narrative' },
              { label: 'Commercial', href: '/v2' },
              { label: 'About', href: '/v2' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{
                fontSize: '0.58rem', letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: label === 'Narrative' ? '#111' : '#999',
                textDecoration: label === 'Narrative' ? 'none' : 'none',
                borderBottom: label === 'Narrative' ? '1px solid #111' : 'none',
                paddingBottom: '1px',
              }}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Films ── */}
      <main style={{ paddingTop: '56px', maxWidth: '1100px', margin: '0 auto', padding: '56px 2rem 6rem' }}>
        {films.map((film, idx) => (
          <article
            key={film.title}
            style={{
              marginBottom: idx < films.length - 1 ? '7rem' : 0,
            }}
          >
            {/* Hero image — full width */}
            <div style={{ width: '100%', overflow: 'hidden', background: '#111', position: 'relative' }}>
              <img
                src={film.stills[0]}
                alt={film.title}
                style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '600px' }}
              />
              {/* Festival laurels */}
              {film.laurels && (
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '2rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-end',
                }}>
                  {film.laurels.map((laurel, i) => (
                    <img
                      key={i}
                      src={laurel}
                      alt="Festival laurel"
                      style={{
                        width: '120px',
                        height: '120px',
                        filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.9))',
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Additional stills — side by side */}
            {film.stills.length > 1 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${film.stills.length - 1}, 1fr)`,
                gap: '2px',
                marginTop: '2px',
              }}>
                {film.stills.slice(1).map((src, i) => (
                  <div key={i} style={{ overflow: 'hidden', background: '#111' }}>
                    <img
                      src={src}
                      alt={`${film.title} still ${i + 2}`}
                      style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Credits */}
            <div style={{
              marginTop: '1.1rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              gap: '0.5rem 2rem',
            }}>
              <h2 style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#111',
                margin: 0,
              }}>
                {film.title}
              </h2>
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.1em', color: '#999', textTransform: 'uppercase' }}>
                {film.category} · {film.year}
              </span>
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.1em', color: '#bbb', textTransform: 'uppercase' }}>
                {film.role}
              </span>
              {film.director && (
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.08em', color: '#bbb', textTransform: 'uppercase' }}>
                  Dir. {film.director}
                </span>
              )}
              {film.dp && (
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.08em', color: '#bbb', textTransform: 'uppercase' }}>
                  DP. {film.dp}
                </span>
              )}
            </div>

            {/* Awards / Festivals */}
            {(film.awards || film.festivals) && (
              <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {film.festivals?.map(f => (
                  <span key={f} style={{
                    fontSize: '0.5rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: '#888',
                    border: '1px solid #ddd', padding: '0.25rem 0.6rem',
                  }}>
                    {f}
                  </span>
                ))}
                {film.awards?.map(a => (
                  <span key={a} style={{
                    fontSize: '0.5rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: '#C9A050',
                    border: '1px solid rgba(201,160,80,0.3)', padding: '0.25rem 0.6rem',
                  }}>
                    ★ {a}
                  </span>
                ))}
              </div>
            )}

            {/* Divider */}
            {idx < films.length - 1 && (
              <div style={{ marginTop: '7rem', height: '1px', background: '#f0f0f0' }} />
            )}
          </article>
        ))}
      </main>

      {/* ── Footer ── */}
      <footer style={{
        padding: '2rem', textAlign: 'center',
        borderTop: '1px solid #f0f0f0',
      }}>
        <p style={{ fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ccc', margin: 0 }}>
          © Mona Mekkawi — Production Designer & Art Director · IATSE Local 829 · New York
        </p>
      </footer>
    </div>
  );
}
