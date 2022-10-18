<template>
  <div>
    <div>
      <b-button v-b-toggle.sidebar-1>Filter By Categories</b-button>
      <b-sidebar id="sidebar-1" title="Categories" shadow width="50%" style="font-size: auto;">
        <div>
          <div>
            <b-button pill variant="info" v-on:click="getItems()">Get All Listings</b-button>

          </div>
          <div>
            <b-button pill v-b-toggle="'collapse-1'" class="m-1">Transport</b-button>
          </div>
          <b-collapse id="collapse-1">
            <b-list-group>
              <b-list-group-item id="cars" v-on:click="filterCars()">Cars</b-list-group-item>
              <b-list-group-item id="boats" v-on:click="filterBoats()">Boats</b-list-group-item>
              <b-list-group-item id="motercycle" v-on:click="filterMotercycle()">Motercycle</b-list-group-item>
              <b-list-group-item id="construction" v-on:click="filterConstruction()">Construction</b-list-group-item>

            </b-list-group>
          </b-collapse>
        </div>
        <div>
          <div>
            <b-button pill v-b-toggle="'collapse-2'" class="m-1">Living</b-button>
          </div>
          <b-collapse id="collapse-2">
            <b-list-group>
              <b-list-group-item id="Apartments" v-on:click="filterApartments()">Apartments</b-list-group-item>
              <b-list-group-item id="Houses" v-on:click="filterHouses()">Houses</b-list-group-item>
              <b-list-group-item id="Cabins" v-on:click="filterCabins()">Cabins</b-list-group-item>
              <b-list-group-item id="Abroad" v-on:click="filterAbroad()">Abroad</b-list-group-item>
            </b-list-group>
          </b-collapse>
        </div>
        <div>
          <div>
            <b-button pill v-b-toggle="'collapse-3'" class="m-1">Hobbies</b-button>
          </div>
          <b-collapse id="collapse-3">
            <b-list-group>
              <b-list-group-item id="Bikes" v-on:click="filterBikes()">Bikes</b-list-group-item>
              <b-list-group-item id="Watersport" v-on:click="filterWatersport()">Watersport</b-list-group-item>
              <b-list-group-item id="Music" v-on:click="filterMusic()">Music</b-list-group-item>
              <b-list-group-item id="Sports" v-on:click="filterSports()">Sports</b-list-group-item>

            </b-list-group>
          </b-collapse>
        </div>

      </b-sidebar>
    </div>

    <b-row align-v="center">
      <listing-card v-for="item in items" :key="item._id" :name="item.itemName"
        :price="item.rentPrice + '/' + item.duration + ' ' + item.category" :image="item.image"
        :link="`http://localhost:8080/view-item/${item._id}`">
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
      items: []
    }
  },
  methods: {
    async getItems() {
      try {
        const response = Api.get('http://localhost:3000/api/v1/items?approved=true')
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterCars() {
      try {
        const value = document.getElementById('cars').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterBoats() {
      try {
        const value = document.getElementById('boats').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterMotercycle() {
      try {
        const value = document.getElementById('motercycle').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterConstruction() {
      try {
        const value = document.getElementById('construction').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterApartments() {
      try {
        const value = document.getElementById('Apartments').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterHouses() {
      try {
        const value = document.getElementById('Houses').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterCabins() {
      try {
        const value = document.getElementById('Cabins').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterAbroad() {
      try {
        const value = document.getElementById('Abroad').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterWatersport() {
      try {
        const value = document.getElementById('Watersport').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterBikes() {
      try {
        const value = document.getElementById('Bikes').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterMusic() {
      try {
        const value = document.getElementById('Music').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async filterSports() {
      try {
        const value = document.getElementById('Sports').innerHTML
        const response = Api.get('http://localhost:3000/api/v1/items/category?category=' + value)
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
@media (min-width: 819px) {
.navCard {
    max-width: 350rem;
    min-width: 25rem;
    font-size: 1rem;
  }

}

@media (max-width: 819px) {

  /* Styling for devices with a width of 767px or SMALLER. */
  .navCard {
    max-width: 25rem;
    min-width: 10rem;
    font-size: 0.6rem;
  }
}
</style>
