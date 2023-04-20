const express = require('express');
const votes = require('../models/votes');

const router = express.Router();

router.get('/', (req, res) => {
  const data = votes.getVotes();

  res.send(data);
});

module.exports = router;
