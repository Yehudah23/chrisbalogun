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
          <p>{{ loadError || 'No CV documents are currently available.' }}</p>
          <p v-if="isAdmin" class="admin-note">Please visit the admin panel to upload CV documents.</p>
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

    // fetch existing uploaded CV(s)
    this.fetchCvList();
  },
  methods: {
    fetchCvList() {
      listDocuments('cv')
        .then(documents => {
          this.uploadedFileUrl = documents
            .map(item => ({ file_url: item.file_url, title: item.title || 'CV Document' }))
            .filter(item => item.file_url);
        })
        .catch(error => {
          this.uploadedFileUrl = [];
          this.loadError = error.message || 'Unable to load CV documents.';
        });
    },
    isImage(url) { 
      return url && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif')); 
    }
  }
};
</script>

<style scoped>
.cv-section {
  background: #fff;
  padding: 6rem 1.5rem;
  border-top: 1px solid var(--line);
}
.cv-container {
  max-width: 1160px;
  margin: 0 auto;
  background: transparent;
  padding: 0;
}
.cv-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cv-title {
  font-family: Georgia, serif;
  font-size: 3rem;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 0.5rem;
}
.cv-description {
  font-size: 1.1rem;
  color: var(--muted);
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
  background: var(--warm);
  border: 1px solid var(--line);
  border-radius: 2px;
  overflow: hidden;
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
  background: #e2efeb;
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
  background: var(--accent-dark);
  color: white !important;
  border-radius: 2px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}
.cv-download-btn:hover {
  background: var(--accent);
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