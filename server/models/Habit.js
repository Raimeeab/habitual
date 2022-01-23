import { Schema, model } from "mongoose";

const habitSchema = new Schema({
  timestamps: true,
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
  goal: {
    // Brief description of how habit betters their life
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


model.exports = habitSchema; 