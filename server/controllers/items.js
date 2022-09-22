var express = require('express');
var router = express.Router();
var Item = require('../models/item');




//Create a item
router.post('/items', function(req, res, next){
    var item = new Item(req.body);
    item.save(function(err, item) {
        if (err) { return next(err); }
        res.status(201).json(item);
    })
});


//Get all item
router.get('/items', function(req, res, next) {
    Item.find(function(err, items) {
        if (err) { return next(err); }
        res.json({"items": items });
    });
});

// Get Item by ID
router.get('/items/:id', function(req, res, next) {
    var id = req.params.id;
    Item.findById(id, function(err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({'message': 'Item not found!'});
        }
        res.json(item);
    });
});
//Delete all Item
router.delete('/items', function(req, res, next){
    Item.deleteMany((err, items) => {
        if(err){return next(err);}
        res.json({"users": items});
    });
})

//Delete Item by id
router.delete('/items/:id', function(req, res, next) {
    var id = req.params.id;
    Item.findOneAndDelete({_id: id}, function(err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({'message': 'Item not found'});
        }
        res.json(item);
    });
});

router.put('/items/:id', function(req, res) {
    var id = req.params.id;
    var updated_item = {
        "_id": id,
        "title": req.body.title,
        "comment": req.body.comment,
        "rating": req.body.rating
    }
    Item[id] = updated_item;
    res.json(updated_item);
});

// Partially update Item by ID
/*
router.patch('/items/:id', function(req, res) {
    var id = req.params.id;
    var item = Item[id];
    var updated_item = {
        "_id": id,
        "itemName": (req.body.itemName || item.itemName),
        "rentPrice": (req.body.rentPrice || item.rentPrice),
        "duration": (req.body.duration || item.duration),
        "description": (req.body.description || item.description)
    };
    Item[id] = updated_item;

    res.json(updated_item);
});
*/

router.patch('/items/:id', function(req, res, next) {
    var id = req.params.id;
        Item.findById(id, function (err, item) {
        if (err){
            return next(err);
        } if (item == null) {
            return res.status(404).json({"message": "Item not found"})
        }
        item.itemName = (req.body.itemName || item.itemName)
        item.rentPrice = (req.body.rentPrice || item.rentPrice)
        item.duration = (req.body.duration || item.duration)
        item.description = (req.body.description || item.description)
        item.save();
        res.json(item);
    });
});
module.exports = router;
