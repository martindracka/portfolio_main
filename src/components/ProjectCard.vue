<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  index:   { type: Number, required: true }
})

const isReversed  = computed(() => props.index % 2 !== 0)
const hasSecondary = computed(() => !!props.project.secondaryUrl)
const isGithub     = computed(() => props.project.secondaryUrl?.includes('github.com'))
const primaryLabel = computed(() => props.project.primaryLabel  || 'View Project')
const imageSrc = computed(() => {
  if (!props.project.image) return ''
  if (props.project.image.startsWith('http')) return props.project.image
  if (props.project.image.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${props.project.image.slice(1)}`
  }
  return props.project.image
})
</script>

<template>
  <article class="proj" :class="{ 'proj--reversed': isReversed }">

    <!-- Image -->
    <a
      class="proj__image-wrap"
      :href="project.liveUrl"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`View ${project.title}`"
    >
      <div class="proj__image-inner">
        <img
          :src="imageSrc"
          :alt="project.title"
          class="proj__img"
          loading="lazy"
        />
        <div class="proj__overlay" aria-hidden="true"></div>
      </div>
    </a>

    <!-- Content -->
    <div class="proj__content">
      <p class="proj__label">Featured Project</p>
      <h3 class="proj__title">
        <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer">
          {{ project.title }}
        </a>
      </h3>

      <div class="proj__desc-box">
        <p class="proj__desc">{{ project.description }}</p>
      </div>

      <ul class="proj__tech" aria-label="Technologies">
        <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
      </ul>

      <div class="proj__links">
        <!-- GitHub or secondary -->
        <a
          v-if="hasSecondary"
          :href="project.secondaryUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="proj__icon-link"
          :aria-label="isGithub ? 'GitHub repository' : project.secondaryLabel"
        >
          <svg v-if="isGithub" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          <svg v-else fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16"/>
          </svg>
        </a>

        <!-- External link -->
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="proj__icon-link"
          :aria-label="primaryLabel"
        >
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </div>

  </article>
</template>

<style scoped>
/* ── Base row ── */
.proj {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0 10px;
  align-items: center;
}

/* ── Image: cols 1–8, content overlaps from col 6 ── */
.proj__image-wrap {
  grid-column: 1 / 9;
  grid-row: 1;
  position: relative;
  z-index: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  display: block;
}

.proj__content {
  grid-column: 6 / 13;
  grid-row: 1;
  position: relative;
  z-index: 2;
  text-align: right;
}

/* ── Reversed: image right, content left ── */
.proj--reversed .proj__image-wrap {
  grid-column: 5 / 13;
}

.proj--reversed .proj__content {
  grid-column: 1 / 8;
  text-align: left;
}

/* ── Image inner ── */
.proj__image-inner {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--radius-md);
}

.proj__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(100%) brightness(80%);
  transition: filter 0.4s ease, transform 0.4s ease;
}

.proj__overlay {
  position: absolute;
  inset: 0;
  background: rgba(58, 159, 216, 0.18);
  transition: opacity 0.4s ease;
  mix-blend-mode: multiply;
}

.proj:hover .proj__img {
  filter: none;
  transform: scale(1.03);
}

.proj:hover .proj__overlay {
  opacity: 0;
}

/* ── Content ── */
.proj__label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
  font-family: 'Courier New', Courier, monospace;
}

.proj__title {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.2;
}

.proj__title a {
  transition: color var(--transition);
}

.proj__title a:hover {
  color: var(--accent);
}

.proj__desc-box {
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  padding: 20px 24px;
  margin-bottom: 20px;
  box-shadow: var(--shadow-card);
  position: relative;
  z-index: 3;
}

.proj__desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.75;
}

.proj__tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px 18px;
  list-style: none;
  margin-bottom: 16px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.proj--reversed .proj__tech {
  justify-content: flex-start;
}

.proj__links {
  display: flex;
  justify-content: flex-end;
  gap: 14px;
}

.proj--reversed .proj__links {
  justify-content: flex-start;
}

.proj__icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: color var(--transition), transform var(--transition);
}

.proj__icon-link svg {
  width: 20px;
  height: 20px;
}

.proj__icon-link:hover {
  color: var(--accent);
  transform: translateY(-3px);
}

/* ── Mobile: stack ── */
@media (max-width: 900px) {
  .proj,
  .proj--reversed {
    display: block;
  }

  .proj__image-wrap,
  .proj--reversed .proj__image-wrap {
    width: 100%;
    margin-bottom: 24px;
  }

  .proj__content,
  .proj--reversed .proj__content {
    text-align: left;
  }

  .proj__tech,
  .proj--reversed .proj__tech {
    justify-content: flex-start;
  }

  .proj__links,
  .proj--reversed .proj__links {
    justify-content: flex-start;
  }
}
</style>
