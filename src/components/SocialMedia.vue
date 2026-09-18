<template>
  <div class="social-profile">
    <div class="profile-header">
      <div class="profile-avatar-wrapper">
        <div class="profile-avatar">
          <span class="profile-initial">{{ nameInitial }}</span>
        </div>
        <div class="avatar-ring"></div>
        <div class="avatar-ring ring-2"></div>
      </div>
      
      <div class="profile-info">
        <h2 class="profile-name">{{ name.split(' ')[0] }} {{ name.split(' ')[1] }}</h2>
        <h3 class="profile-title">{{ title }}</h3>
        <p class="profile-bio">{{ bio }}</p>
        
        <div class="social-links">
          <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="social-link linkedin" aria-label="LinkedIn">
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span class="social-label">LinkedIn</span>
          </a>
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="social-link github" aria-label="GitHub">
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            <span class="social-label">GitHub</span>
          </a>
          <a :href="twitterUrl" target="_blank" rel="noopener noreferrer" class="social-link twitter" aria-label="Twitter">
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            <span class="social-label">X</span>
          </a>
          <a :href="instagramUrl" target="_blank" rel="noopener noreferrer" class="social-link instagram" aria-label="Instagram">
            <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            <span class="social-label">Instagram</span>
          </a>
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="social-link whatsapp" aria-label="WhatsApp">
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.1-.173.199-.355.046-.529-.149-.174-.547-.643-1.058-1.128-.51-.484-1.018-.854-1.304-1.007-.287-.149-1.044-.045-1.044.574 0 .45.227.893.628 1.187.585.44 1.326 1.493 1.87 2.303.154.23.203.42.194.558-.01.15-.073.258-.228.375-.135.102-.436.351-.643.475-.226.135-.714.49-1.065 1.093-.607 1.05-.733 1.637-.733 1.637s.277 1.407 1.213 3.134c.22.395.415.736.587 1.024.165.272.207.55.12.823-.098.287-.404.59-.776.788-.372.198-.978.444-1.52.788-.542.344-1.056.592-1.51.75-.454.166-.97.234-1.476.234-.506 0-1.01-.073-1.5-.234-.49-.166-1.19-.388-1.63-.805-.53-.48-.624-.855-.624-.855l-.01-.015c-.344-.17-.713-.345-1.04-.47-.68-.27-1.43-.72-2.047-1.68C.919 13.668 0 12.28 0 10.273c0-2.007 1.686-3.64 3.75-3.64 1.868 0 3.406 1.43 3.726 3.34.075.445.277.87.52 1.22.246.348.57.71.947 1.096.375.384.877.763 1.267 1.116.484.44 1.01.868 1.56 1.25.54.375 1.03.687 1.47.93.44.243.847.388 1.22.45.373.062.737.02 1.06-.167.324-.185.56-.54.56-.75 0-.078-.02-.195-.02-.293 0-.49.32-1.01.723-1.382.404-.373.898-.713 1.333-1.117.434-.404.886-.825 1.236-1.28.35-.454.635-.94.875-1.453.24-.514.39-1.068.39-1.612 0-.565-.218-1.02-.577-1.346-.358-.325-.82-.554-1.32-.598-.5-.044-1.347-.102-2.323-.444-1.097-.375-1.94-.99-2.437-1.587A37.34 37.34 0 0110.5 0C7.03 0 3.81 2.02 2.05 4.99 1.1 6.42.42 8.13.13 9.77 0 10.23.03 11.23.47 11.74a46.6 46.6 0 004.48 4.43 33.58 33.58 0 006.12 2.15c.67.05 1.34.08 2.01.08.68 0 1.35-.03 2.02-.08 3.29-.61 5.94-2.12 7.78-4.47.86-1.09 1.43-2.36 1.64-3.7.14-.95.1-1.9-.06-2.82z"/></svg>
            <span class="social-label">WhatsApp</span>
          </a>
        </div>
        
        <div class="scroll-down">
          <a href="#about" @click.prevent="scrollToAbout" class="scroll-link">
            <span>Explore My Work</span>
            <svg class="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
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
      title: 'Molecular Biology & Bioinformatics Researcher',
      bio: 'A molecular biology/biotechnology researcher developing expertise in bioinformatics and computational biology, with experience spanning molecular laboratory techniques, immunoinformatics, vaccine design and computational approaches to drug discovery.',
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
  padding: 3.5rem 0;
  margin: 0;
  position: relative;
  overflow: hidden;
}
.social-profile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(185, 222, 215, 0.4), transparent);
}
.social-profile::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(185, 222, 215, 0.2), transparent);
}

.profile-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  padding: 0 2rem;
}

.profile-avatar-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}
.profile-avatar {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #1a9a95);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 0 4px rgba(20, 125, 120, 0.2),
    0 20px 40px -10px rgba(20, 125, 120, 0.4),
    inset 0 0 0 1px rgba(255,255,255,0.1);
  z-index: 2;
}
.profile-initial {
  font-family: Georgia, serif;
  font-size: 3.5rem;
  font-weight: 400;
  color: white;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}
.avatar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  opacity: 0.3;
  animation: pulse-ring 3s ease-out infinite;
}
.avatar-ring.ring-2 {
  inset: -16px;
  animation-delay: 1s;
  opacity: 0.15;
}
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.05); opacity: 0.15; }
  100% { transform: scale(1); opacity: 0.3; }
}
.avatar-ring.ring-2 {
  animation: pulse-ring 3s ease-out infinite 1s;
}

.profile-info {
  flex: 1;
  min-width: 0;
  width: 100%;
  max-width: 650px;
  text-align: left;
}

.profile-name {
  font-family: Georgia, serif;
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 400;
  color: #fff !important;
  margin-bottom: 0.4rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.profile-title {
  font-size: 1.25rem;
  color: #b9ded7 !important;
  margin-bottom: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.01em;
}
.profile-bio {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.8) !important;
  margin-bottom: 2rem;
  line-height: 1.7;
  max-width: 580px;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.75rem 1.25rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}
.social-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: currentColor;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.social-link:hover::before {
  opacity: 0.1;
}
.social-link .social-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}
.social-link:hover .social-icon {
  transform: scale(1.1);
}
.social-label {
  position: relative;
  z-index: 1;
}

/* Brand colors */
.social-link.linkedin {
  background: rgba(10, 102, 194, 0.15);
  border: 1px solid rgba(10, 102, 194, 0.3);
  color: #0a66c2;
}
.social-link.linkedin:hover {
  background: #0a66c2;
  border-color: #0a66c2;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px -5px rgba(10, 102, 194, 0.4);
}

.social-link.github {
  background: rgba(36, 41, 46, 0.15);
  border: 1px solid rgba(36, 41, 46, 0.3);
  color: #24292e;
}
.social-link.github:hover {
  background: #24292e;
  border-color: #24292e;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px -5px rgba(36, 41, 46, 0.4);
}

.social-link.twitter {
  background: rgba(29, 161, 242, 0.15);
  border: 1px solid rgba(29, 161, 242, 0.3);
  color: #1da1f2;
}
.social-link.twitter:hover {
  background: #1da1f2;
  border-color: #1da1f2;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px -5px rgba(29, 161, 242, 0.4);
}

.social-link.instagram {
  background: linear-gradient(135deg, rgba(225, 48, 108, 0.15), rgba(253, 29, 29, 0.15), rgba(131, 58, 180, 0.15));
  border: 1px solid rgba(225, 48, 108, 0.3);
  color: #e1306c;
}
.social-link.instagram:hover {
  background: linear-gradient(135deg, #e1306c, #fd1d1d, #833ab4);
  border-color: transparent;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px -5px rgba(225, 48, 108, 0.4);
}

.social-link.whatsapp {
  background: rgba(37, 211, 102, 0.15);
  border: 1px solid rgba(37, 211, 102, 0.3);
  color: #25d366;
}
.social-link.whatsapp:hover {
  background: #25d366;
  border-color: #25d366;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px -5px rgba(37, 211, 102, 0.4);
}

.scroll-down {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}
.scroll-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #b9ded7 !important;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(185, 222, 215, 0.3);
  border-radius: 100px;
  transition: all 0.3s ease;
}
.scroll-link:hover {
  color: var(--accent-dark) !important;
  background: #b9ded7;
  border-color: #b9ded7;
  transform: translateY(-2px);
}
.scroll-arrow {
  animation: bounce 2s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

@media (max-width: 1024px) {
  .profile-header {
    gap: 2.5rem;
  }
  .profile-avatar-wrapper {
    width: 100px;
    height: 100px;
  }
  .profile-initial {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .social-profile {
    padding: 3rem 0;
  }
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  .profile-info {
    text-align: center;
  }
  .profile-bio {
    max-width: 100%;
  }
  .social-links {
    justify-content: center;
  }
  .social-link {
    padding: 0.65rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .social-profile {
    padding: 2.5rem 0;
  }
  .profile-avatar-wrapper {
    width: 90px;
    height: 90px;
  }
  .profile-initial {
    font-size: 2.5rem;
  }
  .social-links {
    gap: 0.5rem;
  }
  .social-link {
    padding: 0.6rem 0.9rem;
    gap: 0.5rem;
  }
  .social-label {
    display: none;
  }
  .social-link .social-icon {
    width: 22px;
    height: 22px;
  }
}
</style>