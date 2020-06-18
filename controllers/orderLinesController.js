const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.OrderLines.findAll({
      include: [db.Foods]
    }).then(function(dbOrderLines) {
      res.json(dbOrderLines);
    });
  },
  findById: function(req, res) {
    db.OrderLines.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Foods]
    }).then(function(dbOrderLines) {
      res.json(dbOrderLines);
    });
  },
  create: function(req, res) {
    db.OrderLines.create({
      OrderPrice: req.body.OrderPrice
    }).then(function(dbOrderLines) {
      res.json(dbOrderLines);
    });
  },
  remove: function(req, res) {
    db.OrderLines.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbOrderLines) {
      res.json(dbOrderLines);
    });
  }
};
