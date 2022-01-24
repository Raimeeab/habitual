const { Schema, model } = require("mongoose");

const habitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  frequency: {
    // How many times does user wish to complete habit per week
    type: Number,
    required: true,
    min: 1,
    max: 7,
  },
  journal: {
    // User can input notes about their habits
    type: String,
    // Journaling is optional
    required: false,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  time: {
    type: Date,
  },
});

const Habit = model('Habit', habitSchema)

model.exports = Habit;
