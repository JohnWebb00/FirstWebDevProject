<template>
  <div id="app">
    <div class="navbar" v-if="!['login', 'register'].includes(this.$route.name)">
      <div class="navbar-left">
        <b-button id="button" to="/home">Home</b-button>
        <b-button id="button" to="/listings">Listings</b-button>
        <b-button id="button" to="/list-item">Post an Item</b-button>
      </div>
      <div class="navbar-center">Rent-it™</div>
      <div class="navbar-right">
        <b-button id="button" v-if="!loggedIn" to="/login">Login</b-button>
        <b-button id="button" v-if="loggedIn" @click="logout" to="/login">Logout</b-button>
        <b-button id="button" v-if="!loggedIn" to="/register">Register New Account</b-button>
        <b-button id="button" v-if="loggedIn" to="/my-account">My Account</b-button>
      </div>
    </div>
    <router-view />

    <footer class="text-center text-white" style="background-color: #3f51b5">
      <div class="container">
        <section class="mt-5">
          <div class="row text-center d-flex justify-content-center pt-5">
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="https://en.wikipedia.org/wiki/The_Three_Stooges" class="text-white">About us</a>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="http://localhost:8080/listings" class="text-white">Listings</a>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="https://www.amazon.se/Coding-Development-All-One-Dummies/dp/1119473926/ref=asc_df_1119473926/?tag=shpngadsglede-21&linkCode=df0&hvadid=476505640779&hvpos=&hvnetw=g&hvrand=13015083246108035693&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1012511&hvtargid=pla-489073989775&psc=1"
                class="text-white">Help</a>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">Contact</a>
              </h6>
            </div>
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="http://localhost:8080/admin-login" class="text-white">Administrator Login</a>
              </h6>
            </div>
          </div>
        </section>
        <hr class="my-5" />
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      loggedIn: localStorage.getItem('token') || false
    }
  },
  methods: {
    logout() {
      localStorage.clear()
    }
  }
}
</script>

<style>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#app {
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
