<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import martinImg from '../assets/Graphics/martin.png'

const CV_URL = 'https://drive.google.com/file/d/1RVHqswxWP3IeuMc0lGPmxbd8cMJLgXmw/view?usp=sharing'

// Split name into individual letters for staggered animation
const firstName = 'Martin'.split('')
const lastName  = 'Dracka'.split('')

// Cycling roles typewriter
const roles = [
  'Multimedia Designer',
  'Visual Storyteller',
  'Graphic Designer',
  'Web Designer',
  'Brand Creator',
]
const roleIndex  = ref(0)
const roleText   = ref('')
const isDeleting = ref(false)
const showCursor = ref(true)
let typeTimer = null

function tick() {
  const target = roles[roleIndex.value]

  if (!isDeleting.value) {
    roleText.value = target.slice(0, roleText.value.length + 1)
    if (roleText.value === target) {
      typeTimer = setTimeout(() => { isDeleting.value = true; tick() }, 2400)
      return
    }
  } else {
    roleText.value = target.slice(0, roleText.value.length - 1)
    if (roleText.value === '') {
      isDeleting.value = false
      roleIndex.value  = (roleIndex.value + 1) % roles.length
    }
  }
  typeTimer = setTimeout(tick, isDeleting.value ? 40 : 90)
}

onMounted(() => {
  // Start typewriter after name letters have all revealed (~900ms)
  typeTimer = setTimeout(tick, 1300)
})
onUnmounted(() => clearTimeout(typeTimer))
</script>

<template>
  <section id="hero" class="hero">
    <!-- Decorative background layers -->
    <div class="hero__glow"  aria-hidden="true"></div>
    <div class="hero__grid"  aria-hidden="true"></div>

    <div class="container hero__inner">

      <!-- ── Left: text content ── -->
      <div class="hero__content">

        <!-- "Hello, I'm" — letter-spacing collapse -->
        <p class="hero__eyebrow" aria-label="Hello, I'm">
          <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>,</span>
          <span>&nbsp;</span><span>I</span><span>'</span><span>m</span>
        </p>

        <!-- Name — each letter slides up from behind overflow clip -->
        <h1 class="hero__name" aria-label="Martin Dracka">
          <!-- "Martin" in white -->
          <span class="hero__word" aria-hidden="true">
            <span
              v-for="(letter, i) in firstName"
              :key="`f${i}`"
              class="hero__letter-outer"
            >
              <span
                class="hero__letter"
                :style="`animation-delay: ${120 + i * 65}ms`"
              >{{ letter }}</span>
            </span>
          </span>

          <!-- Non-breaking space -->
          <span class="hero__name-space" aria-hidden="true">&nbsp;</span>

          <!-- "Dracka" in accent colour -->
          <span class="hero__word hero__word--accent" aria-hidden="true">
            <span
              v-for="(letter, i) in lastName"
              :key="`l${i}`"
              class="hero__letter-outer"
            >
              <span
                class="hero__letter"
                :style="`animation-delay: ${490 + i * 65}ms`"
              >{{ letter }}</span>
            </span>
          </span>
        </h1>

        <!-- Expanding accent line -->
        <div class="hero__divider" aria-hidden="true"></div>

        <!-- Typewriter cycling role -->
        <p class="hero__role" aria-live="polite">
          <span class="hero__role-text">{{ roleText }}</span>
          <span class="hero__cursor" aria-hidden="true"></span>
        </p>

        <!-- Tagline -->
        <p class="hero__tagline">
          from Slovakia, with aim to deliver solutions that resonates with people.
        </p>

        <!-- CTAs -->
        <div class="hero__cta-group">
          <a href="#projects" class="btn btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            View Projects
          </a>
          <a :href="CV_URL" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            View CV
          </a>
        </div>

        <!-- Scroll indicator -->
        <div class="hero__scroll-hint" aria-hidden="true">
          <div class="hero__scroll-line"></div>
          <p>Scroll to explore</p>
        </div>

      </div>

      <!-- ── Right: portrait ── -->
      <div class="hero__photo-wrap">
        <div class="hero__photo-frame">
          <img :src="martinImg" alt="Martin Dracka" class="hero__photo" />
          <!-- Subtle corner accent -->
          <div class="hero__photo-corner hero__photo-corner--tl" aria-hidden="true"></div>
          <div class="hero__photo-corner hero__photo-corner--br" aria-hidden="true"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =============================================
   SECTION SHELL
   ============================================= */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top:    calc(var(--nav-height) + 40px);
  padding-bottom: 60px;
}

.hero__glow {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(30, 90, 160, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

/* =============================================
   LAYOUT
   ============================================= */
.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

/* =============================================
   EYEBROW — letter-spacing collapse
   ============================================= */
.hero__eyebrow {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
  overflow: hidden;
}

.hero__eyebrow span {
  display: inline-block;
  opacity: 0;
  animation: eyeChar 0.4s ease forwards;
}

/* stagger every character */
.hero__eyebrow span:nth-child(1)  { animation-delay:  0ms; }
.hero__eyebrow span:nth-child(2)  { animation-delay: 30ms; }
.hero__eyebrow span:nth-child(3)  { animation-delay: 60ms; }
.hero__eyebrow span:nth-child(4)  { animation-delay: 90ms; }
.hero__eyebrow span:nth-child(5)  { animation-delay:120ms; }
.hero__eyebrow span:nth-child(6)  { animation-delay:150ms; }
.hero__eyebrow span:nth-child(7)  { animation-delay:160ms; }
.hero__eyebrow span:nth-child(8)  { animation-delay:190ms; }
.hero__eyebrow span:nth-child(9)  { animation-delay:210ms; }
.hero__eyebrow span:nth-child(10) { animation-delay:230ms; }

@keyframes eyeChar {
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* =============================================
   NAME — per-letter slide-up reveal
   ============================================= */
.hero__name {
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 0;
  /* Perspective for subtle 3-D lift */
  perspective: 600px;
}

.hero__word {
  display: inline-flex;
}

.hero__word--accent .hero__letter {
  color: var(--accent);
}

.hero__name-space {
  display: inline-block;
  width: 0.25em;
}

/* Each letter sits inside an overflow:hidden clip */
.hero__letter-outer {
  display: inline-block;
  overflow: hidden;
  /* tiny padding so descenders aren't clipped */
  padding-bottom: 0.06em;
  margin-bottom: -0.06em;
}

.hero__letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(110%) rotateX(-30deg);
  animation: letterUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes letterUp {
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

/* =============================================
   DIVIDER — expands right after name
   ============================================= */
.hero__divider {
  height: 1.5px;
  width: 0;
  margin: 20px 0;
  background: linear-gradient(90deg, var(--accent) 0%, rgba(58,159,216,0.3) 60%, transparent 100%);
  animation: expandLine 0.7s ease forwards;
  animation-delay: 960ms;
}

@keyframes expandLine {
  to { width: min(480px, 100%); }
}

/* =============================================
   TYPEWRITER ROLE
   ============================================= */
.hero__role {
  font-size: clamp(1rem, 2vw, 1.15rem);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 20px;
  min-height: 1.6em;

  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
  animation-delay: 1100ms;
}

.hero__role-text {
  color: var(--text-primary);
  font-weight: 600;
}

/* Blinking cursor */
.hero__cursor {
  display: inline-block;
  width: 2px;
  height: 0.9em;
  background: var(--accent);
  margin-left: 3px;
  vertical-align: middle;
  border-radius: 1px;
  animation: blink 0.85s step-end infinite;
  animation-delay: 1300ms;
  opacity: 0;
}

@keyframes blink {
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
}

/* =============================================
   TAGLINE, BUTTONS, SCROLL — staggered fade-up
   ============================================= */
.hero__tagline {
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 460px;
  margin-bottom: 36px;

  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
  animation-delay: 1180ms;
}

.hero__cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 56px;

  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
  animation-delay: 1280ms;
}

.hero__scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
  animation-delay: 1420ms;
}

.hero__scroll-hint p {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.hero__scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50%       { opacity: 0.35; transform: scaleY(0.65); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* =============================================
   PHOTO — slides in from right
   ============================================= */
.hero__photo-wrap {
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: photoIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 250ms;
}

@keyframes photoIn {
  from { opacity: 0; transform: translateX(48px) scale(0.96); }
  to   { opacity: 1; transform: translateX(0)    scale(1); }
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
  background: linear-gradient(to top, rgba(8,11,20,0.35) 0%, transparent 55%);
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

/* Corner accents */
.hero__photo-corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--accent);
  border-style: solid;
  z-index: 2;
  opacity: 0.6;
}

.hero__photo-corner--tl {
  top: 10px; left: 10px;
  border-width: 2px 0 0 2px;
  border-radius: 2px 0 0 0;
}

.hero__photo-corner--br {
  bottom: 10px; right: 10px;
  border-width: 0 2px 2px 0;
  border-radius: 0 0 2px 0;
}

/* =============================================
   ACCESSIBILITY — respect reduced motion
   ============================================= */
@media (prefers-reduced-motion: reduce) {
  .hero__letter,
  .hero__eyebrow span,
  .hero__divider,
  .hero__role,
  .hero__cursor,
  .hero__tagline,
  .hero__cta-group,
  .hero__scroll-hint,
  .hero__photo-wrap {
    animation: none;
    opacity: 1;
    transform: none;
    width: min(480px, 100%);
  }
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
  .hero__inner { gap: 80px; }

  .hero__photo-frame {
    width: 360px;
    height: 440px;
  }
}
</style>
