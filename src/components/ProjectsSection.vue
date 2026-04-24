<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'

const categories = ['All', ...new Set(projects.map(p => p.category))]
const activeCategory = ref('All')

const filtered = computed(() =>
  activeCategory.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory.value)
)
</script>

<template>
  <section id="projects" class="projects section">
    <div class="container">

      <div class="projects__header">
        <p class="section-label">My work</p>
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
          A selection of projects spanning web development, design systems, mobile apps,
          data platforms, and creative experiments.
        </p>
      </div>

      <div class="projects__filters" role="group" aria-label="Filter projects by category">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-btn"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <Transition name="fade" mode="out-in">
        <div :key="activeCategory" class="projects__grid">
          <ProjectCard
            v-for="project in filtered"
            :key="project.id"
            :project="project"
          />
        </div>
      </Transition>

    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--bg-primary);
}

.projects__header {
  margin-bottom: 40px;
}

.projects__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 48px;
}

.filter-btn {
  padding: 7px 18px;
  border-radius: 100px;
  border: 1px solid var(--border);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  transition: all var(--transition);
}
.filter-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.filter-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (min-width: 640px) {
  .projects__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .projects__grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
