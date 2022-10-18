<!-- Responsive design in progress. -->
<!-- This page will fulfill requirement (6.3) from checklist, having different layouts for different device widths. -->

<template>
  <div class="container">
    <form @submit.prevent="editAccount" action="action_page.php" align-v="center">
      <b-container>
        <b-col>
          <h1 class="first-line">Edit your account</h1>
          <p class="large-text">
            <b>You may update your information below:</b>
          </p>
        </b-col>
        <hr />
        <b-col>
          <label for="FullName" class="mobile-text">Full name:</label>
          <input v-model="formData.fullName" type="text" name="FullName" id="FullName" required />
          <br />
          <label for="UserName" class="mobile-text">Username:</label>
          <input v-model="formData.userName" type="text" name="UserName" id="UserName" required />
          <br />
          <label for="UserPassword" class="mobile-text">Password:</label>
          <input v-model="userPass" type="password" name="UserPassword" id="UserPassword" required />
          <br />
          <label for="Email" class="mobile-text">Email:</label>
          <input v-model="formData.email" type="email" name="Email" id="Email" required />
          <br />
          <label for="PhoneNumber" class="mobile-text">Phone number:</label>
          <input v-model="formData.phoneNumber" type="text" name="PhoneNumber" id="PhoneNumber" required />
          <br />
          <label for="City" class="mobile-text">City:</label>
          <input v-model="formData.location.city" type="text" name="City" id="City" required />
          <br />
          <label for="PostNr" class="mobile-text">Postal code:</label>
          <input v-model="formData.location.postNr" type="text" name="PostNr" id="PostNr" required />
          <br />
          <label for="Address" class="mobile-text">Street address:</label>
          <input v-model="formData.location.streetAddress" type="text" name="Address" id="Address" required />
        </b-col>
        <br />
        <b-col>
          <button type="submit" class="registerbtn">
            <b>Update account details</b>
          </button>
        </b-col>
      </b-container>
    </form>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'Register',
  data() {
    return {
      formData: {
        fullName: '',
        userName: '',
        phoneNumber: '',
        location: {
          city: '',
          postNr: '',
          streetAddress: ''
        },
        email: '',
        image: ''
      },
      userPass: ''
    }
  },
  mounted() {
    this.getUser()
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
        const response = await Api
          .get('/v1/users/auth', config)
          .then((response) => (this.formData = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    editAccount() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: 'Bearer ' + token
        }
      }
      Api
        .patch(
          '/v1/users/id',
          {
            fullName: this.formData.fullName,
            userName: this.formData.userName,
            userPass: this.userPass,
            phoneNumber: this.formData.phoneNumber,
            location: {
              city: this.formData.location.city,
              postNr: this.formData.location.postNr,
              streetAddress: this.formData.location.streetAddress
            },
            email: this.formData.email
          },
          config
        )
        .then((response) => console.log(response))
      this.$router.push('/login').catch((error) => console.log(error))
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
