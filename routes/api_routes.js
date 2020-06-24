var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).sort({ day: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res, next) => {
    const id = req.params.id;
    const data = req.body
    db.Workout.updateOne({ _id: id }, {
      $push: {
        exercises: [
          {
            "type": data.type,
            "name": data.name,
            "duration": data.duration,
            "distance": data.distance,
            "weight": data.weight,
            "reps": data.reps,
            "sets": data.sets
          }
        ]}
    })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).limit(5)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
}
