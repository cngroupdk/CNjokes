const mongoose = require("mongoose");

const { Schema } = mongoose;

const jokeSchema = new Schema({
  category: [String],
  icon_url: String,
  id: { type: String, unique: true },
  url: String,
  value: String
});

jokeSchema.index({ value: "text" });
module.exports = mongoose.model("jokes", jokeSchema);
