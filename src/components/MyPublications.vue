<template>
  <section class="pub-section" id="publications">
    <div class="pub-container">
      <div class="pub-content">
        <h2 class="pub-title">Publications</h2>
        <p class="pub-description">Browse my research publications and academic papers.</p>
        
        <div v-if="Array.isArray(uploadedFileUrl) && uploadedFileUrl.length > 0" class="pub-list">
          <div class="pub-grid">
            <div v-for="(f, i) in uploadedFileUrl" :key="i" class="pub-item">
              <div class="pub-card">
                <div v-if="isImage(f.file_url)" class="pub-thumbnail">
                  <img :src="f.file_url" :alt="f.title || 'Publication'" class="pub-image" />
                </div>
                <div v-else class="pub-thumbnail pub-doc-icon">
                  <span class="doc-icon">📑</span>
                </div>
                <div class="pub-details">
                  <h3 class="pub-name">{{ f.title || 'Research Publication' }}</h3>
                  <a :href="f.file_url" target="_blank" class="pub-link">
                    <span class="pub-link-text">Read Publication</span>
                    <span class="pub-link-icon">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="pub-empty">
          <p>{{ loadError || 'No publications are currently available.' }}</p>
          <p v-if="isAdmin" class="admin-note">Please visit the admin panel to upload publications.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { currentUser, isAdmin, listDocuments } from '@/services/firebase';
export default {
  data() {
    return {
      uploadedFileUrl: [],
      user: null,
      adminAccess: false,
      loadError: ''
    };
  },
  computed: {
    isAdmin() {
      const u = this.user;
      if (!u) return false;
      return (
        this.adminAccess
      );
    }
  },
  async mounted() {
    this.user = currentUser();
    this.adminAccess = await isAdmin(this.user);
    
    this.fetchPublications();
  },
  methods: {
    fetchPublications() {
      listDocuments('publication')
        .then(documents => {
          this.uploadedFileUrl = documents
            .map(item => ({
              file_url: item.file_url,
              title: item.title || 'Research Publication'
            }))
            .filter(item => item.file_url);
        })
        .catch(error => {
          this.uploadedFileUrl = [];
          this.loadError = error.message || 'Unable to load publications.';
        });
    },
    isImage(url) { 
      return url && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif')); 
    }
  }
};
</script>

<style scoped>
.pub-section {
  background: var(--bg);
  padding: 6rem 1.5rem;
}
.pub-container {
  max-width: 1160px;
  margin: 0 auto;
  background: transparent;
  padding: 0;
}
.pub-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pub-title {
  font-family: Georgia, serif;
  font-size: 3rem;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 0.5rem;
}
.pub-description {
  font-size: 1.1rem;
  color: var(--muted);
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
}
.pub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
}
.pub-card {
  background: #fff;
  border: 1px solid var(--line);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.pub-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}
.pub-thumbnail {
  height: 180px;
  overflow: hidden;
  background: #f5f7fa;
}
.pub-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pub-doc-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.doc-icon {
  font-size: 4rem;
}
.pub-details {
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.pub-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  flex-grow: 1;
}
.pub-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background: var(--accent-dark);
  color: white !important;
  border-radius: 2px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
  margin-top: auto;
}
.pub-link:hover {
  background: var(--accent);
}
.pub-link-text, .pub-link-icon {
  color: white !important;
}
.pub-empty {
  text-align: center;
  padding: 2rem;
  color: #666;
}
.admin-note {
  font-style: italic;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #007bff;
}
</style>