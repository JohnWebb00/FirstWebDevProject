var express = require('express');
const review = require('../models/review');
var router = express.Router();
var Review = require('../models/review');
const Item = require('../models/item')


//Create a review
router.post('/reviews', function(req, res, next){
    var review = new Review(req.body);
    review.save(function(err, review) {
        if (err) { return next(err); }
        res.status(201).json(review);
    })
});

//Get all reviews
router.get('/reviews', function(req, res, next) {
    Review.find(function(err, reviews) {
        if (err) { return next(err); }
        res.json({"reviews": reviews });
    });
});

// Get review by ID
router.get('/reviews/:id', function(req, res, next) {
    var id = req.params.id;
    Review.findById(id, function(err, review) {
        if (err) { return next(err); }
        if (review === null) {
            return res.status(404).json({'message': 'review not found!'});
        }
        res.json(review);
    });
});
//Delete all reviews
router.delete('/reviews', function(req, res, next){
    Review.deleteMany((err, reviews) => {
        if(err){return next(err);}
        res.json({"users": reviews});
    });
})

//Delete review by id
router.delete('/reviews/:id', function(req, res, next) {
    var id = req.params.id;
    Review.findOneAndDelete({_id: id}, function(err, review) {
        if (err) { return next(err); }
        if (review === null) {
            return res.status(404).json({'message': 'Reviews not found'});
        }
        res.json(review);
    });
});

router.put('/reviews/:id', function(req, res) {
    var id = req.params.id;
    var updated_review = {
        "_id": id,
        "title": req.body.title,
        "comment": req.body.comment,
        "rating": req.body.rating
    }
    Review[id] = updated_review;
    review.save();
    res.json(updated_review);
});


// Partially update review by ID
<<<<<<< HEAD
=======
router.patch('/reviews/:id', function(req, res) {
    var id = req.params.id;
    var review = Review[id];
    var updated_review = {
        "_id": id,
        "title": (req.body.title || review.title),
        "comment": (req.body.comment || review.comment),
        "rating": (req.body.rating || review.rating)
    };
>>>>>>> e884b089e7ca171a61b7d45c2cfb02a656dd8138

router.patch('/change_review/:id', function(req, res, next) {
    var id = req.params.id;
        Review.findById(id, function (err, review) {
        if (err){ return next(err); }
        if (review == null) {
            return res.status(404).json({"message": "not found"})
        }

        Review.id = id;
        Review.title = (req.body.title || review.title);
        Review.comment = (req.body.comment || review.comment);
        Review.rating = (req.body.rating || review.rating);

    review.save();
    res.json(review);
    });
});

module.exports = router;
