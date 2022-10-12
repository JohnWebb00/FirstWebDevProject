<template>
  <div>
    <b-card class="rev-card">
      <h5><u>{{ title }}</u></h5>
      <h6>Rating: {{ rating }}/5</h6>
      <body>
        <p>{{ comment }}</p>
      </body>
      <footer>{{ author }}</footer>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    rating: Number,
    comment: String,
    author: String
  }
}
</script>
<style scoped>
.rev-card {
  width: 500px;
  height: 175px;
  margin: 20px;
}
</style>
