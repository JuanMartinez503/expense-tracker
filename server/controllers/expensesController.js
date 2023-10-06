const { Expenses, User } = require("../models");

module.exports = {
  async singleExpense(req, res) {
    try {
      const expense = await Expenses.findOne({_id:req.params.expensesId});
      res.json(expense);
    } catch (err) {
      res
        .status(500)
        .json({ message: "there was an error retrieving single expenses" });
    }
  },
  async createExpense(req, res) {
    try {
      const expense = await Expenses.create(req.body);
      const user = await User.findOneAndUpdate({username:req.body.username}
    ,
        { $addToSet: { expenses: expense._id } },
        { new: true, runValidators: true }
      );
      if (!user) {
        return res
          .status(404)
          .json({ message: "Expense was created but no user was found" });
      }
      res.status(201).json({ message: "Expense was created successfully" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "there was an error creating this Expense" }, err);
    }
  },
  async updateExpense(req, res) {
    try {
      const expense = await Expenses.findByIdAndUpdate(req.params.expensesId,{$set:req.body},{new:true});


      res.status(201).json({ message: "Expense was updated successfully" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "there was an error updating this Expense" }, err);
    }
  },

};
