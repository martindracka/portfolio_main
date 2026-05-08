<script setup>
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projects" class="projects section">
    <div class="container">

      <div class="projects__header">
        <p class="section-label">My work</p>
        <h2 class="section-title">Featured Projects</h2>
      </div>

      <div class="projects__list">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--bg-primary);
}

.projects__header {
  margin-bottom: 60px;
}

.projects__list {
  display: flex;
  flex-direction: column;
  gap: 80px;
}
</style>
