const { Schema } = require("mongoose");
const completedHabitsSchema = require("./CompletedHabits");

const habitSchema = new Schema(
  {
    name: {
      type: String,
      required: "You must give the habit a name!",
      minlength: 1,
      maxlength: 30,
      trim: true,
      sparse: true,
    },
    frequency: {
      // How many times does user wish to complete habit per week
      type: String,
      required: "Frequency must be at least once a week!",
      sparse: true,
      // min: 1,
      // max: 7,
    },
    journal: {
      // User can input notes about their habits
      type: String,
      // Journaling is optional
      required: false,
      // minlength: 3,
      maxlength: 280,
    },
    completedHabits: [completedHabitsSchema],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = habitSchema;
