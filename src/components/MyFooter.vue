<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <span class="footer-logo">🧬</span>
          <span class="footer-title">Mr Chris Balogun</span>
        </div>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Use</a>
          <a href="#" class="footer-link">Academic Ethics</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2024 Chris Balogun. All rights reserved.</span>
        <div class="footer-social">
          <a href="#" aria-label="Twitter" class="footer-social-icon">🐦</a>
          <a href="#" aria-label="LinkedIn" class="footer-social-icon">💼</a>
          <a href="#" aria-label="Email" class="footer-social-icon">✉️</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // No login or data needed for footer
};
</script>

<style scoped>
.footer-section {
  background: #f8fafc;
  border-top: 1px solid #e5e5e5;
  padding: 2rem 0 1rem 0;
  font-size: 1rem;
}
.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.footer-main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: #007bff;
}
.footer-logo {
  font-size: 1.7rem;
}
.footer-links {
  display: flex;
  gap: 1.2rem;
}
.footer-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.footer-link:hover {
  color: #0056b3;
}
.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid #e5e5e5;
  padding-top: 1rem;
  font-size: 0.97rem;
  color: #555;
}
.footer-social {
  display: flex;
  gap: 0.8rem;
}
.footer-social-icon {
  font-size: 1.3rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-social-icon:hover {
  color: #0056b3;
}
@media (max-width: 700px) {
  .footer-main, .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
  }
  .footer-container {
    padding: 0 0.7rem;
  }
}
</style>