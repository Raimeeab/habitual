const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// This schema will hold all the instances in which
// the user has marked a habit as complete
const completedHabitsSchema = new Schema({
  completedAt: {
    type: Date,
    default: null,
    // Format timestamp for habit completed
    get: (timestamp) => dateFormat(timestamp),
  }
});

module.exports = completedHabitsSchema;
