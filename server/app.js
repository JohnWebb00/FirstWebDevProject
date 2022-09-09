var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');

var User = require('./models/user')

// Create Express app
var app = express();

// Variables
var mongoURI = process.env.MONGODB_URI || 'mongodb+srv://webdev32:webdev32pass@cluster0.ay1qyti.mongodb.net/?retryWrites=true&w=majority';
var port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
        console.error(err.stack);
        process.exit(1);
    }
    console.log(`Connected to MongoDB with URI: ${mongoURI}`);
});

// Parse requests of content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP request logger
app.use(morgan('dev'));
// Enable cross-origin resource sharing for frontend must be registered before api
app.options('*', cors());
app.use(cors());

// Import routes
app.get('/api', function(req, res) {
    res.json({'message': 'Welcome to your DIT342 backend ExpressJS project!'});
});

// Catch all non-error handler for api (i.e., 404 Not Found)
app.use('/api/*', function (req, res) {
    res.status(404).json({ 'message': 'Not Found' });
});

//test routes
app.post('/add-user', (req, res) => {
var user = new User({
    name : "jeet",
    phoneNumber : 882844498,
    PNR: 9219869902,
    location: "Addresssssss",
    email: "email@gmail.com"
});
    user.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

var users = []; // Users storage array
app.post('/create-user', function(req, res) {
    var new_user = {
        _id : users.length,
        name : req.body.name,
        phoneNumber : req.body.phoneNumber,
        PNR: req.body.PNR,
        location: req.body.location,
        email: req.body.email
    }
    users.push(new_user);
    res.json(new_user);
});

app.get('/users', function(req, res, next) {
    User.find(function(err, users) {
        if (err) { return next(err); }
        res.json({"users": users});
    });
});

app.get('/users/_id', function(req, res, next) {
    var id = req.params.id;
    User.findById(req.params.id, function(err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        res.json(user);
    });
});

// Configuration for serving frontend in production mode
// Support Vuejs HTML 5 history mode
app.use(history());
// Serve static assets
var root = path.normalize(__dirname + '/..');
var client = path.join(root, 'client', 'dist');
app.use(express.static(client));

// Error handler (i.e., when exception is thrown) must be registered last
var env = app.get('env');
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
    console.error(err.stack);
    var err_res = {
        'message': err.message,
        'error': {}
    };
    if (env === 'development') {
        // Return sensitive stack trace only in dev mode
        err_res['error'] = err.stack;
    }
    res.status(err.status || 500);
    res.json(err_res);
});

app.listen(port, function(err) {
    if (err) throw err;
    console.log(`Express server listening on port ${port}, in ${env} mode`);
    console.log(`Backend: http://localhost:${port}/api/`);
    console.log(`Frontend (production): http://localhost:${port}/`);
});

module.exports = app;
