<template>
<div>
    <b-card
    :title="item.itemName"
    :footer="item.rentPrice"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    class="navCard"
    >
    <a href="https://www.google.com/" class="stretched-link"></a>
    </b-card>
</div>
</template>

<script>
export default {
  props: ['itemName', 'price']
}

</script>

<style>
.navCard{
    font-size: 40px;
    width: 400px;
    height: 300px;
    border-radius: 30px;
    margin: 10px;
}
</style>
