var express = require('express');
const user = require('../models/user');
var router = express.Router();
var User = require('../models/user');

//Create a user
router.post('/users', function(req, res, next){
    var user = new User(req.body);
    user.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(user);
    })
});

//Get all users
    router.get('/users', (req, res, next) => {
        User.find((err, users) => {
            if(err){return next(err);}
            res.json({"users": users});
        });
    });

//Get user by id
    router.get('/users/:id', function(req, res, next) {
        var id = req.params.id
        User.findById(id, function(err, user) {
            if (err) { return next(err); }
            if (user === null) {
                return res.status(404).json({'message': 'User not found!'});
            }
            res.json(user);
        });
    });


//Delete all users
router.delete('/users', function(req, res, next){
    User.deleteMany((err, users) => {
        if(err){return next(err);}
        res.json({"users": users});
    });
})

//Delete user by id
router.delete('/users/:id', function(req, res, next) {
    var id = req.params.id
    User.findByIdAndDelete(id, function(err, user) {
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found!'});
        }
        res.json(user);
    });
});

router.put('/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        user.fullName = req.body.fullName
        user.userName = req.body.userName
        user.userPass = req.body.userPass
        user.phoneNumber = req.body.phoneNumber
        user.location = req.body.location
        user.email = req.body.email
        user.save();
        res.json(user);
    });
});

router.patch('/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        user.fullName = (req.body.fullName || user.fullName)
        user.userName = (req.body.userName || user.userName)
        user.userPass = (req.body.userPass || user.userPass)
        user.phoneNumber = (req.body.phoneNumber || user.phoneNumber)
        user.location = (req.body.location || user.location)
        user.email = (req.body.email || user.email)
        user.save();
        res.json(user);
    });
});

module.exports = router;
