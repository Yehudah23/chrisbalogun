<template>
  <section class="hero-section">
    <div class="hero-bg-pattern"></div>
    <div class="hero-container">
      <div class="hero-content">
        <span class="hero-kicker">Molecular Biology & Bioinformatics</span>
        <h1 class="hero-title">Chris Balogun</h1>
        <h2 class="hero-subtitle">Researcher bridging wet-lab biology with computational discovery</h2>
        <p class="hero-lead">
          A molecular biology/biotechnology researcher developing expertise in bioinformatics and computational biology, with experience spanning molecular laboratory techniques, immunoinformatics, vaccine design and computational approaches to drug discovery.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollToSection('publications')">
            <span>Explore Research</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button class="btn btn-outline-primary" @click="goToContact">
            <span>Get in Touch</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </button>
        </div>
        <!-- <div class="hero-trust">
          <div class="trust-item">
            <span class="trust-value">1st Class</span>
            <span class="trust-label">Honours</span>
          </div>
          <div class="trust-divider"></div>
          <div class="trust-item">
            <span class="trust-value">5+</span>
            <span class="trust-label">Research Areas</span>
          </div>
          <div class="trust-divider"></div>
          <div class="trust-item">
            <span class="trust-value">MSc</span>
            <span class="trust-label">In Progress</span>
          </div>
        </div> -->
      </div>
      <div class="hero-image-wrapper">
        <div class="hero-image-frame">
          <img
            src="/IMG-20260911-WA0012.jpg.jpeg"
            alt="Chris Balogun - Molecular Biology & Bioinformatics Researcher"
            class="hero-image"
          />
          <div class="image-glow"></div>
        </div>
        <div class="floating-badge">
          <div class="badge-icon" aria-hidden="true">DNA</div>
          <div class="badge-text">
            <span class="badge-title">Bioinformatics</span>
            <span class="badge-sub">Immunoinformatics • Drug Discovery</span>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator" @click="scrollToSection('about')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
    </div>
  </section>
</template>

<script>
export default {
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
  position: relative;
  background: var(--bg);
  padding: 6.5rem 1.5rem 6rem;
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
  position: relative;
  z-index: 1;
}
.hero-content {
  flex: 1 1 350px;
  min-width: 0;
  max-width: 590px;
}
.hero-kicker {
  display: block;
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
.hero-image-frame {
  position: relative;
  width: min(100%, 390px);
  aspect-ratio: 4 / 5;
  padding: 0.75rem;
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: 1.1rem 1.1rem 0 var(--warm);
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
  min-width: 0;
}
.hero-image {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 2px;
  object-fit: cover;
}
.image-glow {
  position: absolute;
  inset: 0.75rem;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.floating-badge {
  position: absolute;
  right: -1.25rem;
  bottom: 1.75rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  max-width: 235px;
  padding: 0.8rem 1rem;
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: 0 0.75rem 2rem rgba(23, 52, 58, 0.12);
}
.badge-icon {
  display: grid;
  place-items: center;
  width: 2.1rem;
  height: 2.1rem;
  flex: 0 0 2.1rem;
  color: var(--surface);
  background: var(--accent-dark);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.badge-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.badge-title {
  color: var(--text);
  font-size: 0.78rem;
  font-weight: 700;
}
.badge-sub {
  color: var(--muted);
  font-size: 0.68rem;
  line-height: 1.35;
}
.hero-bg-pattern {
  position: absolute;
  inset: 0 0 auto auto;
  width: 42%;
  height: 100%;
  opacity: 0.45;
  background-image: radial-gradient(var(--line) 1px, transparent 1px);
  background-size: 18px 18px;
  mask-image: linear-gradient(to left, black, transparent);
}
.scroll-indicator {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  display: grid;
  place-items: center;
  color: var(--accent);
  cursor: pointer;
  transform: translateX(-50%);
  animation: hero-bounce 2s ease-in-out infinite;
}
@keyframes hero-bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 0.35rem); }
}
@media (max-width: 900px) {
  .hero-container {
    flex-direction: column-reverse;
    gap: 2.5rem;
  }
  .hero-image {
    max-width: min(350px, 100%);
  }
  .floating-badge {
    right: -0.5rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3.5rem 1rem 4.5rem;
  }
  
  .hero-title {
    font-size: clamp(2.4rem, 12vw, 3.5rem);
    overflow-wrap: anywhere;
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
    align-items: stretch;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
  .hero-image-frame {
    width: min(100%, 350px);
  }
  .floating-badge {
    right: 0;
    bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 2.5rem 0.8rem 4rem;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    line-height: 1.35;
  }
  
  .hero-lead {
    font-size: 0.95rem;
  }
  
  .btn {
    font-size: 0.95rem;
    padding: 0.7rem 1.2rem;
  }
  .floating-badge {
    position: relative;
    right: auto;
    bottom: auto;
    align-self: flex-end;
    margin-top: -1rem;
    max-width: calc(100% - 1rem);
  }
}
</style>