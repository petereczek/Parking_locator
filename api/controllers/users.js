const express = require('express');
const router = express.Router();
const {User} = require('../models');
// GET /mapnodes
// POST /mapnodes
// GET /mapnodes/:id
// PUT /mapnodes/:id
// DELETE /mapnodes/:id


router.get('/', (req,res) => {

  console.log("router received request in controllers/users.js")

    User.findAll({})
    .then(users => {
      console.log("nodes were retrieved", users)
      res.json(users)
    })
    .catch(e => console.error(e));
});


router.post('/', (req, res) => {
  let { content } = req.body;

  User.create({ content })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      res.json(user);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      user.content = req.body.content;
      user.save()
        .then(user => {
          res.json(user);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      user.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;
