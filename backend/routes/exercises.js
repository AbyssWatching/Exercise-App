//needs the router module
const router = require('express').Router();
//needs the schema for the DN
const Exercise = require('../Models/Exercise.model');

//the root url for exercise
router.route('/').get((req, res) =>{
    Exercise.find()
    //finds and returns exercise
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Exercise: ' + err));
});

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
    });

    //saves
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//:id is like a variable allowing different types of ID and it will be the actual ID 
//if you are unsure you can get the ID from the DB
router.route('/:id').get((req, res) =>{
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

//notice this request has.delete and findbyidanddelete
router.route('/:id').delete((req, res) =>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise Gon'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//finds existing then updates each part(field in that element)
//can refactor for singular updates
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

        exercise.save()
            .then(() => res.json('Exercise Updated'))
            .catch((err) => res.status(400).json('Error: ' + err) )
    })
})
module.exports = router;