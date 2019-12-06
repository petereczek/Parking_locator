const express = require('express');
const router = express.Router();
const {Transaction} = require('../models');
// GET /mapnodes
// POST /mapnodes
// GET /mapnodes/:id
// PUT /mapnodes/:id
// DELETE /mapnodes/:id


router.get('/', (req,res) => {

  console.log("router received request in controllers/transactions.js")

    Transaction.findAll({})
    .then(transactions => {
      console.log("trasactions were retrieved", transactions)
      res.json(transactions)
    })
    .catch(e => console.error(e));
});


router.post('/', (req, res) => {
  let { content } = req.body;

  Transaction.create({ content })
    .then(transaction => {
      res.status(201).json(transaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Transaction.findByPk(id)
    .then(transaction => {
      if(!transaction) {
        return res.sendStatus(404);
      }

      res.json(transaction);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Transaction.findByPk(id)
    .then(transaction => {
      if(!transaction) {
        return res.sendStatus(404);
      }

      transaction.content = req.body.content;
      transaction.save()
        .then(transaction => {
          res.json(transaction);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Transaction.findByPk(id)
    .then(transaction => {
      if(!transaction) {
        return res.sendStatus(404);
      }

      transaction.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;
