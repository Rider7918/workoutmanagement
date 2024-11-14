const express = require("express");
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} = require('../controllers/workoutController')


const router = express.Router();

//GET all workouts
router.get("/",getWorkouts);

//GET all single workout

router.get("/:id",getWorkout);

//Post a workout

router.post("/", createWorkout);

//Delete workout

router.delete("/:id",deleteWorkout);

//Update a workout


router.patch("/:id", updateWorkout);

module.exports = router;
