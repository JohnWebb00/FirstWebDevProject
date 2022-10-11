<template>
    <div class = 'div1'>
<header>Admin Sign-in</header>
<body>
    <form>
<label>Username:</label>
<input type="username" required>

<label>Password:</label>
<input type="password" required>
<b-button class = 'login' pill variant = "dark">Log-in</b-button>
    </form>
    </body>
    <div>Can't remember your password?</div>
    </div>
</template>

<style scoped>
form {
    max-width: 420px;
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

input{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: black;
    border-bottom: 1px solid #ddd;
    color: #555;
}
body{
    margin: 0;
    background: #aaa;
}

#h1{
    font-size: 2em;
    color: black;
    text-transform: uppercase;
    margin: 40px;
}

.login {
    margin-top: 25px;
    color: #eee;
    text-align: right;
}
</style>

<!--
<script>
import axios from 'axios'
export default {
    name: 'admin login',
    data(){
        return{
            adminUsername:'',
            adminPass:''

}
</script>
-->
