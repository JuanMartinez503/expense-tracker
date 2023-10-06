const {
  singleExpense,
  createExpense,
  updateExpense,
} = require("../../controllers/expensesController");
const { authMiddleware } = require("../../utils/auth");
const router = require("express").Router();
router.route("/").post(authMiddleware, createExpense);
router.route("/:expensesId").get(authMiddleware, singleExpense).put(authMiddleware,updateExpense)

module.exports = router;
