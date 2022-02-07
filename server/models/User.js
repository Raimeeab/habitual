const { Schema, model } = require("mongoose");
const habitSchema = require("./Habit");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      sparse: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    // Habits to be an array of data that adheres to the Habit model
    habits: [habitSchema],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("user", userSchema);

module.exports = User;
