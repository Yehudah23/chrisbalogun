<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <span class="footer-logo">🧬</span>
          <div class="footer-brand-text">
            <span class="footer-title">Chris Balogun</span>
            <span class="footer-tagline">Molecular Biology & Bioinformatics Researcher</span>
          </div>
        </div>
        <div class="footer-connect">
          <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="footer-linkedin" aria-label="Connect on LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span>Connect</span>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-social">
          <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="footer-social-icon linkedin" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a :href="orcidUrl" target="_blank" rel="noopener noreferrer" class="footer-social-icon orcid" aria-label="ORCID">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.426.074-1.477.271-2.116.545l.137 1.872H8.425v-3.887c0-1.356-.796-1.832-1.697-1.832-1.148 0-1.905.87-1.905 2.62v3.744H4.873V7.939h2.044V7.3c0-.542.232-1.015.813-1.222.407-.148 1.037-.155 1.408-.07.546.123.84.366.84.955v2.77h1.963c.03-.925.286-1.887.928-2.536.59-.6.1.33-1.46-1.89-2.536.928zm-6.491-4.343c-.937 0-1.844.75-1.844 2.058v3.59H4.873V7.939h2.115v2.228c0 1.147.792 1.89 1.844 1.89 1.05 0 1.896-.743 1.896-1.89V7.939h2.044v5.058zm-.002 12.88c.83 0 1.473-.58 1.473-1.555 0-.803-.553-1.43-1.473-1.43-.974 0-1.521.627-1.521 1.43 0 .975.547 1.555 1.521 1.555z"/></svg>
          </a>
          <a :href="scholarUrl" target="_blank" rel="noopener noreferrer" class="footer-social-icon scholar" aria-label="Google Scholar">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm3.5 10H12v-2.5c0-.83-.67-1.5-1.5-1.5S9 9.67 9 10.5V13H7.5V9.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V13zm-5 3.5h2V19H10.5v-2.5zm7 0h2V19h-2v-2.5z"/></svg>
          </a>
          <a :href="emailUrl" class="footer-social-icon email" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
        <span class="footer-copyright">© 2026 Chris Olamide Balogun</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      linkedinUrl: 'https://www.linkedin.com/in/chris-balogun-3aa518257?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      orcidUrl: 'Chris Olamide Balogun (0009-0007-5713-9483) - My ORCID https://share.google/EjV0sUnd6ZxpJAPFW',
      scholarUrl: 'https://scholar.google.com/',
      emailUrl: 'mailto:chrisbalogun19@gmail.com'
    };
  }
};
</script>

<style scoped>
.footer-section {
  background: var(--accent-dark);
  border-top: 1px solid var(--accent-dark);
  padding: 2.5rem 0 1.5rem 0;
  font-size: 1rem;
  position: relative;
}
.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.footer-main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.footer-logo {
  font-size: 2.2rem;
  filter: drop-shadow(0 2px 8px rgba(20, 125, 120, 0.4));
}
.footer-brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.footer-title {
  font-family: Georgia, serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff !important;
  letter-spacing: -0.01em;
}
.footer-tagline {
  font-size: 0.85rem;
  color: #b9ded7 !important;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.footer-connect {
  flex-shrink: 0;
}
.footer-linkedin {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.25rem;
  background: linear-gradient(135deg, #0a66c2, #004182);
  border: none;
  border-radius: 100px;
  color: white !important;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(10, 102, 194, 0.3);
}
.footer-linkedin:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(10, 102, 194, 0.4);
  background: linear-gradient(135deg, #004182, #0a66c2);
}
.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6) !important;
}
.footer-social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.footer-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  color: #b9ded7 !important;
  text-decoration: none;
  transition: all 0.3s ease;
}
.footer-social-icon:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-dark) !important;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(20, 125, 120, 0.3);
}
.footer-social-icon.linkedin:hover {
  background: #0a66c2;
  border-color: #0a66c2;
  color: white !important;
}
.footer-social-icon.orcid:hover {
  background: #a6ce39;
  border-color: #a6ce39;
  color: white !important;
}
.footer-social-icon.scholar:hover {
  background: #4285f4;
  border-color: #4285f4;
  color: white !important;
}
.footer-social-icon.email:hover {
  background: #ea4335;
  border-color: #ea4335;
  color: white !important;
}
.footer-copyright {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5) !important;
  font-weight: 400;
}
@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
  .footer-brand-text {
    align-items: center;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  .footer-social {
    justify-content: center;
  }
}
@media (max-width: 480px) {
  .footer-section {
    padding: 2rem 0 1rem 0;
  }
  .footer-container {
    padding: 0 1rem;
  }
  .footer-title {
    font-size: 1.25rem;
  }
}
</style>