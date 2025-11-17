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
          <p>No publications are currently available.</p>
          <p v-if="isAdmin" class="admin-note">Please visit the admin panel to upload publications.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/services/api';
export default {
  data() {
    return {
      uploadedFileUrl: [],
      user: null
    };
  },
  computed: {
    isAdmin() {
      const u = this.user;
      if (!u) return false;
      return (
        u.is_admin === 1 || u.is_admin === true || u.isAdmin === true ||
        u.admin === 1 || u.admin === true || u.role === 'admin' || u.type === 'admin'
      );
    }
  },
  mounted() {
    const raw = localStorage.getItem('laraveluser');
    if (raw) {
      try { this.user = JSON.parse(raw); } catch (e) { this.user = null; }
    }
    
    this.fetchPublications();
  },
  methods: {
    fetchPublications() {
      const headers = {};
      if (this.user) {
        const token = this.user.token || this.user.access_token || this.user.api_token;
        if (token) headers.Authorization = 'Bearer ' + token;
      }
      
  api.get('/api/documents', { headers })
        .then(res => {
          if (!res || !res.data) return;
          if (Array.isArray(res.data)) {
            this.uploadedFileUrl = res.data
              .map(item => ({ 
                file_url: item.file_url || item.url, 
                title: item.title || item.name || 'Research Publication' 
              }))
              .filter(i => i.file_url);
          } else {
            const url = res.data.file_url || res.data.url || '';
            if (url) this.uploadedFileUrl = [{ 
              file_url: url, 
              title: res.data.title || 'Research Publication' 
            }];
          }
        })
        .catch(() => { this.uploadedFileUrl = []; });
    },
    isImage(url) { 
      return url && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif')); 
    }
  }
};
</script>

<style scoped>
.pub-section {
  background: #f8fafc;
  padding: 3rem 0 2rem 0;
}
.pub-container {
  max-width: 1100px;
  margin: 0 auto;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
}
.pub-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pub-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #2a2a2a;
  margin-bottom: 0.5rem;
}
.pub-description {
  font-size: 1.1rem;
  color: #666;
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
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
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
  background: #007bff;
  color: white !important;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
  margin-top: auto;
}
.pub-link:hover {
  background: #0056b3;
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