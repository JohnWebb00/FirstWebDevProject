<!DOCTYPE html>
<!-- This is just the HTML and CSS for My Account page. -->

<style>
    .first-line {
  color: white;
  background-color: #00428c;
  opacity: 0.9;
  padding: 30px;
}

hr {
  border: 1px solid #00428c;
  margin-bottom: 10px;
}

a {
  color: dodgerblue;
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

  p2 {
    padding-left: 400;
  }

  p4 {
    padding-left: 400;
    font-size: 18;
  }

  h3 {
    background: #f1f1f1;
    margin: 80 0 50 0;
    padding: 20 260 20 260;
    font-size: 25;
    display: inline-block;
  }

  h4 {
    background: #00428c;
    margin: 80 0 50 0;
    padding: 20 100 20 100;
    font-size: 25;
    color: white;
    display: inline-block;

  }

</style>

<html>
    <head>
      <!-- navbar goes here? -->
    </head>
    <body>
      <div>

      <center>

            <h1 class="first-line">My Account - "Username"</h1>
        <br>
        <img src="https://tinyurl.com/4sk8sjxj" alt="profilePic" class="image-cropper">
        <br>
        <h2 class="pic-button">
         CHANGE PICTURE
        </h2>
        <br>
            <h3>
              Account details
        </h3>
          </center>
        <p>
          <b>Full name:</b> [fullName] <br>
          <b>City:</b> [city] <br>
          <b>Email:</b> [email] <br>
          <b>Zip code:</b> [postalCode] <br>
          <b>Street:</b> [street] <br>
        </p>

        <p2 class="details-button">
          <b>EDIT DETAILS</b>
        </p2>

        </div>

      <div2>
        <center>
        <h4>
          My Listings:
        </h4>
        </center>
      <p4>
        LIST OF LISTINGS
      </p4>
      </div2>

    </body>
</html>
