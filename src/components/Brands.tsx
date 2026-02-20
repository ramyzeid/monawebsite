'use client';

import { motion } from 'framer-motion';
import { Sparkles, Film, Camera, Palette, Star, Zap } from 'lucide-react';

const ugcServices = [
  {
    icon: <Palette size={20} />,
    title: 'Set & Scene Design for Brands',
    desc: 'Custom-built environments, props, and aesthetic worlds designed specifically for brand campaigns — making your content impossible to scroll past.',
  },
  {
    icon: <Camera size={20} />,
    title: 'UGC Production Design',
    desc: 'Full production design services for user-generated content campaigns. I create the perfect background, props, and atmosphere that matches your brand DNA.',
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Luxury Brand Campaigns',
    desc: 'Editorial-level set design for luxury fashion, beauty, and lifestyle brands. Cinematic, refined, and unforgettable — designed to elevate your product to its highest expression.',
  },
  {
    icon: <Film size={20} />,
    title: 'Commercial Art Direction',
    desc: '17+ years directing the visual language of 200+ commercial productions. From concept to camera, I ensure every frame communicates your brand story.',
  },
  {
    icon: <Star size={20} />,
    title: 'Creative Consulting',
    desc: 'Strategic creative direction for brands wanting to elevate their visual content. I analyze, concept, and guide your team to produce content at a cinematic level.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Event & Experiential Design',
    desc: 'Immersive physical brand experiences, pop-ups, installations, and events. Having designed large-scale festivals, I bring that same vision to your brand moment.',
  },
];

const brandCategories = [
  { name: 'Luxury Fashion',   emoji: '👗' },
  { name: 'Beauty & Skincare',emoji: '✨' },
  { name: 'Automotive',       emoji: '🚗' },
  { name: 'Real Estate',      emoji: '🏛️' },
  { name: 'Food & Beverage',  emoji: '🍾' },
  { name: 'Technology',       emoji: '◈' },
  { name: 'Entertainment',    emoji: '🎬' },
  { name: 'Lifestyle',        emoji: '◆' },
];

export default function Brands() {
  return (
    <section id="brands" style={{ backgroundColor: '#0a0a0a', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '5rem', alignItems: 'end' }}>
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label"
              style={{ marginBottom: '1rem' }}
            >
              Brand Collaborations
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
              UGC &amp; Luxury<br />
              <em style={{ color: 'var(--gold)' }}>Brand Services</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: '#888',
              margin: '0 0 1.5rem',
            }}>
              With a career spanning 200+ commercial productions and award-winning film design,
              I bring a rare cinematic eye to brand content. Whether you need a luxury campaign
              that stops the scroll or UGC that feels authentic yet elevated — I design environments
              that make your product unforgettable.
            </p>
            <a href="#contact" className="btn-gold" style={{ textDecoration: 'none' }}>
              Request a Media Kit
            </a>
          </motion.div>
        </div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1px',
          backgroundColor: '#1e1e1e',
          marginBottom: '5rem',
        }}>
          {ugcServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              style={{
                backgroundColor: '#0a0a0a',
                padding: '2.5rem 2rem',
                transition: 'background 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0f0f0f')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0a0a0a')}
            >
              {/* Icon */}
              <div style={{
                width: '44px', height: '44px',
                border: '1px solid rgba(201,168,76,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)',
                marginBottom: '1.5rem',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.25)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
              >
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontWeight: 500,
                fontSize: '1.25rem',
                color: '#f5f0e8',
                margin: '0 0 0.75rem',
              }}>
                {service.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.8rem',
                lineHeight: 1.8,
                color: '#888',
                margin: 0,
              }}>
                {service.desc}
              </p>

              {/* Number */}
              <span style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '3rem',
                color: 'rgba(201,168,76,0.05)',
                lineHeight: 1,
                fontWeight: 300,
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Brand categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            border: '1px solid #2a2a2a',
            padding: '3rem',
            background: 'linear-gradient(135deg, #111111 0%, #0f0f0f 100%)',
          }}
        >
          <p className="section-label" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            Industries I Work With
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {brandCategories.map((cat) => (
              <div
                key={cat.name}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  border: '1px solid #2a2a2a',
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  color: '#c8c8c8',
                  fontFamily: 'var(--font-inter), sans-serif',
                  transition: 'border-color 0.3s, color 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                  (e.currentTarget as HTMLElement).style.color = '#c8c8c8';
                }}
              >
                <span>{cat.emoji}</span>
                {cat.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
