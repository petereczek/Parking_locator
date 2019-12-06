const express = require('express');
const router = express.Router();
const {Node} = require('../models');
// GET /mapnodes
// POST /mapnodes
// GET /mapnodes/:id
// PUT /mapnodes/:id
// DELETE /mapnodes/:id


router.get('/', (req,res) => {

  console.log("router received request in controllers/nodes.js")

    Node.findAll({})
    .then(nodes => {
      console.log("nodes were retrieved", nodes)
      res.json(nodes)
    })
    .catch(e => console.error(e));
});

router.get('/:loc', (req,res) => {
  const {loc} = req.params
  console.log("router received location based get request")

  //Here enter all the logic for location based DB fetch using Jin's example.

    Node.findAll({})
    .then(nodes => {
      console.log("nodes were retrieved", nodes)
      res.json(nodes)
    })
    .catch(e => console.error(e));
});


router.post('/', (req, res) => {
  let { Latitude, Longitude } = req.body;
  console.log("node was ==============================", req.body)
  let availablein = req.body.AvailableIn;
  let availabletime = new Date(new Date().getTime() + 60000*availablein);

  console.log("av time=", availabletime)



  Node.create({ Latitude, Longitude, Available: availabletime })
    .then(node => {
      res.status(201).json(node);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Node.findByPk(id)
    .then(node => {
      if(!node) {
        return res.sendStatus(404);
      }

      res.json(node);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Node.findByPk(id)
    .then(node => {
      if(!node) {
        return res.sendStatus(404);
      }

      node.Latitude = req.body.Latitude;
      node.Longitude = req.body.Longitude;
      let availablein = req.body.AvailableIn;
      let availabletime = new Date(node.createdAt.getTime() + diff*availablein);

      node.Available = availabletime;
      node.save()
        .then(node => {
          res.json(node);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Node.findByPk(id)
    .then(node => {
      if(!node) {
        return res.sendStatus(404);
      }

      node.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;
