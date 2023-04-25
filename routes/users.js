const express = require('express');
const users = require('../models/users');

const router = express.Router();

router.get('/:nickname', (req, res) => {
  const data = users.findByNickname(req.params.nickname);
  res.send(data);
});

module.exports = router;
