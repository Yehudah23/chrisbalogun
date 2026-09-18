<template>
  <div id="app">
    <HeaderMe />

    <main id="content">
      <!-- Router is the single source of page content. -->
      <router-view />
    </main>
    <MyFooter />
  </div>
</template>

<script>

import HeaderMe from './components/HeaderMe.vue';
import MyFooter from './components/MyFooter.vue';




export default {
  name: 'App',
  components: {
    HeaderMe,
    MyFooter


  },
  //  data() {
  //   return {
  //     darkMode: false
  //   };
  // },
  // mounted() {
  //   // initialize from localStorage or system preference
  //   const saved = localStorage.getItem('darkMode');
  //   if (saved === null) {
  //     // prefer dark if user system prefers dark
  //     this.darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   } else {
  //     this.darkMode = saved === 'true';
  //   }
  //   this.applyBodyClass();
  // },
  // watch: {
  //   darkMode(newVal) {
  //     localStorage.setItem('darkMode', newVal);
  //     this.applyBodyClass();
  //   }
  // },
  // methods: {
  //   toggleDarkMode() {
  //     this.darkMode = !this.darkMode;
  //   },
  //   applyBodyClass() {
  //     if (this.darkMode) document.documentElement.classList.add('dark');
  //     else document.documentElement.classList.remove('dark');
  //   }
  // }
}
 
</script>

<style>

/* Global responsive reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

body {
  overflow-x: hidden;
  width: 100%;
}

/* Theme variables: light defaults */
:root {
  --bg: #f6f8f7;
  --surface: #ffffff;
  --text: #17343a;
  --muted: #60777a;
  --accent: #147d78;
  --accent-dark: #0d5756;
  --line: #d9e5e2;
  --card-bg: #ffffff;
  --warm: #eef4f1;
}

/* Dark theme overrides (when document.documentElement has .dark) */
:root.dark {
  --bg: #071019;
  --surface: rgba(10,12,16,0.6);
  --text: #e6eef8;
  --muted: #9aa6b2;
  --accent: #60a5fa;
  --card-bg: rgba(255,255,255,0.04);
}

#app {
  font-family: "Avenir Next", "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  background: var(--bg);
  text-align: left;
}

#content {
  min-height: calc(100vh - 140px);
}

footer, .my-footer {
  flex-shrink: 0;
}

/* Make all text follow the theme where possible (except in specific components) */
#app *:not(.login-card *):not(.login-container *):not(input):not(button):not(.btn-login) {
  color: var(--text);
}

.dark-toggle {
  position: fixed;
  right: 16px;
  top: 16px;
  z-index: 9999;
  background: var(--surface);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(2,6,23,0.2);
}

/* Ensure inputs and cards are readable in dark mode (but not login page) */
.input:not(.login-card input) {
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border-color: rgba(255,255,255,0.08);
}

.upload-card, .stat-card, .service-card {
  background: var(--card-bg);
}

button:not(.btn-login), a {
  color: var(--accent); 
}

button, a {
  font-family: inherit;
}

::selection {
  background: #b9ded7;
  color: var(--accent-dark);
}



/* Global responsive breakpoints */
@media (max-width: 1200px) {
  html {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
  
  #content {
    min-height: calc(100vh - 120px);
  }
}

@media (max-width: 480px) {
  html {
    font-size: 13px;
  }
  
  #content {
    min-height: calc(100vh - 100px);
  }
}

/* Ensure images are responsive */
img {
  max-width: 100%;
  height: auto;
}

</style>
