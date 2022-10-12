<template>
  <div>
    <b-row>
      <b-col class="userDiv">
        <img
          src="https://images.timberland.com/is/image/TimberlandEU/10061713-hero"
          alt="boot"
        />
      </b-col>
      <b-col class="iteminfo">
        <h5>{{ item.itemName }}</h5>
        <body>
          <h6>{{ item.rentPrice }} SEK <b>per</b> {{ item.duration }}</h6>
          <p>{{ item.description }}</p>
          <div>
            <body id="userBox">
              <h5 text-align="center">Posted by: {{ user.userName }}</h5>
              <p>Username: {{ user.email }}</p>
              <p>Location: {{ user.location.city }}</p>
            </body>
          </div>
        </body>
      </b-col>
    </b-row>

    <!-- User input box for item review. -->
    <div style=
    "align-content: center;
    margin: auto;">
    <h6>Write a review for this item:</h6>
    <form id='reviewForm' @submit.prevent="submitReview">
       <label>Review title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter a review title"
            v-model="review.title"
            required
          />
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
    <b-row>
      <b-col id="reviews">
        <h5>Reviews for {{ item.itemName }}:</h5>
        <div id="review_section">
          <review-card
            v-for="review in reviews"
            :key="review._id"
            :title="review.title"
            :rating="review.rating"
            :comment="review.comment"
          ></review-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
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

#submitButton{
  margin-top: 20px;
}

#review_section {
  display: flex;
  justify-content: center;
}
#userBox {
  padding: 10px;
  border: 1px solid;
  text-align: left;
  margin-top: 20px;
  width: 250px;
}

.userDiv {
  margin: 40px;
  max-width: 25%;
}

#userbox {
  text-align: left;
}

.iteminfo {
  padding: 10px;
  text-align: left;
  margin: 30px;
  max-width: 60%;
}

img {
  align-content: center;
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
import axios from 'axios'
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
        const response = await axios
          .get(`http://localhost:3000/api/v1/items/${this.$route.params.id}`)
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
        const response = await axios
          .get(
            `http://localhost:3000/api/v1/users/${this.item.itemAuthor}`,
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
        const response = await axios
          .get(
            `http://localhost:3000/api/v1/items/${this.$route.params.id}/reviews`
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
      axios
        .post(
          `http://localhost:3000/api/v1/items/${this.$route.params.id}/userId/reviews`,
          this.review,
          config
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
  }
}
</script>
