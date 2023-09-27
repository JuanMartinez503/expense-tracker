const {
  getBudget,
  updateBudget,
} = require("../../controllers/budgetController");
const router = require("express").Router();

const { authMiddleware } = require("../../utils/auth");

router
  .route("/")
  .get(authMiddleware, getBudget)
  .put(authMiddleware, updateBudget);
module.exports = router;
