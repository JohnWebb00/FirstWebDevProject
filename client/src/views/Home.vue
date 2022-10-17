<template>
  <div>
    <b-container>
        <b-row align-h="around">
    <b-col cols="*">
      <b-card title="Listings" overlay
            img-src="https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648_1280.jpg" img-alt="Image"
            tag="article" class="card">
            <a href="http://localhost:8080/listings" class="stretched-link"></a>
          </b-card></b-col>
    <b-col cols="*">
      <b-card title="Create your own listing" overlay
            img-src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg" img-alt="Image"
            tag="article" class="card" >
            <a href="http://localhost:8080/list-item" class="stretched-link"></a>
          </b-card></b-col>
  </b-row>
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
@media (min-width: 768px) {

  /* Styling for devices with a width of 768px or BIGGER. */
  .card {
    max-width: 40rem;
    min-width: 30rem;
    font-size: 1rem;
  }

}

@media (max-width: 767px) {

  /* Styling for devices with a width of 767px or SMALLER. */
  .card {
    max-width: 30rem;
    min-width: 10rem;
    font-size: 0.6rem;
  }
}
</style>
