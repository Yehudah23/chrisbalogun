<template>
  <section class="contact-page">
    <div class="contact-layout">
      <div class="contact-intro">
        <p class="contact-kicker">Start a conversation</p>
        <h1>Contact</h1>
        <p class="contact-lead">
          For research collaborations, scientific conversations, or professional enquiries,
          send a message through the channels below.
        </p>
      </div>

      <div class="contact-details">
        <div class="contact-item">
          <span class="contact-label">Email</span>
          <a href="mailto:chrisbalogun001@gmail.com">chrisbalogun001@gmail.com</a>
        </div>
        <div class="contact-item">
          <span class="contact-label">LinkedIn</span>
          <a href="https://www.linkedin.com/in/chris-balogun-3aa518257" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
        </div>
        <div class="contact-item">
          <span class="contact-label">WhatsApp</span>
          <a href="https://wa.me/qr/57OYZETW4AE5F1" target="_blank" rel="noopener noreferrer">Send a message</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe'
};
</script>

<style scoped>
.contact-page {
  min-height: calc(100vh - 150px);
  padding: 7rem 1.5rem;
  background: var(--bg);
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 6rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-kicker {
  margin-bottom: 1.2rem;
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.contact-intro h1 {
  margin-bottom: 1.2rem;
  font-family: Georgia, serif;
  font-size: clamp(3.2rem, 7vw, 5.8rem);
  font-weight: 400;
  line-height: 0.95;
}

.contact-lead {
  max-width: 520px;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.8;
}

.contact-details {
  align-self: end;
  border-top: 1px solid var(--line);
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--line);
}

.contact-label {
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-item a {
  color: var(--accent-dark) !important;
  font-family: Georgia, serif;
  font-size: 1.15rem;
  text-decoration: none;
}

.contact-item a:hover {
  color: var(--accent) !important;
}

@media (max-width: 700px) {
  .contact-page {
    padding: 4rem 1.2rem;
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
