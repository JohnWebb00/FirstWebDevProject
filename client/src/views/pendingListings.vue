<template>
  <div>
  <b-card-group deck>
    <b-card
      class="list"
      v-for="item in items"
      :key="item._id"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      :title="item.itemName"
      style="max-width: 15rem"
    >
      <b-card-text>
        {{ item.description }}
      </b-card-text>

      <template #footer>
        <b-container>
          <b-row>
            <b-col>
              <small>
                {{ item.rentPrice + ' SEK per ' + item.duration }}
              </small>
            </b-col>
          </b-row>
          <b-row>
            <small> Catagory: {{ item.category + '' }} </small>
          </b-row>
          <b-row>
            <small id="child">{{ item._id }} </small>
          </b-row>
          <b-row>
            <b-col>
              <b-button variant="success" v-bind:key="item.id" v-on:click="approveListing(item.id)">Approve Listing
              </b-button>
            </b-col>
            <b-col>
              <b-button variant="danger" v-bind:key="item._id" v-on:click="deleteListing(item._id)">Reject Listing
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-card>
  </b-card-group>
  </div>
</template>

<script>
import { Api } from '@/Api'
const url = 'http://localhost:3000/api/v1/items?approved=false'

export default {
  name: 'PendingListings',

  mounted() {
    console.log('PAGE is loaded!')
    this.GetNotApproved()
  },

  data() {
    return {
      items: []
    }
  },

  methods: {
    async GetNotApproved() {
      try {
        const response = Api.get(url).then(
          (response) => (this.items = response.data)
        )
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async approveListing(id) {
      Api.put('http://localhost:3000/api/v1/items/' + id, {
        approved: true
      }).then((response) => {
        console.log('Success')
      })
      this.$router.push('/pendingListings').catch((error) => {
        this.items = []
        console.log(error)
      })
    },
    deleteListing(id) {
      Api.delete('http://localhost:3000/api/v1/items/' + id).then(
        (response) => {}
      )
      this.$router.push('/pendingListings').catch((error) => {
        this.items = []
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
