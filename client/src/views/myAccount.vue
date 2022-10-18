// https://www.youtube.com/watch?v=IYuMBejxXUo video that might be helpful

<template>
  <div>
    <div class="container center">
      <h1 class="first-line">My Account - {{ user.userName }}</h1>
      <br />
      <img
        src="https://tinyurl.com/4sk8sjxj"
        alt="profilePic"
        class="image-cropper"
      />
      <br />
      <br />
      <h3>Account Details</h3>
      <p>
        <b>Full name:</b> {{ user.fullName }} <br />
        <b>City:</b> {{ user.location.city }} <br />
        <b>Email:</b> {{ user.email }} <br />
        <b>Zip code:</b> {{ user.location.postNr }} <br />
        <b>Street:</b> {{ user.location.streetAddress }} <br />
      </p>

      <b>
        <button class="details-button" @click="editAccount">Edit Account Information</button>
        <br />

        <b-button
          v-on:click="deleteAccount"
          pill
          v-b-modal.modal-1
          variant="outline-danger"
          >Remove Account</b-button
        >
        <b-modal id="modal-1" title="Delete account">
          <p class="my-4">
            Are you sure you want to delete your account? This action is
            permanent and will delete all your data from Rent-It.
          </p>
        </b-modal>
      </b>
    </div>
    <hr />

    <div>
      <h4>My Listings:</h4>
      <p>LIST OF LISTINGS</p>
      <b-card-group deck>
    <b-card class="list" v-for="item in items" :key="item._id" img-src=""
      img-alt="Image" img-top :title="item.itemName" style="max-width: 20rem;"
      >
      <b-card-text>
        {{ item.description }}
      </b-card-text>

      <template #footer>
        <b-container id = "listingsSection">
          <b-row>
            <b-col>
              <small> {{ item.rentPrice + ' SEK per ' + item.duration }} </small>
            </b-col>
          </b-row>
          <b-row>
            <small> Catagory: {{ item.category + '' }} </small>
          </b-row>
          <b-row>
            <b-col>
              <b-button variant="success" v-bind:key="item.id" v-on:click="editListing(item._id)" style="max-width: 4rem; font-size: 0.6rem;">Edit Item
              </b-button>
            </b-col>
            <b-col>
              <b-button variant="primary" v-bind:key="item._id" v-on:click="viewListing(item._id)" style="max-width: 4rem; font-size: 0.6rem;">View Item
              </b-button>
            </b-col>
            <b-col>
              <b-button variant="danger" v-bind:key="item._id" v-on:click="deleteListing(item._id)" style="max-width: 4rem; font-size: 0.6rem;">Remove Item
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-card>
  </b-card-group>
    </div>
    <div></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'User',
  async mounted() {
    await this.getUser()
    await this.getItems()
  },
  data() {
    return {
      user: {
        fullName: '',
        userName: '',
        userPass: '',
        phoneNumber: '',
        location: {
          city: '',
          postNr: '',
          streetAddress: ''
        },
        email: ''
      },
      items: []
    }
  },
  methods: {
    async getUser() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: 'Bearer ' + token
        }
      }
      try {
        const response = await axios
          .get('http://localhost:3000/api/v1/users/auth', config)
          .then((response) => (this.user = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async getItems() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: 'Bearer ' + token
        }
      }
      try {
        const response = await axios
          .get('http://localhost:3000/api/v1/users/user_id/items', config)
          .then((response) => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteAccount() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: 'Bearer ' + token
        }
      }
      await axios
        .delete('http://localhost:3000/api/v1/users/user_id/items', config)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      axios
        .delete('http://localhost:3000/api/v1/users/id', config)
        .then((response) => {
          console.log(response)
          this.$router.push('/login')
          localStorage.setItem('token', null)
          this.user = {}
        })
        .catch((error) => {
          console.log(error)
        })
    },
    editAccount() {
      this.$router.push('/edit-account')
    },
    editListing(id) {
      this.$router.push('/edit-item/' + id)
    },
    viewListing(id) {
      this.$router.push('/view-item/' + id)
    },
    deleteListing(id) {
      axios
        .delete('http://localhost:3000/api/v1/items/' + id)
        .then((response) => {})
        .catch((error) => {
          this.items = []
          console.log(error)
        })
    }
  }
}
</script>

<style>
.card-deck {
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 50px;
}

.container {
  padding: 20px;
}

hr {
  border: 3px solid #00428c;
  margin-bottom: 30px;
}

a {
  color: dodgerblue;
}

p2 {
  padding-left: 400;
}

p4 {
  padding-left: 400;
  font-size: 18;
}

h1 {
  text-align: center;
}

h2 {
  text-align: center;
  margin: 20 20 20 20;
}

h3 {
  background: #f1f1f1;
  margin: 80 0 50 0;
  padding: 20 260 20 260;
  font-size: 25;
  display: inline-block;
  text-align: center;
}

h4 {
  background: #00428c;
  margin: 80 0 50 0;
  padding: 20 100 20 100;
  font-size: 25;
  color: white;
  display: inline-block;
  text-align: center;
}
.first-line {
  color: white;
  background-color: #00428c;
  opacity: 0.9;
  padding: 30px;
  text-align: center;
}

.move-from-left {
  padding-left: 60px;
}

.image-cropper {
  width: 150px;
  height: 150px;
  border: solid;
  border-color: #00428c;
  position: relative;
  border-radius: 30%;
}

.pic-button:hover {
  opacity: 1;
}

.picture-button {
  opacity: 0.6;
  color: black;
  padding: 6px 6px;
  margin: 0 400 0 400;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border: solid;
  border-color: black;
}

.details-button:hover {
  opacity: 1;
  background: #f1f1f1;
}

.details-button {
  opacity: 0.6;
  padding: 5px;
  margin: 20px 0;
}

.details-button:hover {
  opacity: 1;
}

p {
  padding-left: 400;
  font-size: 18;
}

p {
  padding-left: 400;
  font-size: 18;
}
</style>
