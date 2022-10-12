<template>
  <div>
    <b-row align-v="center">
      <listing-card v-for="item in items" :key="item._id" :name="item.itemName"
        :price="item.rentPrice + ' ' + item.duration" :image="item.image">
      </listing-card>
    </b-row>
  </div>
</template>

<script>
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
      items: {}
    }
  },
  methods: {
    async getItems() {
      try {
        const response = Api.get('http://localhost:3000/api/v1/items')
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

</style>
