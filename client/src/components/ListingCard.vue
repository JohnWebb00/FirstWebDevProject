<template>
  <div>
    <b-card :title="name" :footer="price" :img-src="image" img-alt="Image" img-top class="navCard">
      <a :href="link" class="stretched-link"></a>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'image', 'link', 'catagory']
}

</script>

<style>

</style>
