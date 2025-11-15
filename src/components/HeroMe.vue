<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Mr. Chris Balogun</h1>
        <h2 class="hero-subtitle">Biotechnology Research Scientist</h2>
        <p class="hero-lead">
          Advancing the frontiers of biotechnology through innovative research in molecular biology, genetics, and sustainable solutions for the future.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollToSection('publications')">View Publications</button>
          <button class="btn btn-outline-primary" @click="scrollToSection('contact')">Get in Touch</button>
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
    }
  }
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to bottom right, #f3f6fd 0%, #e9f0fb 100%);
  padding: 3rem 0 2rem 0;
}
.hero-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}
.hero-content {
  flex: 1 1 350px;
  min-width: 300px;
  max-width: 500px;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2a2a2a;
  margin-bottom: 0.5rem;
}
.hero-subtitle {
  font-size: 1.3rem;
  color: #007bff;
  margin-bottom: 1.2rem;
}
.hero-lead {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}
.hero-actions {
  display: flex;
  gap: 1rem;
}
.btn {
  padding: 0.6rem 1.4rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-primary {
  background: #007bff;
  color: #fff;
}
.btn-primary:hover {
  background: #0056b3;
}
.btn-outline-primary {
  background: #fff;
  color: #007bff;
  border: 2px solid #007bff;
}
.btn-outline-primary:hover {
  background: #007bff;
  color: #fff;
}
.hero-image-wrapper {
  flex: 1 1 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
}
.hero-image {
  max-width: 350px;
  width: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  object-fit: cover;
}
@media (max-width: 900px) {
  .hero-container {
    flex-direction: column-reverse;
    gap: 2.5rem;
  }
  .hero-image {
    max-width: 90vw;
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