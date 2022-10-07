<template>
  <div>
    <div>
      <b-nav text-align="right">
        <b-nav-item active>Profile</b-nav-item>
      </b-nav>
    </div>
    <!--Main Navigation-->

    <div>
      <b-nav tabs text-align="center">
        <b-nav-item>How it works</b-nav-item>
        <b-nav-item href="http://localhost:8080/listings"
          >Another Link</b-nav-item
        >
      </b-nav>
    </div>
    <!--SearchBar-->
    <div>
      <b-form-input
        class="searchbar"
        placeholder="Search"
        style="
          border-radius: 30px;
          border: 2px solid #609;
          padding: 20px;
          width: 600px;
          height: 50px;
          margin: 40px 600px;
          position: relative;
        "
      >
      </b-form-input>
    </div>
    <!--Cards Nav-->

    <div>
      <b-card-group deck class="cardDeck" style="position: relative">
        <b-card
          title="Listings"
          img-src="https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648_1280.jpg"
          img-alt="Image"
          img-top
          img-height="400"
          img-width="400"
          tag="article"
          class="navCard"
        >
          <b-card-text> </b-card-text>
          <a href="http://localhost:8080/listings" class="stretched-link"></a>
        </b-card>

        <b-card
          title="Create your own listing"
          img-src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg"
          img-alt="Image"
          img-top
          img-height="400"
          img-width="400"
          tag="article"
          class="navCard"
        >
          <b-card-text> </b-card-text>
          <a href="https://www.google.com/" class="stretched-link"></a>
        </b-card>

        <b-card
          title="Catagories"
          img-src="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"
          img-alt="Image"
          img-top
          img-height="400"
          img-width="400"
          tag="article"
          class="navCard"
        >
          <b-card-text> </b-card-text>
          <a href="http://localhost:8080/catagory" class="stretched-link"></a>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      user: ''
    }
  },
  methods: {
    assign() {
      this.user = localStorage.getItem('user-details')
    }
  },
  async created() {
    await this.assign()
  }
}
</script>

<style>
.cardDeck {
  position: center;
  margin: 0 auto;
  position: relative;
}

.navCard {
  border: 20px;
  margin: 100px;
  margin: 0 auto;
  position: absolute;
}

.searchbar {
  border-radius: 30px;
  border: 2px solid #609;
  padding: 20px;
}
</style>
