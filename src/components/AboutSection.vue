<script setup>
const skills = [
  'Graphic Design', 'Adobe Illustrator', 'Adobe Photoshop', 'InDesign', 'Figma',
  'UI/UX Design', 'Web Design', 'HTML/CSS', 'Vue.js', 'Typography',
  'Brand Identity', 'Visual Storytelling', 'Video Production', 'Adobe Premiere',
  'After Effects', 'Photography', 'Marketing', 'Social Media', 'Content Strategy',
  'Motion Design'
]
</script>

<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="about__grid">

        <!-- Story column -->
        <div class="about__story">

          <div class="about__block">
            <p class="section-label">What is my story?</p>
            <p class="about__bio">
              It all started as passion for drawing during my childhood. This led me to study
              Graphic Design at high school and ultimately resolved in pursuing degree in
              Multimedia Design at business academy in Denmark.
            </p>
            <p class="about__bio">
              As for now I do mostly Graphic Design, but thanks to evolution of my personality
              and interests, I also found love for Marketing, Web Design, Visual Storytelling,
              Video Production and many more things.
            </p>
          </div>

          <div class="about__block">
            <p class="section-label">What is Multimedia Design?</p>
            <p class="about__bio">
              Businesses are moving their audience engagement and advertising to online platforms
              which emphasize visual content that informs, educates and entertains. This is done
              through different media formats such as text, images, graphics, audio and video.
            </p>
            <p class="about__bio">
              For me personally, it means to deliver impactful message in most suitable format
              and way to the people at right place and right time.
            </p>
          </div>

        </div>

        <!-- Skills column -->
        <div class="about__skills-col">
          <p class="about__skills-label">Technologies I work with</p>
          <div class="about__skills">
            <span
              v-for="skill in skills"
              :key="skill"
              class="skill-tag"
            >
              {{ skill }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
}

.about__block {
  margin-bottom: 40px;
}
.about__block:last-child {
  margin-bottom: 0;
}

.about__bio {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 16px;
}
.about__bio:last-child {
  margin-bottom: 0;
}

.about__skills-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.about__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.82rem;
  color: var(--text-secondary);
  background: var(--bg-card);
  transition: all var(--transition);
  cursor: default;
}
.skill-tag:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-glow);
}

@media (min-width: 900px) {
  .about__grid {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: start;
  }
}
</style>
