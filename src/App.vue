<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import VideoCVSection from './components/VideoCVSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="app-wrapper">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <VideoCVSection />
      <ContactSection />
    </main>
    <footer class="site-footer">
      <div class="container">
        <p class="footer-copy">
          &copy; {{ new Date().getFullYear() }} Martin Dracka. Crafted with Vue 3 + Vite.
        </p>
        <p class="footer-note">Built from scratch — no Tailwind, no Bootstrap.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.site-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 32px 0;
  text-align: center;
}

.footer-copy {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.footer-note {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 6px;
}
</style>
