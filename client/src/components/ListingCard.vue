<template>
  <div>
    <b-card :title="name" :footer="price" :img-src="image" img-alt="Image" img-top class="navCard">
      <a href=link class="stretched-link"></a>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'image']
}

</script>

<style>
.navCard {
  font-size: 40px;
  width: 400px;
  height: 300px;
  border-radius: 30px;
  margin: 10px;
}
</style>
