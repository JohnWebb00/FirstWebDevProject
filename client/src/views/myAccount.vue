// https://www.youtube.com/watch?v=IYuMBejxXUo video that might be helpful

<template>
  <div>
      <div class="container center">
            <h1 class="first-line">My Account - {{ user.userName }}</h1>
        <br>
        <img src="https://tinyurl.com/4sk8sjxj" alt="profilePic" class="image-cropper">
        <br>
        <h2 class="pic-button">
         CHANGE PICTURE
        </h2>
        <br>
            <h3>
              Account Details
        </h3>
        <p>
          <b>Full name:</b> {{ user.fullName }} <br>
          <b>City:</b> {{ user.location.city }} <br>
          <b>Email:</b> {{ user.email }} <br>
          <b>Zip code:</b> {{ user.location.postNr }} <br>
          <b>Street:</b> {{ user.location.streetAddress }} <br>
        </p>

          <b>
            <button class="details-button">Edit Account Information</button>
            <br>

            <b-button pill v-b-modal.modal-1 variant="outline-danger">Remove Account</b-button>
             <b-modal id="modal-1" title="Leaving already?">
             <p class="my-4">Are you sure you want to delete your account? This action is permanent and will delete all your data from Rent-It.</p>
             </b-modal>

          </b>

        </div>
<hr>

    <div>
      <h4>My Listings:</h4>
      <p> LIST OF LISTINGS </p>
    </div>
    <div> </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  async mounted() {
    await this.getUser()
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
      }
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
          .then((response) => (this.user = response.data.user))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
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
