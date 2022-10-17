<template>
  <div id="app">
    <div
      class="navbar"
      v-if="!['login', 'register'].includes(this.$route.name)"
    >
      <div class="navbar-left">
        <b-button id="button" to="/home">Home</b-button>
        <b-button id="button" to="/listings">Listings</b-button>
        <b-button id="button" to="/list-item">Post an Item</b-button>
      </div>
      <div class="navbar-center">Rent-it™</div>
      <div class="navbar-right">
        <b-button id="button" v-if="!loggedIn" @click="loggedIn=true" to="/login">Login</b-button>
        <b-button id="button" v-if="loggedIn" @click="logout, loggedIn=false" loggedIn to="/login">Logout</b-button>
        <b-button id="button" v-if="!loggedIn" to="/register">Register New Account</b-button>
        <b-button id="button" v-if="loggedIn" to="/my-account">My Account</b-button>
      </div>
    </div>
    <!-- Render the content of the current page view -->
    <router-view />
    <footer class="mt-auto">
    <div>
      <b-card
        overlay
        img-src="https://www.rseconf.org/wp-content/uploads/2019/02/footer-bg.png"
        img-alt="Card Image"
        img-width="100%"
        max-height="40rem">
        <b-card-text>
          <a href="http://localhost:8080/admin-login">Admin Login</a>
        </b-card-text>
      </b-card>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    logout() {
      localStorage.setItem('token', null)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.navbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: wrap;
  align-content: center;
  color: white;
  background-color: midnightblue;
  padding: 10px;
}

#button {
  color: white;
  background-color: midnightblue;
  border: none;
  margin: 10px;
}

#button:active {
  border: none;
}
.navbar-left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: wrap;
}
.navbar-center {
  display: flex;
  align-items: center;
}
</style>
