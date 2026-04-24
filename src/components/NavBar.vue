<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled  = ref(false)

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Video CV', href: '#video-cv' },
  { label: 'Contact',  href: '#contact' },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar__inner">
      <a href="#hero" class="navbar__logo" @click="closeMenu" aria-label="Martin Dracka – Home">
        <img src="/logo.jpeg" alt="Martin Dracka logo" class="navbar__logo-img" width="40" height="40" />
      </a>

      <nav class="navbar__links" aria-label="Main navigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar__link"
        >
          {{ link.label }}
        </a>
        <a href="https://drive.google.com/file/d/1RVHqswxWP3IeuMc0lGPmxbd8cMJLgXmw/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-primary navbar__cta">
          View CV
        </a>
      </nav>

      <button
        class="navbar__hamburger"
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <Transition name="slide">
      <nav v-if="isMenuOpen" class="navbar__mobile" aria-label="Mobile navigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar__mobile-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a
          href="https://drive.google.com/file/d/1RVHqswxWP3IeuMc0lGPmxbd8cMJLgXmw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary navbar__mobile-cta"
          @click="closeMenu"
        >
          View CV
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  transition: background var(--transition), box-shadow var(--transition);
}

.navbar.scrolled {
  background: rgba(7, 10, 18, 0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar__logo {
  display: flex;
  align-items: center;
  transition: opacity var(--transition);
}
.navbar__logo:hover { opacity: 0.8; }

.navbar__logo-img {
  height: 40px;
  width: 40px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
}

.navbar__links {
  display: none;
  align-items: center;
  gap: 36px;
}

.navbar__link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition);
  position: relative;
}
.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width var(--transition);
}
.navbar__link:hover { color: var(--text-primary); }
.navbar__link:hover::after { width: 100%; }

.navbar__cta {
  padding: 8px 20px;
  font-size: 0.85rem;
}

.navbar__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 4px;
  border-radius: var(--radius-sm);
  transition: background var(--transition);
}
.navbar__hamburger:hover { background: var(--bg-card); }

.navbar__hamburger span {
  display: block;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
  transform-origin: center;
}

.navbar__hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__hamburger.active span:nth-child(2) {
  opacity: 0;
}
.navbar__hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.navbar__mobile {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: rgba(7, 10, 18, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--border);
  padding: 20px var(--section-pad-x) 28px;
}

.navbar__mobile-link {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  transition: color var(--transition);
}
.navbar__mobile-link:hover { color: var(--accent); }

.navbar__mobile-cta {
  margin-top: 16px;
  justify-content: center;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (min-width: 768px) {
  .navbar__links    { display: flex; }
  .navbar__hamburger { display: none; }
}
</style>
