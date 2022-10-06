<template>
  <div class="div1">
    <header id="h1">Sign-in</header>
    <body>
      <form id="loginForm">
        <label>Email:</label>
        <input type="email" v-model="email" required />

        <label>Password:</label>
        <input type="password" v-model="userPass" required />
        <b-button v-on:click="login" id="login" pill variant="dark"
          >Log-in</b-button
        >
      </form>
    </body>
    <div>Can't remember your password?</div>
  </div>
</template>

<style scoped>
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
  color: black;
  text-transform: uppercase;
  margin: 40px;
}

#login {
  margin-top: 25px;
  margin-left: 250px;
  color: #eee;
}
</style>

<script>
// import { Api } from '@/Api'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      userPass: ''
    }
  }
/*
  methods: {
    async login() {
      const result = await Api.post(
        `v1/users?email=${this.email}&userPass=${this.userPass}`
      )
      console.warn(result)

      if (result.status === 200 && result.data.users.length > 0) {
        localStorage.setItem('user-details', JSON.stringify(result.data.users[0]))
        this.$router.push('/')
      }
    }
  },
  mounted() {
    const user = localStorage.getItem('user-details')
    if (user) {
      this.$router.push('/')
    }
  }
  */
}
</script>
