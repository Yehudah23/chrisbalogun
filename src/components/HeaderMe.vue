<template>
  <header class="navbar">
    <div class="navbar-container">
      <a href="/" class="navbar-brand" @click.prevent="$router.push({ name: 'Home' })">
        <span class="brand-mark"> <img src="/IMG_4384.PNG" alt="" width="100px" height="100px"></span>
        <span><h2>Chris Balogun</h2></span>
      </a>
      <nav :class="['navbar-links', { open: isMenuOpen }]">
        <router-link :to="{ name: 'about' }" @click="closeMenu">About</router-link>
        <router-link :to="{ name: 'cv' }" @click="closeMenu">CV</router-link>
        <router-link :to="{ name: 'publications' }" @click="closeMenu">Publications</router-link>
        <router-link :to="{ name: 'contact' }" @click="closeMenu">Contact</router-link>
  <!-- <a href="#" class="login-link" @click.prevent="openLogin">Admin Login</a> -->
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
    openLogin() {
      this.closeMenu();
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
.navbar {
  background: rgba(246, 248, 247, 0.94);
  border-bottom: 1px solid var(--line);
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
  padding: 1rem 1.5rem;
}
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text) !important;
  text-decoration: none;
  letter-spacing: 0.01em;
}
.navbar-brand strong, .navbar-brand small {
  display: block;
}
.navbar-brand strong {
  font-family: Georgia, serif;
  font-size: 1.05rem;
  font-weight: 600;
}
.navbar-brand small {
  color: var(--muted);
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.brand-mark {
  display: flex;
  place-items: center;
  /* width: 2.5rem; */
  /* height: 2.5rem; */
  /* border: 1px solid var(--accent); */
  color: var(--accent);
  /* font-size: 0.7rem;
  letter-spacing: 0.08em; */
}
.navbar-links {
  display: flex;
  align-items: center;
  gap: 1.7rem;
}
.navbar-links a {
  color: var(--text);
  text-decoration: none;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s;
}
.navbar-links a:hover {
  color: var(--accent);
}
.navbar-links .login-link {
  background: var(--accent-dark);
  color: white !important;
  padding: 0.65rem 1rem;
  border-radius: 2px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.navbar-links .login-link:hover {
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 5px 14px rgba(13, 87, 86, 0.18);
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
    top: 100%;
    right: 0.75rem;
    background: #fff;
    flex-direction: column;
    width: min(220px, calc(100vw - 1.5rem));
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
    width: min(180px, calc(100vw - 1.5rem));
    padding: 0.8rem;
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