const {
  getSingleUser,
  createUser,
  login,
  updateBudget,
  updateExpense,
  getBudget,
  singleExpense,
  deleteExpense,
  findAllExpenses
} = require("../../controllers/userController");
const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

router.route("/").post(createUser);
router.route("/login").post(login);
router.route("/:username").get(authMiddleware, getSingleUser).put(authMiddleware,updateBudget)
router.route('/:username/:expensesId').put(authMiddleware,updateExpense).delete(authMiddleware,deleteExpense)
module.exports = router;
