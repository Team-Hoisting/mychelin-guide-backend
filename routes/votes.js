const express = require('express');
const votes = require('../models/votes');
const users = require('../models/users');

const router = express.Router();

router.get('/', (req, res) => {
  const data = votes.getAllVotes();

  res.send(data);
});

router.get('/:nickname', (req, res) => {
  const { email } = users.getUserByNickname(req.params.nickname);

  const data = votes.getVotesByEmail(email);

  res.send(data);
});

router.post('/', (req, res) => {
  const content = req.body;

  votes.createVote(content);

  res.send(votes.getVotesByEmail(content.email));
});

router.patch('/:nickname/:categoryCode', (req, res) => {
  const { nickname, categoryCode } = req.params;
  const { storeId, votedAt } = req.body;

  const { email } = users.getUserByNickname(nickname);

  votes.updateVote({ email, categoryCode, storeId, votedAt });

  res.send(votes.getVotesByEmail(email));
});

router.delete('/:nickname/:categoryCode', (req, res) => {
  const { nickname, categoryCode } = req.params;

  const { email } = users.getUserByNickname(nickname);

  votes.deleteVote({ email, categoryCode });

  res.send(votes.getVotesByEmail(email));
});

module.exports = router;
