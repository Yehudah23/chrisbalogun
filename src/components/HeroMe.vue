<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <p class="hero-kicker">Independent research portfolio <span></span> 2024—present</p>
        <h1 class="hero-title">Mr. Chris Balogun</h1>
        <h2 class="hero-subtitle">Biotechnology Research Scientist</h2>
        <p class="hero-lead">
          Advancing the frontiers of biotechnology through innovative research in molecular biology, genetics, and sustainable solutions for the future.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollToSection('publications')">Explore research <span>↗</span></button>
          <button class="btn btn-outline-primary" @click="goToContact">Get in touch</button>
        </div>
      </div>
      <div class="hero-image-wrapper">
        <img
          src="../assets/WhatsApp Image 2025-09-10 at 17.48.52_3aacd13a.jpg"
          alt="Biotechnology Laboratory"
          class="hero-image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    goToContact() {
      this.$router.push({ name: 'contact' });
    }
  }
};
</script>

<style scoped>
.hero-section {
  background: var(--bg);
  padding: 5.5rem 1.5rem 5rem;
  border-bottom: 1px solid var(--line);
  overflow: hidden;
}
.hero-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1160px;
  margin: 0 auto;
  gap: 5rem;
}
.hero-content {
  flex: 1 1 350px;
  min-width: 300px;
  max-width: 590px;
}
.hero-kicker {
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 1.4rem;
}
.hero-kicker span {
  display: inline-block;
  width: 2rem;
  height: 1px;
  margin: 0 0.6rem 0.25rem;
  background: var(--accent);
}
.hero-title {
  font-family: Georgia, serif;
  font-size: clamp(3.2rem, 6vw, 5.8rem);
  line-height: 0.98;
  font-weight: 400;
  letter-spacing: -0.04em;
  margin-bottom: 0.5rem;
}
.hero-subtitle {
  font-size: 1.3rem;
  color: var(--accent-dark);
  font-family: Georgia, serif;
  font-weight: 400;
  margin-bottom: 1.2rem;
}
.hero-lead {
  font-size: 1.1rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 2rem;
}
.hero-actions {
  display: flex;
  gap: 0.8rem;
}
.btn {
  padding: 0.6rem 1.4rem;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-primary {
  background: var(--accent-dark);
  color: #fff;
}
.btn-primary:hover {
  background: var(--accent);
}
.btn-outline-primary {
  background: #fff;
  color: var(--accent-dark);
  border: 1px solid var(--accent-dark);
}
.btn-outline-primary:hover {
  background: var(--accent-dark);
  color: #fff;
}
.hero-image-wrapper {
  flex: 1 1 300px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
}
.hero-image {
  max-width: 350px;
  width: 100%;
  display: block;
  border-radius: 2px;
  box-shadow: 18px 18px 0 #d7e7e2;
  object-fit: cover;
}
@media (max-width: 900px) {
  .hero-container {
    flex-direction: column-reverse;
    gap: 2.5rem;
  }
  .hero-image {
    max-width: min(350px, 100%);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-lead {
    font-size: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 1.5rem 0.8rem;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-lead {
    font-size: 0.95rem;
  }
  
  .btn {
    font-size: 0.95rem;
    padding: 0.7rem 1.2rem;
  }
}
</style>