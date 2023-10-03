const { Schema, model } = require("mongoose");
const budgetSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    
    },
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

const Budget = model("Budget", budgetSchema);
module.exports = Budget;
