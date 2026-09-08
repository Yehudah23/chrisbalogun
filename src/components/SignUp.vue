<template>
    <div>
        <div>{{ msg }}</div>
  <input type="text" v-model="fullname">
  <input type="text" v-model="email">
  <input type="text" v-model="password">
  <input type="text" v-model="phone">
  <select name="" id="" v-model="role">
    <option value="admin">Admin</option>
    <option value="user">User</option>
  </select>
  <button @click="register">register</button>

    </div>
</template>

<script >
import { register } from '@/services/firebase'

export default{
    data(){
        return{
            fullname:'',
            email:'',
            password:'',
            phone:'',
            role:'',
            msg:''
        }
    },
    methods:{   
        async register(){
            const data = {
                fullname: this.fullname,
                email: this.email,
                password: this.password,
                phone: this.phone,
                role: this.role
            }
        
            try {
                await register(data);
                this.msg = 'Registration successful';
                setTimeout(() => this.$router.push({ name: 'login' }), 700);
            } catch (error) {
                this.msg = error.code === 'auth/email-already-in-use'
                    ? 'That email is already registered.'
                    : 'Registration failed';
            }
        }
       
}
}

</script>

<style>

</style>