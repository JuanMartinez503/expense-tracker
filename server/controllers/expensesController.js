const { Expenses, User } = require("../models");

module.exports = {
//   async singleExpense(req, res) {
//     try {
//       const expense = await Expenses.findById(req.params._id);
//       res.json(expense);
//     } catch (err) {
//       res
//         .status(500)
//         .json({ message: "there was an error retrieving single expenses" });
//     }
//   },
  async createExpense(req, res) {
    try {
      const expense = await Expenses.create(req.body);
      const user = await User.findByIdAndUpdate(
        req.user._id,
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
//   async updateExpense(req, res) {
//     try {
//       const expense = await Expenses.findByIdAndUpdate(req.params._id);
//       const user = await User.findByIdAndUpdate(
//         req.user._id,
//         { $set: { expenses: expense._id } },
//         { runValidators: true, new: true }
//       );
//       if (!user) {
//         return res
//           .status(404)
//           .json({ message: "Expense was updated but no user was found" });
//       }
//       res.status(201).json({ message: "Expense was updated successfully" });
//     } catch (err) {
//       res
//         .status(500)
//         .json({ message: "there was an error updating this Expense" }, err);
//     }
//   },
//   async deleteExpense(req, res) {
//     try {
//       const expense = await Expenses.findByIdAndDelete(req.params._id);
//       const user = await User.findOneAndUpdate(
//         { username: expense.username },
//         { $pull: { expenses: req.params._id } },
//         { runValidators: true, new: true }
//       );
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       } else {
//         res.json({ message: "Expense deleted successfully" });
//       }
//     } catch (err) {
//       res
//         .status(500)
//         .json({ message: "there was an error deleting this Expense" }, err);
//     }
//   },
};
