<template>
  <section class="admin-section">
    <div class="admin-container">
      <div class="admin-header">
        <div>
          <h1>Admin Panel</h1>
          <p class="muted">Welcome, {{ user?.name || user?.email || 'Administrator' }}!</p>
        </div>
        <button class="btn btn-logout" @click="logout">Logout</button>
      </div>

      <div class="admin-actions">
        <button :class="['btn', activeTab === 'cv' ? 'btn-primary' : '']" @click="activeTab = 'cv'">CV Upload</button>
        <button :class="['btn', activeTab === 'pub' ? 'btn-primary' : '']" @click="activeTab = 'pub'">Publications Upload</button>
      </div>

      <div v-if="activeTab === 'cv'" class="admin-panel">
        <h2>Upload CV</h2>
        <form @submit.prevent="submitCv" class="upload-form">
          <div class="form-group">
            <label for="cv-title">Document Title</label>
            <input type="text" id="cv-title" v-model="cvTitle" placeholder="Enter document title" class="form-input" />
          </div>
          <div class="form-group">
            <label for="cv-file">Select File (PDF, DOCX, DOC, JPG, PNG, etc.)</label>
            <input type="file" id="cv-file" @change="handleCv" required class="form-file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.rtf,.odt,.xls,.xlsx,.ppt,.pptx" />
          </div>
          <button class="btn btn-primary" type="submit">Upload CV</button>
        </form>
        <div v-if="msg" class="alert" :class="msgType === 'success' ? 'alert-success' : 'alert-error'">{{ msg }}</div>
        <div class="existing-list">
          <h3>Existing CVs</h3>
          <div v-if="cvs.length === 0" class="empty-list">No CV documents uploaded yet.</div>
          <ul v-else>
            <li v-for="(c, idx) in cvs" :key="c.id || idx" class="list-item">
              <div class="item-info">
                <span class="item-icon">📄</span>
                <a :href="c.file_url || c.url" target="_blank" class="item-title">{{ c.title || (c.file_url || c.url) }}</a>
              </div>
              <div class="item-actions">
                <button class="btn btn-delete" @click="deleteCv(c.id, idx)">Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="activeTab === 'pub'" class="admin-panel">
        <h2>Upload Publication</h2>
        <form @submit.prevent="submitPub" class="upload-form">
          <div class="form-group">
            <label for="pub-title">Publication Title</label>
            <input type="text" id="pub-title" v-model="pubTitle" placeholder="Enter publication title" class="form-input" />
          </div>
          <div class="form-group">
            <label for="pub-file">Select File (PDF, DOCX, DOC, JPG, PNG, etc.)</label>
            <input type="file" id="pub-file" @change="handlePub" required class="form-file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.rtf,.odt,.xls,.xlsx,.ppt,.pptx" />
          </div>
          <button class="btn btn-primary" type="submit">Upload Publication</button>
        </form>
        <div v-if="msgPub" class="alert" :class="msgPubType === 'success' ? 'alert-success' : 'alert-error'">{{ msgPub }}</div>
        <div class="existing-list">
          <h3>Existing Publications</h3>
          <div v-if="pubs.length === 0" class="empty-list">No publications uploaded yet.</div>
          <ul v-else>
            <li v-for="(p, idx) in pubs" :key="p.id || idx" class="list-item">
              <div class="item-info">
                <span class="item-icon">📑</span>
                <a :href="p.file_url || p.url" target="_blank" class="item-title">{{ p.title || (p.file_url || p.url) }}</a>
              </div>
              <div class="item-actions">
                <button class="btn btn-delete" @click="deletePub(p.id, idx)">Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'AdminView',
  data() {
    return {
      activeTab: 'cv',
      cvFile: null,
      pubFile: null,
      cvTitle: '',
      pubTitle: '',
      msg: '',
      msgType: 'success',
      msgPub: '',
      msgPubType: 'success',
      user: null,
      cvs: [],
      pubs: []
    };
  },
  mounted() {
    const raw = localStorage.getItem('laraveluser');
    if (raw) {
      try { this.user = JSON.parse(raw); } catch(e) { this.user = null; }
    }
    if (!this.isAdmin) {
      // if not admin, redirect to home
      this.$router.replace({ name: 'Home' });
    }
    // fetch existing uploads
    this.fetchCvList();
    this.fetchPubList();
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
  methods: {
    logout() {
      if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('laraveluser');
        this.$router.push({ name: 'login' });
      }
    },
    handleCv(e) { this.cvFile = e.target.files[0]; },
    handlePub(e) { this.pubFile = e.target.files[0]; },
    submitCv() {
      if (!this.isAdmin) { 
        this.msg = 'Permission denied'; 
        this.msgType = 'error';
        return; 
      }
      if (!this.cvFile) { 
        this.msg = 'Please select a file'; 
        this.msgType = 'error';
        return; 
      }
      
      const fd = new FormData(); 
      fd.append('cv_file', this.cvFile);
      if (this.cvTitle) {
        fd.append('title', this.cvTitle);
      }
      
      const headers = {};
      if (this.user) { 
        const token = this.user.token || this.user.access_token || this.user.api_token; 
        if (token) headers.Authorization = 'Bearer ' + token; 
      }
      
      this.msg = 'Uploading...';
      this.msgType = 'success';
      
  api.post('/api/documents', fd, { headers })
        .then(r => { 
          this.msg = r.data.msg || 'CV uploaded successfully!'; 
          this.msgType = 'success';
          this.cvTitle = '';
          this.cvFile = null;
          document.getElementById('cv-file').value = '';
          
          this.fetchCvList();
        })
        .catch(() => { 
          this.msg = 'Upload failed. Please try again.'; 
          this.msgType = 'error';
        });
    },
    submitPub() {
      if (!this.isAdmin) { 
        this.msgPub = 'Permission denied'; 
        this.msgPubType = 'error';
        return; 
      }
      if (!this.pubFile) { 
        this.msgPub = 'Please select a file'; 
        this.msgPubType = 'error';
        return; 
      }
      
      const fd = new FormData(); 
      fd.append('publication_file', this.pubFile);
      if (this.pubTitle) {
        fd.append('title', this.pubTitle);
      }
      
      const headers = {};
      if (this.user) { 
        const token = this.user.token || this.user.access_token || this.user.api_token; 
        if (token) headers.Authorization = 'Bearer ' + token; 
      }
      
      this.msgPub = 'Uploading...';
      this.msgPubType = 'success';
      
  api.post('/api/documents', fd, { headers })
        .then(r => { 
          this.msgPub = r.data.msg || 'Publication uploaded successfully!'; 
          this.msgPubType = 'success';
          this.pubTitle = '';
          this.pubFile = null;
          document.getElementById('pub-file').value = '';
          // Refresh the publications list
          this.fetchPubList();
        })
        .catch(() => { 
          this.msgPub = 'Upload failed. Please try again.'; 
          this.msgPubType = 'error';
        });
    },
    fetchCvList() {
      const headers = {};
      if (this.user) { 
        const token = this.user.token || this.user.access_token || this.user.api_token; 
        if (token) headers.Authorization = 'Bearer ' + token; 
      }
      
  api.get('/api/documents', { headers })
        .then(res => {
          // normalize to array
          this.cvs = Array.isArray(res.data) ? res.data : (res.data ? [res.data] : []);
        }).catch(() => { 
          this.cvs = []; 
        });
    },
    fetchPubList() {
      const headers = {};
      if (this.user) { 
        const token = this.user.token || this.user.access_token || this.user.api_token; 
        if (token) headers.Authorization = 'Bearer ' + token; 
      }
      
  api.get('/api/documents', { headers })
        .then(res => {
          this.pubs = Array.isArray(res.data) ? res.data : (res.data ? [res.data] : []);
        }).catch(() => { 
          this.pubs = []; 
        });
    },
    deleteCv(id, index) {
      if (!confirm('Are you sure you want to delete this CV?')) return;
      
      const headers = {};
      if (this.user) { 
        const token = this.user.token || this.user.access_token || this.user.api_token; 
        if (token) headers.Authorization = 'Bearer ' + token; 
      }
      
      axios.delete(`http://127.0.0.1:8000/api/documents/${id}`, { headers })
        .then(() => { 
          this.cvs.splice(index, 1); 
          this.msg = 'CV deleted successfully';
          this.msgType = 'success';
        })
        .catch(() => { 
          this.msg = 'Delete failed. Please try again.';
          this.msgType = 'error';
        });
    },
    deletePub(id, index) {
      if (!confirm('Are you sure you want to delete this publication?')) return;
      
      const headers = {};
      if (this.user) { 
        const token = this.user.token || this.user.access_token || this.user.api_token; 
        if (token) headers.Authorization = 'Bearer ' + token; 
      }
      
      axios.delete(`http://127.0.0.1:8000/api/documents/${id}`, { headers })
        .then(() => { 
          this.pubs.splice(index, 1); 
          this.msgPub = 'Publication deleted successfully';
          this.msgPubType = 'success';
        })
        .catch(() => { 
          this.msgPub = 'Delete failed. Please try again.';
          this.msgPubType = 'error';
        });
    }
  }
}
</script>

<style scoped>
.admin-section {
  padding: 2rem 0;
  min-height: 100vh;
  background: #f5f7fa;
}
.admin-container { 
  max-width: 900px; 
  margin: 0 auto; 
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e0e0e0;
}
.admin-header h1 {
  margin: 0 0 0.5rem 0;
  color: #333;
}
.muted {
  color: #666;
  margin: 0;
}
.btn-logout {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-logout:hover {
  background: #c82333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
}
.admin-actions { 
  display: flex; 
  gap: 0.5rem; 
  margin-bottom: 1.5rem; 
}
.admin-panel { 
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}
.muted { 
  color: #666; 
  margin-bottom: 1.5rem;
}
.upload-form {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.form-input {
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.form-file {
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
}
.btn {
  padding: 0.6rem 1.4rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-primary {
  background: #007bff;
  color: #fff !important;
}
.btn-primary:hover {
  background: #0056b3;
}
.btn-delete {
  background: #f8f9fa;
  color: #dc3545 !important;
  border: 1px solid #dc3545;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}
.btn-delete:hover {
  background: #dc3545;
  color: white !important;
}
.alert {
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
}
.alert-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}
.alert-error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
.existing-list {
  margin-top: 2rem;
}
.existing-list h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #333;
}
.empty-list {
  color: #666;
  font-style: italic;
  padding: 1rem 0;
}
.existing-list ul { 
  list-style: none; 
  padding: 0; 
}
.list-item { 
  display: flex; 
  justify-content: space-between;
  align-items: center; 
  padding: 0.8rem 1rem;
  margin: 0.5rem 0; 
  background: #f8f9fa;
  border-radius: 0.5rem;
  transition: background 0.2s;
}
.list-item:hover {
  background: #f0f0f0;
}
.item-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.item-icon {
  font-size: 1.5rem;
}
.item-title { 
  color: #007bff !important;
  text-decoration: none;
  font-weight: 500;
}
.item-title:hover {
  text-decoration: underline;
}


/* Responsive design for all devices */
@media (max-width: 1024px) {
  .admin-container {
    max-width: 95%;
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .admin-section {
    padding: 1rem 0;
  }
  
  .admin-container {
    padding: 1.2rem;
  }
  
  .admin-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .admin-header h1 {
    font-size: 1.5rem;
  }
  
  .btn-logout {
    width: 100%;
  }
  
  .admin-actions {
    flex-direction: column;
    gap: 0.6rem;
  }
  
  .admin-actions .btn {
    width: 100%;
  }
  
  .form-input, .form-file {
    font-size: 0.95rem;
  }
  
  .btn-primary {
    width: 100%;
  }
  
  .list-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
  
  .item-info {
    width: 100%;
  }
  
  .item-actions {
    width: 100%;
  }
  
  .btn-delete {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .admin-container {
    padding: 1rem;
    margin: 0.5rem;
  }
  
  .admin-header h1 {
    font-size: 1.3rem;
  }
  
  .admin-panel h2 {
    font-size: 1.2rem;
  }
}

</style>
