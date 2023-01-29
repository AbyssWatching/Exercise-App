//requires express router duh
const router = require('express').Router();
//requires moongoose model
const User = require ('../Models/users.models')

//first route(end point) on /users url path
//if it is a get request this will happen
router.route('/').get((req, res) => {
    //moongose method will get the users from thd DB
    User.find()
    //it will return the users from the db in json
    .then(users => res.json(users))
    //if there was a 400 error it will catch then return it
    .catch(err => res.status(400).json('Error: ' + err));
});

//this will be a post req handler

router.route('/add').post((req, res) =>{

//the new username will be part of the req body
    const username = req.body.username;
    //will create a new instants of username
    const newUser = new User({username});
    //saves that newuser
    newUser.save()
    //will return succesfull add
    .then(() => res.json('User added!'))
    //handles error
    .catch(err => res.status(400).json('Error: ' + err));
})

//exports this for ussage outside!
module.exports = router;