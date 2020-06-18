const router = require("express").Router();
const orderHeadersController = require("../../controllers/orderHeadersController");

router.route("/api/orders")
  .get(orderHeadersController.findAll)
  .post(orderHeadersController.create);

router.route("/api/ordersDetail/:id")
  .get(orderHeadersController.findById);

router.route("/api/order-headers/:id")
  .delete(orderHeadersController.remove);

module.exports = router;
