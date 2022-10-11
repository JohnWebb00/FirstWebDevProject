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

    <b-row>
      <b-col>
        <b-form-input class="searchbar" placeholder="Search" style="
    border-radius: 30px;
    border: 2px solid #609;
    padding: 20px;
    width: 80%;
    height: 50px;
    margin: 2rem;
    position: relative;">
        </b-form-input>
      </b-col>
    </b-row>

    <!--Cards Nav-->
    <b-container fluid style="width: 100%" class="bv-example-row">
      <b-row cols="*">
        <b-col cols="*">
          <b-card title="Listings"
          fluid img-src="https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648_1280.jpg"
          img-alt="Image"
          img-top
          max-width="100%"
          height="auto" tag="article" class="navCard">
            <a href="http://localhost:8080/listings" class="stretched-link"></a>
          </b-card>
        </b-col>
        <b-col cols="*">
          <b-card title="Create your own listing"
          fluid img-src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg"
            img-alt="Image"
            img-width="100%" height="auto"
            tag="article" class="navCard">
            <a href="https://www.google.com/" class="stretched-link"></a>
          </b-card>
        </b-col>
        <b-col cols="*">
          <b-card title="Catagories"
            fluid img-src="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"
            img-alt="Image"
            img-top
            img-width="100%"
            height="auto"
            tag="article" class="navCard">
            <a href="http://localhost:8080/catagory" class="stretched-link"></a>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

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
  margin: 5rem;
  margin-bottom: 10px;
  margin: 0 auto;
  position: absolute;
}

.searchbar {
  border-radius: 30px;
  border: 2px solid #609;
  padding: 20px;
}
</style>
