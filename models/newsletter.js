const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewsLetterSchema = Schema({
  email: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("NewsLetter", NewsLetterSchema);
