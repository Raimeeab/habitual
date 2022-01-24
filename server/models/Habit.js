const { Schema } = require("mongoose");

const habitSchema = new Schema(
  {
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
    // completedHabits: [completedHabitsSchema]
    // time: {
    //   type: Date,
    // },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = habitSchema;
