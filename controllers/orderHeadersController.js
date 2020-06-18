const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.OrderHeader.findAll({
      /*include: [
        {
          model: db.OrderLines,
          include: [
            {
              model: db.Foods
            }
          ]
        }
      ],*/
      include: [{ model: db.OrderLines, attributes: [] }],
      attributes: {
        include: [
          [
            db.Sequelize.fn("COUNT", db.Sequelize.col("OrderLines.id")),
            "linesCount"
          ],
          [
            db.Sequelize.fn("SUM", db.Sequelize.col("OrderLines.orderprice")),
            "totalPrice"
          ]
        ]
      },
      group: ["OrderLines.orderheaderid"]
    }).then(function(dbOrderHeader) {
      res.json(dbOrderHeader);
    });
  },
  findById: function(req, res) {
    db.OrderHeader.findAll({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.OrderLines,
          include: [
            {
              model: db.Foods
            }
          ]
        }
      ]
    }).then(function(dbOrderLine) {
      res.json(dbOrderLine);
    });
  },
  create: function(req, res) {
    db.OrderHeader.create({
      OrderStatus: "En proceso"
    }).then(function(dbOrderHeader) {
      for (var i = 0; i < req.body.length; i++) {
        console.log("A buscar " + req.body[i]);
        db.Foods.findAll({
          where: {
            FoodName: req.body[i]
          }
        }).then(function(dbFoods) {
          console.log("En THEN de Foods");
          console.log(dbFoods);
          if (dbFoods) {
            db.OrderLines.create({
              OrderPrice: dbFoods[0].Price,
              FoodId: dbFoods[0].id,
              OrderHeaderId: dbOrderHeader.id
            }).then(function() {
              console.log("Line Created successfully");
            });
          }
        });
      }
      res.json("Se creo el pedido " + dbOrderHeader.id);
    });
  },
  update: function(req, res) {
    db.OrderHeader.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbOrderHeader) {
      res.json(dbOrderHeader);
    });
  },
  remove: function(req, res) {
     db.OrderHeader.destroy({
       where: {
         id: req.params.id
       }
     }).then(function(dbOrderHeader) {
       res.json(dbOrderHeader);
   });
  }
};
