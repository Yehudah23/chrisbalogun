<template>
  <section id="about" class="about-section">
    <div class="about-container">
          <div class="about-image-wrapper">
            <img
              :src="imageSrc"
              alt="Research Scientist at Work"
              class="about-image"
            />
          </div>
      <div class="about-content">
        <h2 class="about-title">About Me</h2>
        <p class="about-lead">
          With about 7 years of experience in biotechnology research, I specialize in developing innovative solutions at the intersection of biology and technology. My work focuses on sustainable biotechnological applications for healthcare, agriculture, and environmental remediation.
        </p>
        <h3 class="about-subtitle">Research Philosophy</h3>
        <p class="about-text">
          I believe that biotechnology holds the key to addressing some of our most pressing global challenges. My research approach combines rigorous scientific methodology with innovative thinking to develop practical solutions that can make a real-world impact.
        </p>
        <p class="about-text">
          Through collaborative research and interdisciplinary partnerships, I strive to bridge the gap between laboratory discoveries and commercial applications, ensuring that scientific advances translate into tangible benefits for society.
        </p>
        <div class="about-expertise">
          <div v-for="(item, index) in expertise" :key="index" class="about-expertise-item">
            <span class="about-expertise-icon">{{ item.iconLabel }}</span>
            <div>
              <h4 class="about-expertise-title">{{ item.title }}</h4>
              <p class="about-expertise-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import broChris from '@/assets/brochris.png';

export default {
  data() {
    return {
      imageSrc: broChris,
      expertise: [
        { iconLabel: '🔬', title: "Molecular Biology", description: "Advanced techniques in gene expression, protein synthesis, and cellular mechanisms" },
        { iconLabel: '🧬', title: "Genetic Engineering", description: "CRISPR-Cas9, recombinant DNA technology, and synthetic biology applications" },
        { iconLabel: '⚗️', title: "Bioprocessing", description: "Fermentation technology, bioreactor design, and downstream processing" },
        { iconLabel: '👥', title: "Research Leadership", description: "Team management, project coordination, and cross-functional collaboration" }
      ]
    };
  }
};
</script>

<style scoped>
.about-section {
  background: #fff;
  padding: 6rem 1.5rem;
  border-bottom: 1px solid var(--line);
  overflow: hidden;
}
.about-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  max-width: 1160px;
  margin: 0 auto;
  gap: 5rem;
}
.about-image-wrapper {
  flex: 1 1 320px;
  position: relative;
  z-index: 1;
  min-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-image {
  max-width: 350px;
  width: 100%;
  display: block;
  border-radius: 2px;
  box-shadow: -16px 16px 0 #d7e7e2;
  object-fit: cover;
}
.about-content {
  flex: 2 1 400px;
  min-width: 300px;
}
.about-title {
  font-family: Georgia, serif;
  font-size: 3rem;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 0.5rem;
}
.about-lead {
  font-size: 1.1rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}
.about-subtitle {
  font-size: 1.2rem;
  color: var(--accent-dark);
  font-family: Georgia, serif;
  font-weight: 400;
  margin-bottom: 0.7rem;
  margin-top: 1.2rem;
}
.about-text {
  color: var(--muted);
  line-height: 1.75;
  margin-bottom: 1rem;
}
.about-expertise {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 2rem 0 1rem 0;
}
.about-expertise-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  background: var(--warm);
  border-left: 3px solid var(--accent);
  padding: 1rem;
  min-width: 180px;
  flex: 1 1 180px;
}
.about-expertise-icon {
  font-size: 1.5rem;
  color: var(--accent);
  margin-top: 0.1rem;
}
.about-expertise-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}
.about-expertise-desc {
  font-size: 0.97rem;
  color: var(--muted);
}
@media (max-width: 900px) {
  .about-container {
    flex-direction: column;
    gap: 2.5rem;
  }
  .about-image {
    max-width: min(350px, 100%);
  }
}
</style>