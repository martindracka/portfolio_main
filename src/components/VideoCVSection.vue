<script setup>
const YOUTUBE_VIDEO_ID = 'neXHglQGSac'
const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&color=white`
</script>

<template>
  <section id="video-cv" class="video-cv section">
    <div class="container">

      <div class="video-cv__header">
        <p class="section-label">See me in action</p>
        <h2 class="section-title">Video CV</h2>
        <p class="section-subtitle">
          I believe video is the most powerful way to deliver any message. To learn more about my journey and why I do what I do, check out this video.
        </p>
      </div>

      <div class="video-cv__wrapper">
        <div class="video-cv__frame-box">
          <iframe
            :src="embedUrl"
            class="video-cv__iframe"
            title="Martin Dracka – Video CV"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.video-cv {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.video-cv__header {
  margin-bottom: 48px;
}

.video-cv__wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.video-cv__frame-box {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card), var(--shadow-accent);
}

.video-cv__iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
