var express = require('express');
var router = express.Router({mergeParams: true});
var Review = require('../models/review');
var Item = require('../models/item')


//Create a review for a item
router.post('/items/:item_id/:userId/reviews', function(req, res, next){
    var review = new Review(req.body);
    review.author = req.params.userId
    review.item_id = req.params.item_id
    review.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(review);
    })
});

//Get all reviews of an item // Duplicate
router.get('/item/:item_id/reviews', function(req, res){
    review.find({item_id: req.params.item_id})
    .populate('reviews')
    .exec(function ( err, reviews){
        if(err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(reviews);
    });
});

//Delete a item and all reviews connected to it
router.delete('/items/:item_id/review/:review_id', function (req,res,next){
    Review.findOneAndDelete({_id: req.params.review_id}, function(err, review){
        if(err){
            return next(err);
        }
        if (review == null){
            return res.status(404).json({'message': 'No review found'})
        }
        Item.findByIdAndUpdate({_id: req.params.item_id}, {$pull: {reviews : req.params.review_id}}, function (err, item){
        if (err){
            return next(err);
        }return res.status(200).json(review);
        });
    });
});


/*
//Get all reviews // may be used in the future
router.get('/reviews', function(req, res, next) {
    Review.find(function(err, reviews) {
        if (err) { return next(err); }
        res.json({"reviews": reviews });
    });
});
*/

//Get all reviews for a particular item // Duplicate
router.get('/items/:item_id/reviews', function (req, res, next)  {
    var itemId = req.params.item_id
    Review.find({'item_id' : itemId}, function(err, review) {
        if (err) { return next(err); }
        if (review === null) {
            return res.status(404).json({'message': 'Item not found!'});
        }
        res.json(review);
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
            return res.status(404).json({"message": "Review not found"})
        }
        review.title = (req.body.title || review.title)
        review.comment = (req.body.comment || review.comment)
        review.rating = (req.body.rating || review.rating)
        review.save();
        res.json(review);
    });
});

//Filtering ratings if values in postman for example is left empty all reviews will be retrived.
router.get("api/v1/reviews", function (req, res, next) {
    //Change casting string to number (Changing variabel type)
    const rating = Number.parseInt(req.query.rating);
    //"?" Is like a if statement, if there are no rating we do else ":" which means "else"
    Review.find(rating ? { rating: { $eq: rating } } : {})
    .populate('reviews')
    .exec(function (err, reviews)
    {
    if (err) {
        return res.status(500).send(err);
    }
    return res.status(200).json(reviews);
    });
});

module.exports = router;
