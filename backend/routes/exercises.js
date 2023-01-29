//needs the router module
const router = require('express').Router;
//needs the schema for the DN
const Exercise = require('../Models/Exercise.model')

//the root url for exercise
router.route('/').get((req, res) =>{
    Exercise.find()
    //finds and returns exercise
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Exercise: ' + err));
})

//allows adding of exercises
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    //parses duration and date
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    //creates new exercise from the above
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    })

    //saves
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;