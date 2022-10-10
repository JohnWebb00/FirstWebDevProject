<template>
  <div id="app">
    <div class ="navbar" v-if="!['login', 'register'].includes(this.$route.name)">
      <div class="navbar-left">
      <b-button id='button' to="/">Home</b-button>
      <b-button id='button' to="/">Search</b-button>
      <b-button id='button' to="/">Listings</b-button>
      <b-button id='button' to="/list-item">Post an Item</b-button>
      <b-button id='button' to="/view-item">Item view</b-button>
      </div>
      <div class="navbar-right">
        <b-button id='button' to="/login">Login</b-button>
        <b-button id='button' to="/register">Register New Account</b-button>
        <b-button id='button' to="/my-account">My Account</b-button>
        <b-button id='button' to="/review-card">Review card</b-button>
      </div>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {

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

#button{
  color: white;
  background-color: midnightblue;
  border: none;
  margin: 10px;
}

#button:active{
  border: none;
}
.navbar-left{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: wrap;
}

</style>
