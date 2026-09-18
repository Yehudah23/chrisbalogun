<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-image-wrapper">
        <div class="about-image-frame">
          <img
            :src="imageSrc"
            alt="Chris Balogun - Molecular Biology & Bioinformatics Researcher"
            class="about-image"
          />
          <div class="image-accent"></div>
        </div>
        <div class="about-stats">
          <div class="stat-item">
            <span class="stat-number">1st</span>
            <span class="stat-label">Class Honours</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5+</span>
            <span class="stat-label">Research Areas</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">MSc</span>
            <span class="stat-label">In Progress</span>
          </div>
        </div> 
       </div>
      <div class="about-content">
        <div class="content-header">
          <span class="section-tag">About Me</span>
          <h2 class="about-title">Bridging Wet-Lab Biology with Computational Discovery</h2>
        </div>
        <div class="about-text-block">
          <p class="about-lead">
            I am Chris Olamide Balogun, a Molecular Biology and Bioinformatics researcher working at the intersection of biotechnology and computational biology. My interests include immunoinformatics, vaccine design and computational drug discovery.
          </p>
          <p class="about-text">
            I hold a B.Tech in Animal Nutrition and Biotechnology from Ladoke Akintola University of Technology, where I graduated with <strong>First Class honours</strong>. I am currently pursuing an MSc in Molecular Biology/Bioinformatics.
          </p>
          <p class="about-text">
            My experience combines DNA extraction, PCR and sequencing with sequence analysis, antigen prediction, vaccine design, molecular docking and ADMET analysis. I also enjoy scientific writing, research communication and mentoring.
          </p>
          <p class="about-text about-goal">
            My goal is to integrate experimental biology, bioinformatics and computational methods to support better therapeutic and preventive solutions.
          </p>
        </div>
      </div>
      <div class="about-expertise">
        <h3 class="about-subtitle">Technical Expertise</h3>
        <div class="skills-grid">
          <div class="skill-category" v-for="(skill, index) in skills" :key="index">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h4 class="skill-category-title">{{ skill.title }}</h4>
            <p class="skill-items">{{ skill.items }}</p>
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
      skills: [
        {
          icon: '🧬',
          title: 'Bioinformatics',
          items: 'NCBI • BV-BRC • RAPT • sequence analysis • genome/protein analysis'
        },
        {
          icon: '🛡️',
          title: 'Immunoinformatics',
          items: 'VaxiJen • NetCTLpan • NetMHCpan • C-ImmSim • ToxinPred • AllerTOP'
        },
        {
          icon: '🔬',
          title: 'Molecular Biology',
          items: 'DNA extraction • PCR • sequencing • molecular biology workflows'
        },
        {
          icon: '💊',
          title: 'Computational Drug Discovery',
          items: 'Molecular docking • virtual screening • ADMET • QSAR • molecular dynamics'
        },
        {
          icon: '📊',
          title: 'Research & Data Analysis',
          items: 'Statistical analysis • scientific writing • literature review • data visualisation'
        }
      ]
    };
  }
};
</script>

<style scoped>
.about-section {
  background: #fff;
  padding: 7rem 1.5rem;
  border-bottom: 1px solid var(--line);
  overflow: hidden;
  position: relative;
}
.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
}
.about-container {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 6rem;
  min-width: 0;
}
.about-image-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}
.about-image-frame {
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 4/4.5;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 
    0 30px 60px -12px rgba(20, 125, 120, 0.25),
    0 0 0 1px rgba(20, 125, 120, 0.08);
}
.about-image-frame::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--accent), #1a9a95);
  opacity: 0.15;
  z-index: -1;
  filter: blur(20px);
}
.about-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.6s ease;
}
.about-image-frame:hover .about-image {
  transform: scale(1.03);
}
.image-accent {
  position: absolute;
  bottom: -20px;
  left: -20px;
  right: -20px;
  height: 60px;
  background: linear-gradient(90deg, var(--accent), #1a9a95);
  border-radius: 4px;
  opacity: 0.15;
  z-index: -1;
}
.about-stats {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 420px;
  padding: 1.5rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(20, 125, 120, 0.08);
}
.stat-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}
.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: var(--line);
}
.stat-number {
  font-family: Georgia, serif;
  font-size: 2rem;
  font-weight: 400;
  color: var(--accent-dark);
  line-height: 1.2;
}
.stat-label {
  font-size: 0.8rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.2rem;
}
.about-content {
  padding-top: 1rem;
  min-width: 0;
}
.about-expertise {
  grid-column: 1 / -1;
  padding-top: 1rem;
  min-width: 0;
}
.content-header {
  margin-bottom: 2rem;
}
.section-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--warm);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  margin-bottom: 1rem;
  border: 1px solid var(--line);
}
.about-title {
  font-family: Georgia, serif;
  font-size: clamp(2.5rem, 4.5vw, 3.5rem);
  line-height: 1.15;
  font-weight: 400;
  color: var(--text);
  letter-spacing: -0.02em;
}
.about-text-block {
  margin-bottom: 2rem;
}
.about-lead {
  font-size: 1.08rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 1.15rem;
  font-weight: 400;
}
.about-text {
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 1rem;
}
.about-text strong {
  color: var(--text);
  font-weight: 600;
}
.about-goal {
  border-left: 3px solid var(--accent);
  padding-left: 1.5rem;
  margin-top: 1rem !important;
  background: var(--warm);
  padding: 1.15rem 1.25rem;
  border-radius: 0 4px 4px 0;
  font-style: italic;
}
.about-subtitle {
  font-family: Georgia, serif;
  font-size: 1.4rem;
  color: var(--accent-dark);
  font-weight: 400;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  position: relative;
  display: inline-block;
}
.about-subtitle::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
  min-width: 0;
}
.skill-category {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 1.15rem 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #1a9a95);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.skill-category:hover {
  border-color: var(--accent);
  box-shadow: 0 12px 30px -10px rgba(20, 125, 120, 0.2);
  transform: translateY(-4px);
}
.skill-category:hover::before {
  transform: scaleX(1);
}
.skill-icon {
  font-size: 1.5rem;
  margin-bottom: 0.55rem;
  display: inline-block;
  filter: drop-shadow(0 2px 4px rgba(20, 125, 120, 0.2));
}
.skill-category-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.6rem;
  letter-spacing: -0.01em;
}
.skill-items {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.55;
}
@media (max-width: 1100px) {
  .skills-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 1024px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .about-image-wrapper {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    max-width: 600px;
    margin: 0 auto;
  }
  .about-image-frame {
    max-width: 350px;
    flex-shrink: 0;
  }
  .about-expertise {
    padding-top: 0;
  }
  .about-stats {
    max-width: 220px;
    flex-direction: column;
    min-width: 200px;
  }
  .stat-item:not(:last-child)::after {
    display: none;
  }
  .stat-item:not(:last-child)::before {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 1px;
    background: var(--line);
  }
}
@media (max-width: 768px) {
  .about-section {
    padding: 4rem 1rem;
  }
  .about-image-wrapper {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }
  .about-image-frame {
    width: min(100%, 340px);
    max-width: 340px;
    aspect-ratio: 4 / 4.8;
    margin: 0 auto;
  }
  .about-content {
    padding-top: 0;
  }
  .about-stats {
    width: min(100%, 340px);
    max-width: 340px;
    min-width: 0;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
  }
  .stat-item:not(:last-child)::before {
    display: none;
  }
  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background: var(--line);
  }
  .about-title {
    font-size: clamp(2rem, 9vw, 2.6rem);
    overflow-wrap: anywhere;
  }
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 480px) {
  .about-section {
    padding: 3.5rem 0.8rem;
  }
  .about-image-frame {
    width: min(100%, 300px);
    max-width: 300px;
    aspect-ratio: 4 / 4.8;
  }
  .about-stats {
    width: min(100%, 300px);
    max-width: 300px;
    gap: 0.6rem;
    padding: 0.85rem 0.5rem;
  }
  .stat-number {
    font-size: 1.4rem;
  }
  .stat-label {
    font-size: 0.65rem;
  }
}
</style>