var express = require('express');
var router = express.Router({ mergeParams: true });
var JWT = require('jsonwebtoken');
var User = require('../models/user');
var bcrypt = require('bcryptjs')

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
            location: req.body.location,
            email: req.body.email
        })
        const result = await user.save();

        const { userPass, ...data } = await result.toJSON();

        res.send(data)
    } catch (error) {
        return res.status(err)
    }

});

router.post('/login', async (req, res) => {
    try {

        const { email, userPass } = req.body

        const user = await User.findOne({ email: email });

        if (!(email && userPass)) {
            return res.status(401).json({ 'message': 'Must enter an email and password' });
        }

        if (!user) {
            return res.status(404).json({ 'message': 'User account not found' });
        }

        if (!await bcrypt.compare(req.body.userPass, user.userPass)) {
            return res.status(400).send({ 'message': 'invalid credentials' })
        }

        const token = JWT.sign({ _id: user._id }, "privateKey")

        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        res.send({ message: 'login successful' })
    } catch (error) {
        res.send(error)
    }

});

router.get('/authenticate', async (req, res) => {
    try {
const cookie = req.cookies['jwt']

const claims = JWT.verify(cookie, "privateKey")

     if(!claims){
        return res.status(401).send({ 'message': 'Authentication Failed' })
     }

     const user = await User.findOne({ _id: claims._id })

     const {password, ...data} = await user.toJSON()

     res.send(data)
    } catch (error) {
        res.send(error)
    }
});

router.post('/logout', async (req, res) => {
    try {
        res.cookie('jwt','',{maxAge:0})

     res.send({message: 'Log-out successful'})
    } catch (error) {
        res.send(error)
    }
});



router.post('/', function (req, res, next) {
    console.log(req.body)
    var user = new User(req.body);
    user.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(user);
    })
});

//Get all users
router.get('/', (req, res, next) => {
    User.find((err, users) => {
        if (err) { return next(err); }
        res.json({ "users": users });
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

//Delete user by id
router.delete('/:id', function (req, res, next) {
    var id = req.params.id
    User.findByIdAndDelete(id, function (err, user) {
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

router.patch('/:id', function (req, res, next) {
    var id = req.params.id;
    User.findById(id, function (err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({ "message": "User not found" });
        }
        user.fullName = (req.body.fullName || user.fullName)
        user.userName = (req.body.userName || user.userName)
        user.userPass = (req.body.userPass || user.userPass)
        user.phoneNumber = (req.body.phoneNumber || user.phoneNumber)
        user.location = (req.body.location || user.location)
        user.email = (req.body.email || user.email)
        user.save();
        res.json(user);
    });
});


module.exports = router;
