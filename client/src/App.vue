<template>
  <div id="app">
    <div class ="navbar" v-if="!['login', 'register'].includes(this.$route.name)">
      <div class="navbar-left">
      <b-button id='button' to="/home">Home</b-button>
      <b-button id='button' to="/listings">Listings</b-button>
      <b-button id='button' to="/list-item">Post an Item</b-button>
      <b-button id='button' to="/view-item/634412cc13ca91fe31a0c8d9">Item view</b-button>
      </div>
      <div class="navbar-center">Rent-it™</div>
      <div class="navbar-right">
        <b-button id='button' to="/login">Login</b-button>
        <b-button id='button' to="/register">Register New Account</b-button>
        <b-button id='button' to="/my-account">My Account</b-button>
        <b-button id='button' to="/review-card">Review card</b-button>
      </div>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
    <div>
  <b-card
    overlay
    img-src="https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg?w=2000&t=st=1665660718~exp=1665661318~hmac=bcd18d241e467b0b2c5278049e26b65daf6ee3722f328b60f7947284b427b082"
    img-alt="Card Image"
    img-height="300px"
    img-width="100%"
    >
    <b-card-text>
      <a href="http://localhost:8080/admin-login">Admin Login</a>
    </b-card-text>
  </b-card>
</div>
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
.navbar-center{
  display: flex;
  align-items: center;
}

</style>
