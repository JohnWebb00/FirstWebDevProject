<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="6">
          <img src="https://images.timberland.com/is/image/TimberlandEU/10061713-hero" alt="boot" />
        </b-col>

        <b-col class="iteminfo" sm="6">
          <h5 class="center">
            <b>{{ item.itemName }}</b>
          </h5>

          <body>
            <h6 class="center">{{ item.rentPrice }} SEK per {{ item.duration }}</h6>
            <p><b><u>Approved status:</u></b> {{ item.approved }}</p>
            <p>{{ item.description }}</p>
            <div id="userBox">

              <body>
                <h5 class="center"><u>Posted by:</u> {{ user.fullName }}</h5>
                <p><u>Location:</u> {{ user.location.city }}</p>
                <p><u>Phone Number:</u> {{ user.phoneNumber }}</p>
                <p><u>Email:</u> {{ user.email }}</p>
              </body>
            </div>
          </body>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <!-- User input box for item review. -->
      <div>
        <h6>Write a review for this item:</h6>
        <form id="reviewForm" @submit="submitReview" style="align-content: center; margin: auto">
          <label>Review title</label>
          <input id="title" type="text" placeholder="Enter a review title" v-model="review.title" required />
          <label>Comment</label>
          <textarea id="comment" v-model="review.comment" placeholder="My experience with this item was..."></textarea>

          <!-- User input selection of item grade. -->
          <label>Rating</label>
          <select id="rating" v-model="review.rating">
            <option disabled value="">Please select one</option>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>

          <!-- "Submit Review" button. -->
          <button id="submitButton" type="submit">Submit Review</button>
        </form>
      </div>
    </b-container>

    <!-- List of Reviews for this item. -->
    <b-container>
      <h5>Reviews for {{ item.itemName }}:</h5>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <review-card v-for="review in reviews" :key="review._id" :title="review.title" :rating="review.rating"
            :comment="review.comment"></review-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#review_section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

label {
  color: #aaa;
  display: inline-block;
  margin: auto;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

#reviewForm {
  max-width: 400px;
}

#title {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: black;
  border-bottom: 1px solid #ddd;
  color: #555;
}

#comment {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: black;
  border-bottom: 1px solid #ddd;
  color: #555;
}

#rating {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: black;
  border-bottom: 1px solid #ddd;
  color: #555;
}

#submitButton {
  margin-top: 20px;
}

#userBox {
  padding: 5%;
  border: 1px solid;
  text-align: left;
  margin: auto;
  width: 100%;
}

.iteminfo {
  text-align: left;
  margin: auto;
  max-width: 50%;
}

.center {
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
  border: 1px solid;
}

#reviews {
  width: 50%;
  margin: auto;
  margin-top: 20px;
  text-align: center;
}
</style>

<script>
import { Api } from '@/Api'
import ReviewCard from '@/components/ReviewCard.vue'

export default {
  name: 'Item',
  components: { 'review-card': ReviewCard },
  async mounted() {
    await this.getItem()
    await this.getUser()
    await this.getReviews()
  },
  data() {
    return {
      message: '', // needs to be hidden from user?
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
      item: [],
      reviews: [],
      review: {
        title: '',
        comment: '',
        rating: ''
      }
    }
  },
  methods: {
    async getItem() {
      const id = this.$route.params.id
      console.log(id)
      try {
        const response = await Api
          .get(`/v1/items/${this.$route.params.id}`)
          .then((response) => (this.item = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async getUser() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: 'Bearer ' + token
        }
      }
      try {
        const response = await Api
          .get(
            `/v1/users/${this.item.itemAuthor}`,
            config
          )
          .then((response) => (this.user = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async getReviews() {
      try {
        const response = await Api
          .get(
            `/v1/items/${this.$route.params.id}/reviews`
          )
          .then((response) => (this.reviews = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    submitReview() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: 'Bearer ' + token
        }
      }
      Api
        .post(
          `/v1/items/${this.$route.params.id}/reviews`,
          this.review,
          config
        )
        .then((response) => console.log(response))
      this.$router
        .push(`/view-item/${this.$route.params.id}`)
        .catch((error) => console.log(error))
    }
  }
}
</script>
