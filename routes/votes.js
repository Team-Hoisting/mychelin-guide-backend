const express = require('express');
const votes = require('../models/votes');
const users = require('../models/users');

const router = express.Router();

router.get('/', (req, res) => {
  const data = votes.getVotes();

  res.send(data);
});

router.get('/:nickname', (req, res) => {
  const { email } = users
    .getUsers()
    .filter((user) => user.nickname === req.params.nickname)[0];

  const data = votes.findVotesByEmail(email);

  res.send(data);
});

module.exports = router;
