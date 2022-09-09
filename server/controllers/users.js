var express = require('express');
var router = express.Router();
var User = require('../models/user');
     
router.post('/create-user', function(req, res, next){
    var user = new User(req.body);
    user.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(user);
    })
});
    
    router.get('/get-users', (req, res, next) => {
        User.find((err, users) => {
            if(err){return next(err);}
            res.json({"users": users});
        });
    }); 
    

router.delete('/delete-users', function(req, res, next){
    User.deleteMany((err, users) => {
        if(err){return next(err);}
        res.json({"users": users});
    });
})

module.exports = router;


