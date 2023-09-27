const moongoose = require("mongoose");
moongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1.27017/expensesDB"
);
module.exports = moongoose.connection;
