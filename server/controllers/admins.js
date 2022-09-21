var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');


//Create a admin
router.post('/', function(req, res, next){
    var admin = new Admin(req.body);
    admin.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(admin);
    })
});

//Get all admins
    router.get('/', (req, res, next) => {
        Admin.find((err, admins) => {
            if(err){return next(err);}
            res.json({"admins": admins});
        });
    });

//Get admin by id
    router.get('/:id', function(req, res, next) {
        var id = req.params.id
        Admin.findById(id, function(err, admin) {
            if (err) { return next(err); }
            if (admin === null) {
                return res.status(404).json({'message': 'Admin not found!'});
            }
            res.json(admin);
        });
    });


//Delete all admins
router.delete('/', function(req, res, next){
    Admin.deleteMany((err, admins) => {
        if(err){return next(err);}
        res.json({"admins": admins});
    });
})

//Delete admin by id
router.delete('/:id', function(req, res, next) {
    var id = req.params.id
    Admin.findByIdAndDelete(id, function(err, admin) {
        if (err) { return next(err); }
        if (admin === null) {
            return res.status(404).json({'message': 'admin not found!'});
        }
        res.json(admin);
    });
});

router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    Admin.findById(id, function(err, admin) {
        if (err) { return next(err); }
        if (admin == null) {
            return res.status(404).json({"message": "admin not found"});
        }
        admin.adminName = req.body.adminName
        admin.adminUsername = req.body.adminUsername
        admin.adminPass = req.body.adminPass
        admin.save();
        res.json(admin);
    });
});

router.patch('/:id', function(req, res, next) {
    var id = req.params.id;
    Admin.findById(id, function(err, admin) {
        if (err) { return next(err); }
        if (admin == null) {
            return res.status(404).json({"message": "admin not found"});
        }
        admin.adminName = (req.body.adminName || admin.adminName)
        admin.adminUsername = (req.body.adminUsername || admin.adminUsername)
        admin.adminPass = (req.body.adminPass || admin.adminPass)
        admin.save();
        res.json(admin);
    });
});

module.exports = router;
