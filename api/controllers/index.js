const express = require('express');
const router = express.Router();


// Load each controller
const appConfigController = require('./appConfig.js');
const nodesController = require('./nodes.js')
const transactionsController = require('./transactions.js')
const usersController = require('./users.js')
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/application-configuration', appConfigController);

console.log("came into controllers/index.js")

router.use('/nodes', nodesController);
router.use('/transactions',transactionsController)
router.use('/users',usersController)

module.exports = router;
