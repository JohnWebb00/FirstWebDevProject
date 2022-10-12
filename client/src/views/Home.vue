<template>
  <div>

    <!--Cards Nav-->
    <b-container fluid style="width: 100%">
      <b-card-group>
        <b-card title="Listings" overlay
          img-src="https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648_1280.jpg" img-alt="Image"
          max-width="100%" tag="article">
          <a href="http://localhost:8080/listings" class="stretched-link"></a>
        </b-card>
        <b-card title="Create your own listing" overlay
          img-src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg" img-alt="Image"
          img-width="100%" tag="article">
          <a href="http://localhost:8080/list-item" class="stretched-link"></a>
        </b-card>
      </b-card-group>
    </b-container>

  </div>
</template>

<script>

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
  margin: 10rem auto;
  position: relative;
}

.navCard {
  text-align: fixed;
  border: 20px;
  margin: 5rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
  margin: 0 auto;
  position: absolute;
}
</style>
