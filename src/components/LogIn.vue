<template>
    <div class="login-container">
        <div class="login-card">
            <h2>Admin Login</h2>
            <p class="subtitle">Please enter the admin password to access the panel</p>
            <div v-if="msg" class="alert" :class="msgType">{{ msg }}</div>
            <form @submit.prevent="loginUser">
                <div class="form-group">
                    <label for="password">Admin Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        v-model="password" 
                        placeholder="Enter admin password" 
                        required
                        :disabled="loading"
                        autocomplete="current-password"
                    >
                </div>
                <button type="submit" class="btn-login" :disabled="loading">
                    {{ loading ? 'Logging in...' : 'Login' }}
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LogIn',
    data(){
        return{
            password:'',
            msg:'',
            msgType: 'alert-danger',
            loading: false
        }
    },
    mounted() {
        // Ensure any previous admin session is cleared when visiting login
        try { localStorage.removeItem('laraveluser'); } catch (e) { /* ignore */ }
    },
    methods:{
        loginUser(){
        
            this.msg = '';
            this.loading = true;
            
            let data = {
                password: this.password,
            }
            
            axios.post('http://127.0.0.1:8000/api/login', data)
            .then(res => {
                console.log(res.data);
                this.loading = false;
                
                if(res.data.status==201){
                    this.msg = res.data.msg || 'Invalid credentials'
                    this.msgType = 'alert-danger'
                } 
                else if(res.data.status==202 || res.data.status==203){
                    const user = res.data.user
                    const isAdmin = user && (
                        user.is_admin === 1 || user.is_admin === true || 
                        user.isAdmin === true || user.admin === 1 || 
                        user.admin === true || user.role === 'admin' || 
                        user.type === 'admin'
                    );
                    
                    if (!isAdmin) {
                        this.msg = 'Access denied. Only administrators can login here.'
                        this.msgType = 'alert-danger'
                        return;
                    }
                    this.msg = 'Login successful! Redirecting to admin panel...'
                    this.msgType = 'alert-success'
                    localStorage.setItem('laraveluser', JSON.stringify(user))
                    
                    setTimeout(() => {
                        this.$router.push({name:'admin'})
                    }, 1500);
                } 
                else if(res.data.status==501){
                    this.msg = res.data.msg || 'Login failed'
                    this.msgType = 'alert-danger'
                } else{
                    this.msg = 'Login failed. Please try again.'
                    this.msgType = 'alert-danger'
                }
            })
            .catch(err => {
                console.error('Login error:', err);
                this.loading = false;
                this.msg = 'Connection error. Please check if the server is running.'
                this.msgType = 'alert-danger'
            })
        }
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 60px);
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
}

.login-card {
    background: white;
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 450px;
    z-index: 10;
}

.login-card h2 {
    margin: 0 0 10px 0;
    color: #333;
    font-size: 28px;
    text-align: center;
}

.subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 30px;
    font-size: 14px;
}

.alert {
    padding: 12px 16px;
    border-radius: 6px;
    margin-bottom: 20px;
    font-size: 14px;
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.alert-danger {
    background-color: #fee;
    color: #c33;
    border: 1px solid #fcc;
}

.alert-success {
    background-color: #efe;
    color: #3c3;
    border: 1px solid #cfc;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
    font-size: 14px;
}

.form-group input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: all 0.3s ease;
    box-sizing: border-box;
    background-color: white;
    color: #333;
    line-height: 1.5;
}

.form-group input::placeholder {
    color: #999;
    opacity: 1;
}

.form-group input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group input:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
}

.btn-login {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.btn-login:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-login:active:not(:disabled) {
    transform: translateY(0);
}

.btn-login:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Tablet devices */
@media (max-width: 1024px) {
    .login-container {
        padding: 30px 20px;
    }
    
    .login-card {
        max-width: 500px;
    }
}

/* Mobile devices */
@media (max-width: 768px) {
    .login-container {
        padding: 20px 15px;
    }
    
    .login-card {
        padding: 30px 20px;
        max-width: 90%;
    }
    
    .login-card h2 {
        font-size: 24px;
    }
    
    .subtitle {
        font-size: 13px;
    }
    
    .form-group input {
        font-size: 15px;
        padding: 11px 14px;
    }
    
    .btn-login {
        font-size: 15px;
        padding: 13px;
    }
}

/* Small mobile devices */
@media (max-width: 480px) {
    .login-container {
        padding: 15px 10px;
    }
    
    .login-card {
        padding: 25px 18px;
        max-width: 95%;
    }
    
    .login-card h2 {
        font-size: 22px;
    }
    
    .subtitle {
        font-size: 12px;
    }
    
    .form-group input {
        font-size: 14px;
        padding: 10px 12px;
    }
    
    .btn-login {
        font-size: 14px;
        padding: 12px;
    }
}

/* Landscape mobile */
@media (max-height: 500px) and (orientation: landscape) {
    .login-container {
        min-height: auto;
        padding: 15px;
    }
    
    .login-card {
        padding: 20px;
    }
    
    .login-card h2 {
        font-size: 20px;
    }
    
    .form-group {
        margin-bottom: 12px;
    }
}
</style>
