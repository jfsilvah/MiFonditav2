const email = require("../utils/sendMail");
const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.Customer.findAll().then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  },
  findById: function(req, res) {
    db.Customer.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  },
  validateEmail: function(req, res) {
    db.Customer.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbCust) {
      if (!dbCust) {
          res.json("CUSTOMER_NOT_EXIST");
      } else {
        res.json("CUSTOMER_VALID");
      }
    });
  },
  create: function(req, res) {
    db.Customer.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(dbCust) {
      if (!dbCust) {
        db.Customer.create(req.body).then(function() {
          console.log(email);
          email.newCustomer(req.body.email);
          res.json("Customer registered successfully");
        });
      } else {
        res.json("There is a customer registered with same email");
      }
    });
  },
  update: function(req, res) {
    db.Customer.update(req.body, {
      where: {
        email: req.body.email
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  },
  remove: function(req, res) {
    db.Customer.destroy({
      where: {
        email: req.body.email
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  }
};
