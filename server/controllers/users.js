var express = require('express');
var router = express.Router({ mergeParams: true });
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Item = require('../models/item');
var bcrypt = require('bcryptjs')

//Used to authenticate the current user
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null) {return res.send({message: 'no token'})}
    
    jwt.verify(token, 'privateKey', (err, user) => {
    if(err){ return res.sendStatus(403) }
    req.user = user
    next()
    })
    }

//Get all users
router.get('/', (req, res, next) => {
    User.find((err, users) => {
        if(err){return next(err);}
        res.json({"users": users});
    });
}); 

//Register a user
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(req.body.userPass, salt)

        const user = new User({
            fullName: req.body.fullName,
            userName: req.body.userName,
            userPass: hashPass,
            phoneNumber: req.body.phoneNumber,
            location: {
                city: req.body.location.city,
                postNr: req.body.location.postNr,
                streetAddress: req.body.location.streetAddress
            },
            email: req.body.email
        })
        const result = await user.save();

        const { userPass, ...data } = await result.toJSON();

        res.send(data)
        res.send({message: 'Registration successful'})
    } catch (error) {
        return res.status(error)
    }

});

router.post('/login', async (req, res) => {

        const { userName, userPass } = req.body

        const user = await User.findOne({ userName: userName });

        if (!(userName && userPass)) {
            return res.status(401).json({ 'message': 'Must enter a username and password' });
        }

        if (!user) {
            return res.status(404).json({ 'message': 'User account not found' });
        }

        if (!await bcrypt.compare(req.body.userPass, user.userPass)) {
            return res.status(400).send({ 'message': 'invalid credentials' })
        }

        const accessToken = createAccessToken(user);
        const refreshToken = jwt.sign(user.toJSON(), "privateKey")
        
        res.json({ accessToken: accessToken, refreshToken: refreshToken })
});

router.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null){
        return res.sendStatus(401)
    }
    if (!refreshToken.includes(refreshToken)){
        return res.sendStatus(403)
    }
jwt.verify(refreshToken, 'privateKey', (err, user) => {
    if (err) return sendStatus(403)
    const accessToken = createAccessToken(user)
})
})

function createAccessToken(user){
return jwt.sign(user.toJSON(), "privateKey"/*, {expiresIn: '45m'}*/)
}

//Get authenticated user
router.get('/auth', authenticateToken, (req, res, next) => {
    const user = req.user
    res.json(user)
});

//Get all items belonging to a user
router.get('/user_id/items', authenticateToken, function (req, res, next)  {
    const user = req.user
    Item.find({'itemAuthor' : user._id}, function(err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({'message': 'User not found!'});
        }
        res.json(item);
    });
});

//Get user by id
router.get('/:id', function (req, res, next) {
    var id = req.params.id
    User.findById(id, function (err, user) {
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({ 'message': 'User not found!' });
        }
        res.json(user);
    });
});


//Delete all users
router.delete('/', function (req, res, next) {
    User.deleteMany((err, users) => {
        if (err) { return next(err); }
        res.json({ "users": users });
    });
})

//Delete all items belonging to a user
router.delete('/user_id/items', authenticateToken, function(req, res, next){
    const user = req.user
    Item.find({itemAuthor : user._id}, function(err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({'message': 'User not found!'});
        }
        Item.deleteMany({'itemAuthor' : user._id}, (err, item) => {
            if(err){return next(err);}
            res.json({"items": item});
        });
    });
})

//Delete user by id
router.delete('/:id', authenticateToken, function (req, res, next) {
    const user = req.user
    User.findByIdAndDelete(user._id, function (err, user) {
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({ 'message': 'User not found!' });
        }
        res.json(user);
    });
});

router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    User.findById(id, function (err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({ "message": "User not found" });
        }
        user.fullName = req.body.fullName
        user.userName = req.body.userName
        user.userPass = req.body.userPass
        user.phoneNumber = req.body.phoneNumber
        user.location = req.body.location
        user.email = req.body.email
        user.save();
        res.json(user);
    });
});

router.patch('/id', authenticateToken, async (req, res, next) => {
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(req.body.userPass, salt)
    const id = req.user._id
    
    User.findById(id, function (err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({ "message": "User not found" });
        }
        user.fullName = (req.body.fullName || user.fullName)
        user.userName = (req.body.userName || user.userName)
        user.userPass = (hashPass || user.userPass)
        user.phoneNumber = (req.body.phoneNumber || user.phoneNumber)
        user.location = (req.body.location || user.location)
        user.email = (req.body.email || user.email)

        user.save()
        res.json(user)
    });
});


module.exports = router;
