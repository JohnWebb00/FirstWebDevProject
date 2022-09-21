var express = require('express');
var router = express.Router();
var Item = require('../models/item');




//Create a item
router.post('/', function(req, res, next){
    var item = new Item(req.body);
    item.save(function(err, item) {
        if (err) { return next(err); }
        res.status(201).json(item);
    })
});


//Get all item
router.get('/', function(req, res, next) {
    Item.find(function(err, items) {
        if (err) { return next(err); }
        res.json({"items": items });
    });
});

// Get Item by ID
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Item.findById(id, function(err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({'message': 'Item not found!'});
        }
        res.json(item);
    });
});

//Create a review for an item
router.post('/:item_id/:userId/reviews', function(req, res, next){
    var review = new Review(req.body);
    review.author = req.params.userId
    review.item_id = req.params.item_id
    review.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(review);
    })
});

//Get all reviews for a particular item
router.get('/:item_id/reviews', function (req, res, next)  {
    var itemId = req.params.item_id
    Review.find({'item_id' : itemId}, function(err, review) {
        if (err) { return next(err); }
        if (review === null) {
            return res.status(404).json({'message': 'Item not found!'});
        }
        res.json(review);
    });
});

//Delete all Item
router.delete('/', function(req, res, next){
    Item.deleteMany((err, items) => {
        if(err){return next(err);}
        res.json({"users": items});
    });
})

//Delete Item by id
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Item.findOneAndDelete({_id: id}, function(err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({'message': 'Item not found'});
        }
        res.json(item);
    });
});

router.put('/:id', function(req, res) {
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
router.patch('/:id', function(req, res) {
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

module.exports = router;
