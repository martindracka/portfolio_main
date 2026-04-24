<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const primaryLabel  = computed(() => props.project.primaryLabel  || 'Live Demo')
const secondaryLabel = computed(() => props.project.secondaryLabel || 'Source')
const hasSecondary  = computed(() => !!props.project.secondaryUrl)
const isGithub      = computed(() => props.project.secondaryUrl?.includes('github.com'))
</script>

<template>
  <article class="card">
    <div class="card__image-wrap">
      <img
        :src="project.image"
        :alt="project.title"
        class="card__image"
        loading="lazy"
        width="600"
        height="360"
      />
      <span class="card__category">{{ project.category }}</span>
    </div>

    <div class="card__body">
      <h3 class="card__title">{{ project.title }}</h3>
      <p class="card__description">{{ project.description }}</p>

      <div class="card__tech">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>

      <div class="card__links">
        <!-- Primary link -->
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="card__link card__link--primary"
        >
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          {{ primaryLabel }}
        </a>

        <!-- Secondary link — only rendered when URL exists -->
        <a
          v-if="hasSecondary"
          :href="project.secondaryUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="card__link card__link--secondary"
        >
          <!-- GitHub icon -->
          <template v-if="isGithub">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </template>
          <!-- Generic play/link icon for video & drive links -->
          <template v-else>
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10,8 16,12 10,16"/>
            </svg>
          </template>
          {{ secondaryLabel }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card), var(--shadow-accent);
  border-color: var(--border-accent);
}

.card__image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.card:hover .card__image {
  transform: scale(1.05);
}

.card__category {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(8, 11, 20, 0.85);
  color: var(--accent);
  border: 1px solid var(--border-accent);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.card__body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
}

.card__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.card__description {
  font-size: 0.87rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
}

.card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 500;
  background: rgba(58, 159, 216, 0.1);
  color: var(--accent-light);
  border: 1px solid rgba(58, 159, 216, 0.2);
}

.card__links {
  display: flex;
  gap: 12px;
  margin-top: 4px;
  flex-wrap: wrap;
}

.card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
}

.card__link--primary {
  background: var(--accent);
  color: #fff;
}
.card__link--primary:hover {
  background: var(--accent-light);
}

.card__link--secondary {
  border: 1px solid var(--border);
  color: var(--text-secondary);
}
.card__link--secondary:hover {
  border-color: var(--border-accent);
  color: var(--text-primary);
}
</style>
