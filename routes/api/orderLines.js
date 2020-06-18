const router = require("express").Router();
const orderLinesController = require("../../controllers/orderLinesController");

router.route("/api/orders-lines")
  .get(orderLinesController.findAll)
  .post(orderLinesController.create);

router.route("/api/orders-lines/:id")
  .get(orderLinesController.findById)
  .delete(orderLinesController.remove);

module.exports = router;
