<template>
  <section class="cv-section" id="cv">
    <div class="cv-container">
      <div class="cv-content">
        <h2 class="cv-title">Curriculum Vitae</h2>
        <p class="cv-description">View and download my professional CV and credentials.</p>
        
        <div v-if="Array.isArray(uploadedFileUrl) && uploadedFileUrl.length > 0" class="cv-preview">
          <div class="cv-files">
            <div v-for="(f, i) in uploadedFileUrl" :key="i" class="cv-item">
              <div v-if="isImage(f.file_url)" class="cv-file-card">
                <img :src="f.file_url" :alt="f.title || 'CV Document'" class="cv-image-preview" />
                <div class="cv-file-info">
                  <h4>{{ f.title || 'CV Document' }}</h4>
                  <a :href="f.file_url" target="_blank" class="cv-download-btn">View Full Size</a>
                </div>
              </div>
              <div v-else class="cv-file-card">
                <div class="cv-file-icon">
                  <span class="file-icon">📄</span>
                </div>
                <div class="cv-file-info">
                  <h4>{{ f.title || 'CV Document' }}</h4>
                  <a :href="f.file_url" target="_blank" class="cv-download-btn">Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="cv-empty">
          <p>No CV documents are currently available.</p>
          <p v-if="isAdmin" class="admin-note">Please visit the admin panel to upload CV documents.</p>
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
        u.is_admin === 1 ||
        u.is_admin === true ||
        u.isAdmin === true ||
        u.admin === 1 ||
        u.admin === true ||
        u.role === 'admin' ||
        u.type === 'admin'
      );
    }
  },
  mounted() {
    // parse user
    const raw = localStorage.getItem('laraveluser');
    if (raw) {
      try { this.user = JSON.parse(raw); } catch (e) { this.user = null; }
    }

    // fetch existing uploaded CV(s)
    this.fetchCvList();
  },
  methods: {
    fetchCvList() {
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
              .map(item => ({ file_url: item.file_url || item.url, title: item.title || item.name || 'CV Document' }))
              .filter(i => i.file_url);
          } else {
            const url = res.data.file_url || res.data.url || '';
            if (url) this.uploadedFileUrl = [{ file_url: url, title: res.data.title || 'CV Document' }];
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
.cv-section {
  background: #f8fafc;
  padding: 3rem 0 2rem 0;
}
.cv-container {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
}
.cv-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cv-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #2a2a2a;
  margin-bottom: 0.5rem;
}
.cv-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
}
.cv-files {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
.cv-item {
  flex: 1 1 300px;
  max-width: 350px;
}
.cv-file-card {
  background: #f9f9f9;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}
.cv-file-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.cv-image-preview {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}
.cv-file-icon {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f4f9;
  border-bottom: 1px solid #eee;
}
.file-icon {
  font-size: 4rem;
}
.cv-file-info {
  padding: 1.2rem;
  text-align: center;
}
.cv-file-info h4 {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  color: #333;
}
.cv-download-btn {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: #007bff;
  color: white !important;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}
.cv-download-btn:hover {
  background: #0056b3;
}
.cv-empty {
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