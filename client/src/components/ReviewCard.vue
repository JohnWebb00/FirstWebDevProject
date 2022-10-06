<template>
  <div>
    <b-card class="rev-card">
      <h5>:title</h5>
      <h6>Rating: :rating/5</h6>
      <body>
        <p>{comment}</p>
      </body>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    rating: Number,
    comment: String
  }
}
</script>
<style scoped>
.rev-card {
  width: 500px;
  height: 175px;
}
</style>
