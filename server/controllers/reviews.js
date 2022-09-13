var express = require('express');
var router = express.Router();
var Review = require('../models/review');




//Create a review
router.post('/create_reviews', function(req, res, next){
    var review = new Review(req.body);
    review.save(function(err, review) {
        if (err) { return next(err); }
        res.status(201).json(review);
    })
});


//Get all reviews
router.get('/get_reviews', function(req, res, next) {
    Review.find(function(err, reviews) {
        if (err) { return next(err); }
        res.json({"reviews": reviews });
    });
});

// Get review by ID
router.get('/get_reviews/:id', function(req, res, next) {
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
router.delete('/delet_reviews', function(req, res, next){
    Review.deleteMany((err, reviews) => {
        if(err){return next(err);}
        res.json({"users": reviews});
    });
})

//Delete review by id
router.delete('/delete_reviews/:id', function(req, res, next) {
    var id = req.params.id;
    Review.findOneAndDelete({_id: id}, function(err, review) {
        if (err) { return next(err); }
        if (review === null) {
            return res.status(404).json({'message': 'Reviews not found'});
        }
        res.json(review);
    });
});

router.put('/update_review/:id', function(req, res) {
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
router.patch('/change_review/:id', function(req, res) {
    var id = req.params.id;
    var review = Review[id];
    var updated_review = {
        "_id": id,
        "title": (req.body.title || review.title),
        "comment": (req.body.comment || review.comment),
        "rating": (req.body.rating || review.rating)
    };

    Review[id] = updated_review;
    res.json(updated_review);
});



module.exports = router;
