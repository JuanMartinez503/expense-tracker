const { Expenses, User } = require("../models");

module.exports = {
  async singleExpense(req, res) {
    try {
      const expense = await Expenses.findOne({_id:req.params.expensesId});;
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
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { expenses: expense._id } },
        { new: true, runValidators: true }
      );
  
      if (!expense) {
        console.log("Expense cannot be created");
        return res.status(500).json({ message: "There was an error creating this Expense" });
      }
  
      if (!user) {
        return res.status(404).json({ message: "Expense was created but no user was found" });
      }
  
      return res.status(201).json({ message: "Expense was created successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "There was an error creating this Expense" });
    }
  }
  ,
  async updateExpense(req, res) {
    try {
      const expense = await Expenses.findByIdAndUpdate(req.params.expensesId,{$set:req.body},{new:true});


     return  res.status(201).json({ message: "Expense was updated successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "there was an error updating this Expense" }, err);
    }
  },

};
