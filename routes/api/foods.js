const router = require("express").Router();
const foodsController = require("../../controllers/foodsController");

router.route("/api/foods/:type")
  .get(foodsController.findType)

router
  .route("/api/foods/id/:id")
  .get(foodsController.findById)

module.exports = router;

