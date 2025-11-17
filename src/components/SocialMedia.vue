<template>
  <div class="social-profile">
    <div class="profile-header">
      <div class="profile-avatar">
        <span class="profile-initial">{{ nameInitial }}</span>
      </div>
      
      <div class="profile-info">
        <h2 class="profile-name">{{ name.split(' ')[0] }} {{ name.split(' ')[1] }}</h2>
        <h3 class="profile-title">{{ title }}</h3>
        <p class="profile-bio">{{ bio }}</p>
        
        <div class="social-links">
          <a :href="githubUrl" target="_blank" class="social-link github">
            <i class="social-icon">GitHub</i>
          </a>
          <a :href="linkedinUrl" target="_blank" class="social-link linkedin">
            <i class="social-icon">LinkedIn</i>
          </a>
          <a :href="twitterUrl" target="_blank" class="social-link twitter" rel="noopener noreferrer">
            <i class="social-icon">Twitter</i>
          </a>
          <a :href="instagramUrl" target="_blank" class="social-link instagram">
            <i class="social-icon">Instagram</i>
          </a>
          <a :href="facebookUrl" target="_blank" class="social-link facebook">
            <i class="social-icon">Facebook</i>
          </a>
          <a :href="whatsappUrl" target="_blank" class="social-link whatsapp">
            <i class="social-icon">Whatsapp</i>
          </a>
        </div>
        
        <div class="scroll-down">
          <a href="#about" @click.prevent="scrollToAbout" class="scroll-link">
            Scroll Down
            <span class="scroll-arrow">↓</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  data() {
    return {
      name: 'Chris Balogun',
      title: 'Biotechnology Research Scientist',
      bio: 'Advancing the frontiers of biotechnology through innovative research in molecular biology, genetics, and sustainable solutions for the future.',
      githubUrl: 'https://github.com/chrisbalogun',
      linkedinUrl: 'https://linkedin.com/in/chrisbalogun',
  twitterUrl: 'https://x.com/ChrisBalogun001?t=1JZVC_Nw4AQPQLm8MHtxZA&s=09',
      instagramUrl: 'https://instagram.com/chrisbalogun',
      facebookUrl: 'https://facebook.com/chrisbalogun'
    };
  },
  computed: {
    nameInitial() {
      return this.name.charAt(0);
    }
  },
  methods: {
    scrollToContact() {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToAbout() {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.social-profile {
  background: linear-gradient(to bottom right, #f3f6fd 0%, #e9f0fb 100%);
  padding: 2rem 0;
  border-radius: 1rem;
  margin: 1rem 0;
}

.profile-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2rem;
  padding: 0 1.5rem;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 123, 255, 0.2);
}

.profile-initial {
  font-size: 3rem;
  font-weight: bold;
  color: white;
}

.profile-info {
  flex: 1;
  min-width: 280px;
  max-width: 600px;
  text-align: left;
}

.profile-name {
  font-size: 2.2rem;
  font-weight: bold;
  color: #2a2a2a;
  margin-bottom: 0.3rem;
}

.profile-title {
  font-size: 1.3rem;
  color: #007bff;
  margin-bottom: 1rem;
}

.profile-bio {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.github {
  background: #24292e;
  color: white !important;
}

.linkedin {
  background: #0077b5;
  color: white !important;
}

.twitter {
  background: #1DA1F2;
  color: white !important;
}

.instagram {
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
  color: white !important;
}

.facebook {
  background: #4267B2;
  color: white !important;
}

.contact {
  background: #007bff;
  color: white !important;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.social-icon {
  font-weight: 500;
  color: white !important;
}

.scroll-down {
  margin-top: 2rem;
  text-align: center;
}

.scroll-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.scroll-arrow {
  font-size: 1.2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-info {
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>