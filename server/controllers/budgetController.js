const { Budget } = require("../models");

module.exports = {
  async getBudget(req, res) {
    try {
      const budget = await Budget.findById(req.user._id);
      res.json(budget);
    } catch {
      res
        .status(500)
        .json({ message: "There was an error retrieving the budget" });
    }
  },
  async updateBudget(req, res) {
    try {
      const budget = await Budget.findByIdAndUpdate(req.user.id);
      res.json(budget);
    } catch {
      res
        .status(500)
        .json({ message: "there was an error updating the budget" });
    }
  },
};
