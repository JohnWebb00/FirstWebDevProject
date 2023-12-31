var express = require('express');
var router = express.Router({ mergeParams: true });
var Item = require('../models/item');
var Review = require('../models/review');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

//Used to authenticate the current user
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    console.log(req.headers)

    if (token == null) { return res.send({ message: 'no token' }) }

    jwt.verify(token, 'privateKey', (err, user) => {
        if (err) { return res.sendStatus(403) }
        req.user = user
        next()
    })
}

//Create a item
router.post('/', authenticateToken, function (req, res, next) {
    var item = new Item(req.body)
    item.itemAuthor = req.user._id;

    item.save(function (err, item) {
        if (err) { return next(err); }
        res.status(201).json(item);
    })
});

// Filtering out items that hasn't been approved
router.get("/", function (req, res, next) {
    const approved = req.query.approved;
    //"?" Is like a if statement, if there are no rating we do else ":" which means "else"
    Item.find(approved ? { approved: { $eq: approved } } : {})
        //.populate('items')
        .exec(function (err, items) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(items);
        });
});

// Filtering out items that hasn't been approved
router.get("/category", function (req, res, next) {
    const category = req.query.category;
    //"?" Is like a if statement, if there are no rating we do else ":" which means "else"
    Item.find(category ? { category: { $eq: category } } : {})
        // .populate('items')
        .exec(function (err, items) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(items);
        });
});

// Get Item by ID
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    Item.findById(id, function (err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({ 'message': 'Item not found!' });
        }
        res.json(item);
    });
});

//Create a review for a item
router.post('/:item_id/reviews', authenticateToken, function (req, res, next) {
    var review = new Review(req.body);
    review.author = req.user._id
    review.item_id = req.params.item_id
    review.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(review);
    })
});

//Get all reviews for a particular item
router.get('/:item_id/reviews', function (req, res, next) {
    var itemId = req.params.item_id
    Review.find({ 'item_id': itemId }, function (err, review) {
        if (err) { return next(err); }
        if (review === null) {
            return res.status(404).json({ 'message': 'Item not found!' });
        }
        res.json(review);
    });
});

//Get a specific review for a particular item
router.get('/:item_id/reviews/:review_id', function (req, res, next) {
    var itemId = req.params.item_id
    var reviewId = req.params.review_id
    Item.findById(itemId, function (err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({ 'message': 'Item not found!' });
        }
        Review.findById(reviewId, function (err, review) {
            if (err) { return next(err); }
            if (review === null) {
                return res.status(404).json({ 'message': 'Review not found!' });
            }
            res.status(200).json(review)
        });
    });
});

    //Delete all Item
    router.delete('/', function (req, res, next) {
    Item.deleteMany((err, items) => {
        if (err) { return next(err); }
        res.json({ "items": items });
    });
})

    //Delete Item by id
    router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    Item.findOneAndDelete({ _id: id }, function (err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({ 'message': 'Item not found' });
        }
        res.json(item);
    });
});

router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    Item.findById(id, function (err, item) {
        if (err) { return next(err); }
        if (item == null) {
            return res.status(404).json({ "message": "item not found" });
        }
        item.itemName = (req.body.itemName || item.itemName)
        item.approved = (req.body.approved || item.approved)
        item.rentPrice = (req.body.rentPrice || item.rentPrice)
        item.duration = (req.body.duration || item.duration)
        item.description = (req.body.description || item.description)
        item.approved = (req.body.approved || item.approved)
        item.category = (req.body.category || item.category)
        item.save();
        res.json(item);
    });
});

// Partially update Item by ID

router.patch('/:id', function (req, res, next) {
    var id = req.params.id;
    Item.findById(id, function (err, item) {
        if (err) {
            return next(err);
        } if (item == null) {
            return res.status(404).json({ "message": "Item not found" })
        }
        item.itemName = (req.body.itemName || item.itemName)
        item.approved = (req.body.approved || item.approved)
        item.rentPrice = (req.body.rentPrice || item.rentPrice)
        item.duration = (req.body.duration || item.duration)
        item.description = (req.body.description || item.description)
        item.approved = (req.body.approved || item.approved)
        item.category = (req.body.category || item.category)
        item.save();
        res.json(item);
    });
});

module.exports = router;
