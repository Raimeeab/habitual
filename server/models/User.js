import { Schema, model } from "mongoose";
import {habitSchema} from "./Habit"; 
import bycrpt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    // setHabits to be an array of data that adheres to the habitsSchema
    setHabits: [habitSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model('user', userSchema); 

model.exports = User; 