<template>
  <div>
    <div>
      <h1 class="first-line">My Account - "Username"</h1>
      <br />
      <img
        src="https://tinyurl.com/4sk8sjxj"
        alt="profilePic"
        class="image-cropper"
      />
      <br />
      <h2 class="pic-button">CHANGE PICTURE</h2>
      <br />
      <h3>Account details</h3>
      <b-col>
        <p>Full name: {{ users.fullName[0] }} </p> <br />
        <b>City:</b> {{ users[0].city }} <br />
        <b>Email:</b> {{ users[0].email }} <br >
        <b>Zip code:</b> {{ users[0].postNr }} <br />
        <b>Street:</b> {{ users[0].streetAddress }} <br />
      </b-col>

      <p class="details-button">
        <b>EDIT DETAILS</b>
      </p>
    </div>

    <div>
      <h4>My Listings:</h4>
      <p> LIST OF LISTINGS </p>
    </div>
    <div>{{ users }}</div>
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
      users: {
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
          .get('http://localhost:3000/api/v1/users', config)
          .then((response) => (this.users = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
hr {
  border: 1px solid #00428c;
  margin-bottom: 10px;
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

.pic-button {
  background-color: #00428c;
  opacity: 0.6;
  color: white;
  padding: 10px 10px;
  margin: 30 0 -20;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.pic-button:hover {
  opacity: 1;
}

.details-button {
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

p {
  padding-left: 400;
  font-size: 18;
}
</style>
