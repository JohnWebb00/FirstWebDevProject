<template>
  <div id="app">
    <div class ="navbar">
      <div class="navbar-left">
      <router-link to="/">Home</router-link>
      <router-link to="/">My Account</router-link>
      <router-link to="/">Search</router-link>
      <router-link to="/">Listings</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/list-item">Post an Item</router-link>
      </div>
      <div class="navbar-right">
      </div>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
    // Define the name of the component here

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a01d8c;
}

.navbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: wrap;
  align-content: center;
  background-color: midnightblue;
  padding: 10px;
}

.navbar-left{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: wrap;
}

</style>
