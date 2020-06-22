const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type:{
            type: String,
            trim: true,
            required: "Type of exercise required"
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise name is required"
        },
        duration: {
            type: Number,
            required: "Enter duration in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number,
            required: "Enter distance in miles"
        }

    }

    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;