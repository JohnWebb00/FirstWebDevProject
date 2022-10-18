var express = require('express');
var router = express.Router({mergeParams: true});
var Review = require('../models/review');
var Item = require('../models/item')
var jwt = require('jsonwebtoken');

//Used to authenticate the current user
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) {return res.send({message: 'no token'})}

    jwt.verify(token, 'privateKey', (err, user) => {
    if(err){ return res.sendStatus(403) }
    user = req.user
    next()
    })
    }

    //Create a review 
router.post('/', function(req, res, next){
    var review = new Review(req.body);
    review.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(review);
    })
});

//Get all reviews
    router.get('/', (req, res, next) => {
        Review.find((err, reviews) => {
            if(err){return next(err);}
            res.json({"reviews": reviews});
        });
    });

//Get review by id
    router.get('/:id', function(req, res, next) {
        var id = req.params.id
        Review.findById(id, function(err, review) {
            if (err) { return next(err); }
            if (review === null) {
                return res.status(404).json({'message': 'Review not found!'});
            }
            res.json(review);
        });
    });


//Delete all reviews
router.delete('/', function(req, res, next){
    Review.deleteMany((err, reviews) => {
        if(err){return next(err);}
        res.json({"reviews": reviews});
    });
})

//Delete review by id
router.delete('/:id', function(req, res, next) {
    var id = req.params.id
    Review.findByIdAndDelete(id, function(err, review) {
        if (err) { return next(err); }
        if (review === null) {
            return res.status(404).json({'message': 'Review not found!'});
        }
        res.json(review);
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


//Get all reviews for a particular item
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
            return res.status(404).json({'message': 'Review not found!'});
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

router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    Review.findById(id, function(err, review) {
        if (err) { return next(err); }
        if (review == null) {
            return res.status(404).json({"message": "Review not found"});
        }
        review.title = req.body.title
        review.comment = req.body.comment
        review.rating = req.body.rating
        review.save();
        res.json(review);
    });
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
router.get("/", function (req, res, next) {
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
