<script setup>
import martinImg from '../assets/Graphics/martin.png'

const CV_URL = 'https://drive.google.com/file/d/1RVHqswxWP3IeuMc0lGPmxbd8cMJLgXmw/view?usp=sharing'
</script>

<template>
  <section id="hero" class="hero section">
    <div class="hero__glow" aria-hidden="true"></div>
    <div class="hero__grid" aria-hidden="true"></div>

    <div class="container hero__inner">

      <!-- Text column -->
      <div class="hero__content">
        <p class="hero__eyebrow section-label">Hello, I'm</p>

        <h1 class="hero__name">
          Martin<span class="hero__name-accent"> Dracka</span>
        </h1>

        <p class="hero__tagline">
          Multimedia Designer from Slovakia, with aim to deliver solutions that resonates with people.
        </p>

        <div class="hero__cta-group">
          <a href="#projects" class="btn btn-primary">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            View Projects
          </a>
          <a :href="CV_URL" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            View CV
          </a>
        </div>

        <div class="hero__scroll-hint" aria-hidden="true">
          <div class="hero__scroll-dot"></div>
          <p>Scroll to explore</p>
        </div>
      </div>

      <!-- Photo column -->
      <div class="hero__photo-wrap">
        <div class="hero__photo-frame">
          <img :src="martinImg" alt="Martin Dracka" class="hero__photo" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: calc(var(--nav-height) + 40px);
  padding-bottom: 60px;
}

.hero__glow {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(30, 90, 160, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

.hero__eyebrow {
  margin-bottom: 16px;
}

.hero__name {
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.hero__name-accent {
  color: var(--accent);
  display: inline-block;
}

.hero__tagline {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 40px;
}

.hero__cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 60px;
}

.hero__scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.hero__scroll-hint p {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.hero__scroll-dot {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

/* Photo */
.hero__photo-wrap {
  display: flex;
  justify-content: center;
}

.hero__photo-frame {
  position: relative;
  width: min(320px, 80vw);
  height: min(400px, 100vw);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-accent);
  box-shadow: 0 0 60px rgba(58, 159, 216, 0.2), var(--shadow-card);
}

.hero__photo-frame::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13, 13, 13, 0.3) 0%, transparent 50%);
  z-index: 1;
  pointer-events: none;
}

.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50%       { opacity: 0.4; transform: scaleY(0.7); }
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (min-width: 768px) {
  .hero__inner {
    grid-template-columns: 1fr auto;
    gap: 64px;
  }

  .hero__photo-frame {
    width: 300px;
    height: 380px;
  }
}

@media (min-width: 1024px) {
  .hero__inner {
    gap: 80px;
  }

  .hero__photo-frame {
    width: 360px;
    height: 440px;
  }
}
</style>
