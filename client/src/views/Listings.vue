<template>
  <div>
    <b-row>
      <listing-card v-for="item in items" :key="item._id" :title="item.itemName" :footer="item.rentPrice"></listing-card>
      <div>
        <pre>{{ items }}</pre>
      </div>

    </b-row>
  </div>
</template>

<script>

// https://www.youtube.com/watch?v=-DyKeMa5tYY
import { Api } from '@/Api'

import ListingCard from '@/components/ListingCard.vue'

export default {
  name: 'Listings',
  components: { 'listing-card': ListingCard },
  mounted() {
    this.getItems()
  },

  data() {
    return {
      items: [],
      item: { itemName: '', rentPrice: '', duration: '' }
    }
  },
  methods: {
    async getItems() {
      try {
        const response = Api.get('http://localhost:8080/api/v1/items')
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style>
.listing-card {
  font-size: 40px;
  width: 400px;
  height: 400px;
  border-radius: 30px;
  margin: 10px;
  color: red;
}
</style>
