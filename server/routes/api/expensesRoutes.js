const {
  // singleExpense,
  createExpense,
  // updateExpense,
  // deleteExpense,
} = require("../../controllers/expensesController");
const { authMiddleware } = require("../../utils/auth");
const router = require("express").Router();
router.route("/").post(authMiddleware, createExpense);
// router
//   .route(":/expenseId")
//   .get(authMiddleware, singleExpense)
//   .delete(authMiddleware, deleteExpense)
//   .put(authMiddleware, updateExpense);

module.exports = router;
