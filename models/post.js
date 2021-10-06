const mongoose = require("mongoose");
const mongoosePaginatev2 = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;

const PostSchema = Schema({
  title: String,
  url: {
    type: String,
    unique: true,
  },
  description: String,
  date: Date,
});

PostSchema.plugin(mongoosePaginatev2);

module.exports = mongoose.model("Post", PostSchema);
