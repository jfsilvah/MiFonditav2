const router = require("express").Router();
const customersController = require("../../controllers/customersController");

router.route("/api/customers")
  .get(customersController.findAll);

router.route("/api/validateEmail/:email")
  .get(customersController.validateEmail)

  router.route("/api/customers/:id")
  .get(customersController.findById)
  .put(customersController.update)
  .delete(customersController.remove)

router.route("/api/newCustomer")
  .post(customersController.create);

module.exports = router;
