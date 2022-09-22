var express = require('express');
var router = express.Router({mergeParams: true});
var Review = require('../models/review');
var Item = require('../models/item')



//Get all reviews
router.get('/', function(req, res, next) {
    Review.find(function(err, reviews) {
        if (err) { return next(err); }
        res.json({"reviews": reviews });
    });
});


// Get review by ID
router.get('/:id', function(req, res, next) {
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
router.delete('/', function(req, res, next){
    Review.deleteMany((err, reviews) => {
        if(err){return next(err);}
        res.json({"users": reviews});
    });
})

//Delete review by id
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Review.findOneAndDelete({_id: id}, function(err, review) {
        if (err) { return next(err); }
        if (review === null) {
            return res.status(404).json({'message': 'Reviews not found'});
        }
        res.json(review);
    });
});

router.put('/:id', function(req, res) {
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


router.patch('/:id', function(req, res, next) {
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
