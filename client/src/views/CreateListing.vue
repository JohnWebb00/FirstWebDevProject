<template>
  <div>
    <header>Create an item listing</header>
    <p>
      Enter the details for your item, along with a photo and you're good to go!
    </p>
    <b-row>
      <b-col id="col1">
        <form class="itemDetails" @submit.prevent="createListing">
          <label>Item name</label>
          <input
            id="itemName"
            type="text"
            placeholder="Enter a name for your item"
            v-model="formData.itemName"
            required
          />
  <label>Rent fee</label>
          <b-input-group id = 'currency' append="SEK">
            <b-form-input
              id="rentPrice"
              placeholder="Enter the renting price for your item"
              v-model="formData.rentPrice"
              required
            ></b-form-input>
          </b-input-group>
          <label>Rent fee is charged every:</label>
          <select
            id="duration"
            placeholder="Select a duration"
            required
            v-model="formData.duration"
          >
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
<label>Item description</label>
          <b-form-textarea
            id="description"
            type="text"
            v-model="formData.description"
            placeholder="Tell us about your item!"
            rows="3"
            max-rows="6"
          ></b-form-textarea>

<label>Category</label>
          <select
            id="category"
            placeholder="Select a category"
            v-model="formData.category"
            required
          >
            <option value="Sports">Sports</option>
            <option value="Home improvement">Home Improvement</option>
            <option value="Cooking">Cooking</option>
          </select>

          <button>Submit</button>
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.itemDetails{
    width: 600px;
    margin: 30px auto;
    background: #eee;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

header {
  margin-top: 30px;
}

#col1 {
  width: 1200px;
  display: flex;
  justify-content: center;
}

#itemName {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: black;
    border-bottom: 1px solid #ddd;
    color: #555;
}

#rentPrice {
    display: block;
    padding: 10px 6px;
    width: 75%;
    box-sizing: border-box;
    border: black;
    border-bottom: 1px solid #ddd;
    color: #555;
}

#duration {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: black;
    border-bottom: 1px solid #ddd;
    color: #555;
}

#description {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: black;
    border-bottom: 1px solid #ddd;
    color: #555;
}

#category{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: black;
    border-bottom: 1px solid #ddd;
    color: #555;
}

button{
  margin-top: 25px;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'CreateListing',
  data() {
    return {
      formData: {
        itemName: '',
        rentPrice: '',
        duration: '',
        description: '',
        category: ''
      }
    }
  },
  methods: {
    createListing() {
      axios
        .post('http://localhost:3000/api/v1/items', this.formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
  }
}
</script>
