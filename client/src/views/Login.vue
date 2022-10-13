<template>
  <div>
    <div class="div1">
      <header id="h1">Sign-in</header>
    </div>
    <body>
      <form id="loginForm" @submit.prevent="handleLogin">
        <label>Username:</label>
        <input type="text" v-model="userName" required />

        <label>Password:</label>
        <input type="password" v-model="userPass" required />
        <b-button type="submit" id="login" pill variant="dark">Log-in</b-button>
      </form>
    </body>
    <div>
      Don't have an account yet?
      <a href="http://localhost:8080/register">Click here</a>
    </div>
  </div>
</template>

<style scoped>
.div1 {
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 420px;
}

header{
  margin: 40px;
  background-color: #00428c
}
#loginForm {
  max-width: 420px;
  margin: 30px auto;
  background: #eee;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: black;
  border-bottom: 1px solid #ddd;
  color: #555;
}

#h1 {
  font-size: 2em;
  color: white;
  margin: 40px;
  opacity: 0.9;
  padding: 15px;
  max-width: 420px;
}

#login {
  margin-top: 25px;
  margin-left: 250px;
  color: #eee;
}
</style>

<script>
// import { Api } from '@/Api'
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      userName: '',
      userPass: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        const reponse = await axios.post(
          'http://localhost:3000/api/v1/users/login',
          {
            userName: this.userName,
            userPass: this.userPass
          }
        )
        const token = reponse.data.accessToken
        localStorage.setItem('token', token)
        this.$router.push('/home')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
