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
import axios from 'axios'

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
        register(){
            let data = {
                fullname: this.fullname,
                email: this.email,
                password: this.password,
                phone: this.phone,
                role: this.role
            }
        
             axios.post('http://127.0.0.1:8000/api/register', data)
        .then(response => {
            console.log(response.data);
            if(response.data.status==201){
                this.msg=response.data.msg
            } 
           else if(response.data.status==202){
                this.msg=response.data.msg
            } 
        else if(response.data.status==204){
                this.msg=response.data.msg
                setTimeout(() => {
                    this.$router.push({name:'login'})
                }, 2000);

            } 
           else if(response.data.status==501){
                this.msg=response.data.msg
            } else{
                this.msg='Registration failed'
            }
        })
        .catch(error => {
            console.log(error);
        })
        }
       
}
}

</script>

<style>

</style>