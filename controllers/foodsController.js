const db = require("../models");

module.exports = {
  findType: function(req, res) {
    db.Foods.findAll({
      where: {
        foodType: req.params.type
      }
    }).then(function(dbFoods) {
      res.json(dbFoods);
    });
  },
  findById: function(req, res) {
    db.Foods.findOne({
      where: {
        id: req.params.id
      },
      include: [db.OrderLines]
    }).then(function(dbFoods) {
      res.json(dbFoods);
    });
  }
};
