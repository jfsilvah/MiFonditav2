const router = require("express").Router();
const customerRoutes = require("./customers");
const foodRoutes = require("./foods");
const headerRoutes = require("./orderHeaders");
const lineRoutes = require("./orderLines");

router.use(customerRoutes);
router.use(foodRoutes);
router.use(headerRoutes);
router.use(lineRoutes);

module.exports = router;
