<template>
  <div>
    <form action="action_page.php">
      <div class="container center">
        <h1 class="first-line center">Create A New Account</h1>
        <p><b> Please enter your information below:</b></p>
        <hr />

        <label for="FullName">Full name:</label>
        <input
          type="text"
          placeholder="Enter first and last name"
          name="FullName"
          id="FullName"
          required
        />
        <br />
        <label for="UserName">Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          name="UserName"
          id="UserName"
          required
        />
        <br />
        <label for="UserPassword">Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          name="UserPassword"
          id="UserPassword"
          required
        />
        <br />
        <label for="Email">Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          name="Email"
          id="Email"
          required
        />
        <br />
        <label for="PhoneNumber">Phone number:</label>
        <input
          type="text"
          placeholder="Enter phone number"
          name="PhoneNumber"
          id="PhoneNumber"
          required
        />
        <br />
        <label for="City">City:</label>
        <input
          type="text"
          placeholder="Enter city"
          name="City"
          id="City"
          required
        />
        <br />
        <label for="PostNr">Postal code:</label>
        <input
          type="text"
          placeholder="Enter postal code"
          name="PostNr"
          id="PostNr"
          required
        />
        <br />
        <label for="Address">Street address:</label>
        <input
          type="text"
          placeholder="Enter street name and number"
          name="Address"
          id="Address"
          required
        />
        <br />
        <p>
          <b
            >By creating an account you agree to follow our
            <a href="#">Site Rules</a>.</b
          >
        </p>
        <button type="submit" class="registerbtn"><b>REGISTER NOW!</b></button>
      </div>
      <div class="container signin">
        <p>Already have an account? <a href="#">Sign in instead!</a></p>
      </div>
    </form>
  </div>
</template>
<style>
.first-line {
  color: white;
  background-color: #00428c;
  opacity: 0.9;
  padding: 30px;
}

.center {
  text-align: center;
}

.large-text {
  font-size: 100%;
}

.container {
  padding: 20px;
}

input[type='text'],
input[type='password'],
input[type='email'] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

hr {
  border: 1px solid #00428c;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #00428c;
  color: white;
  padding: 20px;
  margin: 10px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.6;
  font-size: large;
}

.registerbtn:hover {
  opacity: 1;
}

a {
  color: dodgerblue;
}
</style>
