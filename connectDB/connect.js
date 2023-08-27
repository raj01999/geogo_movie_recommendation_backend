const mongoose = require("mongoose");

/**
 * connecting to mongodb atlas server
 */
const main = async () => {
  await mongoose.connect(process.env.DB);
};

module.exports = main;
