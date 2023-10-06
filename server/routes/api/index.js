const userRoutes = require("./userRoutes");
const expensesRoutes = require("./expensesRoutes");
const router = require("express").Router();
router.use("/users", userRoutes);
router.use("/expenses", expensesRoutes);

module.exports = router;
