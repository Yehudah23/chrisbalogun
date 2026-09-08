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
          <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
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
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="social-link whatsapp">
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
    githubUrl: 'https://github.com/ChrisBalogun',
    linkedinUrl: 'https://www.linkedin.com/in/chris-balogun-3aa518257?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    twitterUrl: 'https://x.com/ChrisBalogun001?t=1JZVC_Nw4AQPQLm8MHtxZA&s=09',
    instagramUrl: 'https://www.instagram.com/chrisbalogun001?igsh=MTJmdjAyejJ3MDEzdQ==',
    facebookUrl: 'https://www.facebook.com/share/1BRqJDrvcF/',
    whatsappUrl: 'https://wa.me/qr/57OYZETW4AE5F1'
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
  background: var(--accent-dark);
  padding: 2.2rem 0;
  margin: 0;
}

.profile-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2.5rem;
  padding: 0 1.5rem;
}

.profile-avatar {
  width: 92px;
  height: 92px;
  border: 1px solid rgba(255,255,255,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-initial {
  font-family: Georgia, serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: white;
}

.profile-info {
  flex: 1;
  min-width: 0;
  width: 100%;
  max-width: 600px;
  text-align: left;
}

.profile-name {
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff !important;
  margin-bottom: 0.3rem;
}

.profile-title {
  font-size: 1.3rem;
  color: #b9ded7 !important;
  margin-bottom: 1rem;
}

.profile-bio {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.78) !important;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.7rem;
  border: 1px solid rgba(255,255,255,0.28);
  border-radius: 2px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.github {
  background: transparent;
  color: white !important;
}

.linkedin {
  background: transparent;
  color: white !important;
}

.twitter {
  background: transparent;
  color: white !important;
}

.instagram {
  background: transparent;
  color: white !important;
}

.facebook {
  background: transparent;
  color: white !important;
}

.contact {
  background: #007bff;
  color: white !important;
}

.social-link:hover {
  border-color: #b9ded7;
  transform: translateY(-2px);
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