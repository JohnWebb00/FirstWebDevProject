<template>
  <div>
    <div class="div1">
      <h2 class="instructions">
        Enter the details for your item and you're good to
        go!
      </h2>
    </div>
    <p>Your item will not be shown under listings until it is approved by an admin.</p>
    <b-row>
      <b-col id="col1">
        <form class="itemDetails" @submit.prevent="createListing">
          <label>Item name</label>
          <input id="itemName" type="text" placeholder="Enter a name for your item" v-model="formData.itemName"
            required />
          <label>Rent fee</label>
          <b-input-group id="currency" append="SEK">
            <b-form-input id="rentPrice" type=number min=1 placeholder="Enter the renting price for your item"
              v-model="formData.rentPrice" required></b-form-input>
          </b-input-group>
          <label>Rent fee is charged every:</label>
          <select id="duration" placeholder="Select a duration" required v-model="formData.duration">
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
          <label>Item description</label>
          <b-form-textarea id="description" type="text" v-model="formData.description"
            placeholder="Tell us about your item!" rows="3" max-rows="6"></b-form-textarea>

          <label>Category</label>
          <select id="category" placeholder="Select a category" v-model="formData.category" required>
            <option value="Cars">Cars</option>
            <option value="Boats">Boats</option>
            <option value="Motercycle">Motercycle</option>
            <option value="Construction">Construction</option>

            <option value="Apartments">Apartments</option>
            <option value="Houses">Houses</option>
            <option value="Cabins">Cabins</option>
            <option value="Abroad">Abroad</option>

            <option value="Bikes">Bikes</option>
            <option value="Watersports">Watersports</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>

            <option value="Drills">Drills</option>
            <option value="Electric">Electric</option>
            <option value="Saws">Saws</option>
            <option value="Welders">Welders</option>

            <option value="Construction">Construction</option>
            <option value="Cooking">Cooking</option>
            <option value="Exploration">Exploration</option>
            <option value="Study Help">Study Help</option>
          </select>

          <b-button variant="primary" type="submit">Submit</b-button>
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  /* Styling for devices with a width of 767px or SMALLER. */

  .div1 {
    display: flex;
    justify-content: center;
    margin: auto;
    max-width: 600px;
  }

  .instructions {
    background-color: #002753;
    font-size: 2em;
    color: white;
    margin: 20px;
    opacity: 0.9;
    padding: 30px;
    max-width: 500px;
  }

  #col1 {
    display: flex;
    justify-content: center;
  }

  .itemDetails {
    background: #eee;
    text-align: left;
    padding: 60px;
    border-radius: 10px;
  }

  #category {
    display: block;
    padding: 20px 12px;
    width: 100%;
    box-sizing: border-box;
    border: black;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  label {
    color: #00418b;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1.4em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  #itemName {
    /* Doesn't work? */
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
    height: 10%;
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

  button {
    margin-top: 50px;
    margin-bottom: 30px;
    width: 100%;
    font-size: 2.3em;
  }
}

@media (min-width: 768px) {
  /* Styling for devices with a width of 768px or BIGGER. */

  .div1 {
    display: flex;
    justify-content: center;
    margin: auto;
    max-width: 600px;
  }

  .instructions {
    background-color: #00428c;
    font-size: 20px;
    color: white;
    margin: 40px;
    opacity: 0.9;
    padding: 15px;
    max-width: 600px;
  }

  .itemDetails {
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

  #category {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: black;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  button {
    margin-top: 25px;
  }
}
</style>

<script>
import { Api } from '@/Api'
export default {
  name: 'CreateListing',
  data() {
    return {
      formData: {
        itemName: '',
        rentPrice: '',
        duration: '',
        description: '',
        category: '',
        image: ''
      }
    }
  },
  methods: {
    createListing() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: 'Bearer ' + token
        }
      }
      Api
        .post(
          '/v1/items',
          this.formData,
          config
        )
        .then((response) => this.$router.push(`/view-item/${response.data._id}`))
        .catch((error) => console.log(error))
    }
  }
}
</script>
