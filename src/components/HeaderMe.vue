<template>
  <header class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">Mr.Chris Balogun</div>
      <nav :class="['navbar-links', { open: isMenuOpen }]">
        <a href="about" @click.prevent="scrollToSection('about')">About</a>
        <a href="cv" @click.prevent="scrollToSection('cv')">CV</a>
        <a href="publications" @click.prevent="scrollToSection('publications')">Publications</a>
        <a href="contact" @click.prevent="scrollToSection('contact')">Contact</a>
        <router-link to="/login" class="login-link" @click="closeMenu">Admin Login</router-link>
      </nav>
      <button class="navbar-toggle" @click="toggleMenu">
        <span v-if="!isMenuOpen">&#9776;</span>
        <span v-else>&times;</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.closeMenu();
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 100;
}
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
}
.navbar-brand {
  font-weight: bold;
  font-size: 1.3rem;
  color: #007bff;
}
.navbar-links {
  display: flex;
  gap: 1.5rem;
}
.navbar-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.navbar-links a:hover {
  color: #007bff;
}
.navbar-links .login-link {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white !important;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.navbar-links .login-link:hover {
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
.navbar-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  padding: 0.25rem;
}

/* Tablet responsiveness */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 0.75rem 1.2rem;
  }
  
  .navbar-brand {
    font-size: 1.2rem;
  }
  
  .navbar-links {
    gap: 1.2rem;
  }
  
  .navbar-links a {
    font-size: 0.95rem;
  }
  
  .navbar-links .login-link {
    padding: 0.45rem 1rem;
    font-size: 0.9rem;
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .navbar {
    border-bottom: 2px solid #e5e5e5;
  }
  
  .navbar-container {
    padding: 0.7rem 1rem;
  }
  
  .navbar-brand {
    font-size: 1.1rem;
  }
  
  .navbar-links {
    position: absolute;
    top: 60px;
    right: 0;
    background: #fff;
    flex-direction: column;
    width: 220px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    padding: 1rem;
    gap: 0.8rem;
    display: none;
    border-radius: 0 0 0 8px;
    z-index: 1000;
  }
  
  .navbar-links.open {
    display: flex;
  }
  
  .navbar-links a {
    padding: 0.6rem 0.8rem;
    border-radius: 4px;
    transition: background 0.2s;
  }
  
  .navbar-links a:hover {
    background: #f8f9fa;
  }
  
  .navbar-links .login-link {
    padding: 0.7rem 1rem;
    text-align: center;
    margin-top: 0.5rem;
  }
  
  .navbar-links .login-link:hover {
    transform: none;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .navbar-toggle {
    display: block;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .navbar-container {
    padding: 0.6rem 0.8rem;
  }
  
  .navbar-brand {
    font-size: 1rem;
  }
  
  .navbar-links {
    width: 180px;
    padding: 0.8rem;
    top: 55px;
  }
  
  .navbar-links a {
    font-size: 0.9rem;
    padding: 0.5rem 0.6rem;
  }
  
  .navbar-links .login-link {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .navbar-toggle {
    font-size: 1.8rem;
  }
}
</style>