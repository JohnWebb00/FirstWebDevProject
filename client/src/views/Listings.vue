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
              <b-list-group-item id="construction" button>Construction</b-list-group-item>

            </b-list-group>
          </b-collapse>
        </div>
        <div>
          <div>
            <b-button pill v-b-toggle="'collapse-2'" class="m-1">Living</b-button>
          </div>
          <b-collapse id="collapse-2">
            <b-list-group>
              <b-list-group-item button>Apartments</b-list-group-item>
              <b-list-group-item button>Houses</b-list-group-item>
              <b-list-group-item button>Cabins</b-list-group-item>
              <b-list-group-item button>Abroad</b-list-group-item>
            </b-list-group>
          </b-collapse>
        </div>
        <div>
          <div>
            <b-button pill v-b-toggle="'collapse-3'" class="m-1">Hobbies</b-button>
          </div>
          <b-collapse id="collapse-3">
            <b-list-group>
              <b-list-group-item button>Bikes</b-list-group-item>
              <b-list-group-item id="valueX" v-on:click="filter()">Watersport</b-list-group-item>
              <b-list-group-item button>Music</b-list-group-item>
              <b-list-group-item button>Sports</b-list-group-item>

            </b-list-group>
          </b-collapse>
        </div>

        <div>
          <div>
            <b-button pill v-b-toggle="'collapse-4'" class="m-1">Tools</b-button>
          </div>
          <b-collapse id="collapse-4">
            <b-list-group>
              <b-list-group-item id="value" v-on:click="filter()">Drills</b-list-group-item>
              <b-list-group-item button>Electric</b-list-group-item>
              <b-list-group-item button>Saws</b-list-group-item>
              <b-list-group-item button>Welders</b-list-group-item>

            </b-list-group>
          </b-collapse>
        </div>

        <div>
          <div>
            <b-button pill v-b-toggle="'collapse-5'" class="m-1">Services</b-button>
          </div>
          <b-collapse id="collapse-5">
            <b-list-group>
              <b-list-group-item button>Construction</b-list-group-item>
              <b-list-group-item button>Cooking</b-list-group-item>
              <b-list-group-item button>Exploration</b-list-group-item>
              <b-list-group-item button>Study Help</b-list-group-item>

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
