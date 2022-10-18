<!-- Responsive design in progress. -->
<!-- This page will fulfill requirement (6.3) from checklist, having different layouts for different device widths. -->

<template>
  <div class="container">
    <form
      @submit.prevent="handleRegistration"
      action="action_page.php"
      align-v="center">
      <b-container>
        <b-col>
          <h1 class="first-line">Create A New Account</h1>
          <p class="large-text"><b>Please enter your information below:</b></p>
        </b-col>
        <hr />
        <b-col>
          <label for="FullName" class="mobile-text">Full name:</label>
          <input
            v-model="fullName"
            type="text"
            placeholder="Enter full name"
            name="FullName"
            id="FullName"
            required
          />
          <br />
          <label for="UserName" class="mobile-text">Username:</label>
          <input
            v-model="userName"
            type="text"
            placeholder="Enter username"
            name="UserName"
            id="UserName"
            required
          />
          <br />
          <label for="UserPassword" class="mobile-text">Password:</label>
          <input
            v-model="userPass"
            type="password"
            placeholder="Enter password"
            name="UserPassword"
            id="UserPassword"
            required
          />
          <br />
          <label for="Email" class="mobile-text">Email:</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter email"
            name="Email"
            id="Email"
            required
          />
          <br />
          <label for="PhoneNumber" class="mobile-text">Phone number:</label>
          <input
            v-model="phoneNumber"
            type="text"
            placeholder="Enter phone number"
            name="PhoneNumber"
            id="PhoneNumber"
            required
          />
          <br />
          <label for="City" class="mobile-text">City:</label>
          <input
            v-model="city"
            type="text"
            placeholder="Enter city"
            name="City"
            id="City"
            required
          />
          <br />
          <label for="PostNr" class="mobile-text">Postal code:</label>
          <input
            v-model="postNr"
            type="text"
            placeholder="Enter postal code"
            name="PostNr"
            id="PostNr"
            required
          />
          <br />
          <label for="Address" class="mobile-text">Street address:</label>
          <input
            v-model="streetAddress"
            type="text"
            placeholder="Enter street address"
            name="Address"
            id="Address"
            required
          />
        </b-col>
        <br />
        <b-col>
          <p>
            <b class="large-text">
              By creating an account you agree to follow our
              <a href="#">Site Rules</a>.</b
            >
          </p>
          <button type="submit" class="registerbtn">
            <b>REGISTER NOW!</b>
          </button>
          <div class="container signin">
            <p class="large-text">
              Already have an account?
              <a href="http://localhost:8080/login">Sign in instead!</a>
            </p>
          </div>
        </b-col>
      </b-container>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data() {
    return {
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
  },
  methods: {
    async handleRegistration() {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/v1/users/register',
          {
            fullName: this.fullName,
            userName: this.userName,
            userPass: this.userPass,
            phoneNumber: this.phoneNumber,
            location: {
              city: this.city,
              postNr: this.postNr,
              streetAddress: this.streetAddress
            },
            email: this.email
          }
        )

        console.log(response)
        this.$router.push('/home')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
@media (max-width: 767px) {
  /* Styling for devices with a width of 767px or SMALLER. */
  .container {
    padding: 16px;
    width: 100%;
    margin: auto;
  }
  .first-line {
    color: white;
    background-color: #001e41;
    opacity: 0.9;
    padding: 30px;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'] {
    width: 100%;
    padding: 20px;
    font-size: 125%;
    margin: auto;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }
  .registerbtn {
    background-color: #002753;
    color: white;
    padding: 20px;
    margin: auto;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.6;
    font-size: 150%;
  }

  .large-text {
    font-size: 150%;
    margin-bottom: 6%;
    margin-top: 6%;
  }

  .mobile-text {
    font-size: 125%;
    margin-bottom: 3%;
    margin-top: 3%;
  }
}

@media (min-width: 768px) {
  /* Styling for devices with a width of 768px or BIGGER. */
  .container {
    padding: 8px;
    width: 100%;
    margin: auto;
  }
  .first-line {
    color: white;
    background-color: #013a7b;
    opacity: 0.9;
    padding: 25px;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'] {
    width: 100%;
    padding: 15px;
    margin: auto;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }

  hr {
    border: 1px solid #00428c;
    margin-bottom: 10%;
  }
  .registerbtn {
    background-color: #00428c;
    color: white;
    padding: 20px;
    margin: auto;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.6;
    font-size: large;
  }
  .large-text {
    font-size: 110%;
    margin-bottom: 4%;
    margin-top: 4%;
  }
}

.registerbtn:hover {
  opacity: 1;
}

form {
  max-width: 600px;
  margin: auto;
}

a {
  color: dodgerblue;
}
</style>
