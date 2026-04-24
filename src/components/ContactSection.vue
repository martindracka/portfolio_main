<script setup>
const email = 'matodracka@gmail.com'

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/martindracka/',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`
  },
  {
    name: 'GitHub',
    url: 'https://github.com/martindracka',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`
  }
]
</script>

<template>
  <section id="contact" class="contact section">
    <div class="container">

      <div class="contact__inner">
        <div class="contact__text">
          <p class="section-label">Get in touch</p>
          <h2 class="section-title">Let's build something<br />great together</h2>
          <p class="contact__bio">
            I'm currently open to freelance projects, contract roles, and full-time opportunities.
            Whether you have a project in mind or just want to say hello — my inbox is always open.
          </p>

          <a :href="`mailto:${email}`" class="contact__email">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            {{ email }}
          </a>
        </div>

        <div class="contact__socials">
          <p class="contact__socials-label">Find me online</p>
          <div class="socials-list">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-card"
              :aria-label="social.name"
            >
              <span v-html="social.icon" class="social-icon"></span>
              <span class="social-name">{{ social.name }}</span>
              <svg class="social-arrow" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--bg-primary);
}

.contact__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
}

.contact__bio {
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 32px;
}

.contact__email {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--accent);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition);
  padding-bottom: 2px;
}
.contact__email:hover {
  border-color: var(--accent);
}

.contact__socials-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.socials-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  transition: all var(--transition);
}
.social-card:hover {
  border-color: var(--border-accent);
  color: var(--text-primary);
  transform: translateX(4px);
}

.social-icon {
  display: flex;
  align-items: center;
  color: var(--accent);
  flex-shrink: 0;
}

.social-name {
  flex: 1;
  font-weight: 600;
  font-size: 0.95rem;
}

.social-arrow {
  color: var(--text-muted);
  transition: transform var(--transition), color var(--transition);
}
.social-card:hover .social-arrow {
  transform: translate(3px, -3px);
  color: var(--accent);
}

@media (min-width: 900px) {
  .contact__inner {
    grid-template-columns: 1.2fr 1fr;
    align-items: start;
  }
}
</style>
