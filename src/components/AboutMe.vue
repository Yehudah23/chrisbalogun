<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1707944745900-ae9f750f2c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
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
export default {
  data() {
    return {
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
  background: #f8fafc;
  padding: 3rem 0 2rem 0;
}
.about-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2.5rem;
}
.about-image-wrapper {
  flex: 1 1 320px;
  min-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-image {
  max-width: 350px;
  width: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  object-fit: cover;
}
.about-content {
  flex: 2 1 400px;
  min-width: 300px;
}
.about-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #2a2a2a;
  margin-bottom: 0.5rem;
}
.about-lead {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
}
.about-subtitle {
  font-size: 1.2rem;
  color: #007bff;
  margin-bottom: 0.7rem;
  margin-top: 1.2rem;
}
.about-text {
  color: #666;
  margin-bottom: 1rem;
}
.about-expertise {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin: 2rem 0 1rem 0;
}
.about-expertise-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 1rem 1.2rem;
  min-width: 180px;
  flex: 1 1 180px;
}
.about-expertise-icon {
  font-size: 2rem;
  color: #007bff;
  margin-top: 0.1rem;
}
.about-expertise-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}
.about-expertise-desc {
  font-size: 0.97rem;
  color: #555;
}
@media (max-width: 900px) {
  .about-container {
    flex-direction: column;
    gap: 2.5rem;
  }
  .about-image {
    max-width: 90vw;
  }
}
</style>