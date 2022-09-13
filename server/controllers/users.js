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
module.exports = router;


