const express = require('express');
const stores = require('../models/stores');

const router = express.Router();

router.get('/', (req, res) => {
  const data = stores.getStores();

  res.send(data);
});

module.exports = router;
