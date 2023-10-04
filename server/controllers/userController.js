const { User, Budget, Expenses } = require("../models");

const { signToken } = require("../utils/auth");

module.exports = {
  async getSingleUser(req, res) {
    const foundUser = await User.findOne({
      username: req.params.username,
    }).populate("expenses");

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this id!" });
    }

    res.json(foundUser);
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      const token = signToken(user);
      console.log(user, token);
      res.json({ user, token });
    } catch (err) {
      res
        .status(500)
        .json({ message: "There was a problem creating the user", err });
        console.log(err)
    }
  },
  async login({ body }, res) {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(user);
    res.json({ token, user });
    console.log(user);
    console.log(token);
  },

  async getBudget(req, res) {
    try {
      const budget = await Budget.findById(req.user._id);
      console.log(req.user._id);
      res.json(budget);
    } catch {
      res
        .status(500)
        .json({ message: "There was an error retrieving the budget" });
    }
  },

  async updateBudget(req, res) {
    try {
      const budget = await Budget.findOneAndUpdate({username:req.params.username},{$set:req.body},{new:true});
      res.json(budget);
    } catch {
      res
        .status(500)
        .json({ message: "there was an error updating the budget" });
    }
  },
  async singleExpense(req, res) {
    try {
      const expense = await Expenses.findById(req.params._id);
      res.json(expense);
    } catch (err) {
      res
        .status(500)
        .json({ message: "there was an error retrieving single expenses" });
    }
  },
  async updateExpense(req, res) {
    try {
      const expense = await Expenses.findByIdAndUpdate(req.params._id);
      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $set: { expenses: expense._id } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res
          .status(404)
          .json({ message: "Expense was updated but no user was found" });
      }
      res.status(201).json({ message: "Expense was updated successfully" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "there was an error updating this Expense" }, err);
    }
  },
  async deleteExpense(req, res) {
    try {
      const expense = await Expenses.findByIdAndDelete(req.params._id);
      const user = await User.findOneAndUpdate(
        { username: expense.username },
        { $pull: { expenses: req.params._id } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      } else {
        res.json({ message: "Expense deleted successfully" });
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: "there was an error deleting this Expense" }, err);
    }
  },
};
