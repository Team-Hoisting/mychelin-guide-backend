const express = require('express');
const votes = require('../models/votes');
const users = require('../models/users');
const stores = require('../models/stores');

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
  const { storeId, email, categoryCode, votedAt, storeInfo } = req.body;

  votes.createVote({
    storeId,
    email,
    categoryCode,
    votedAt,
  });

  const store = stores.getStoreByStoreId(storeId);
  const voteStatus = votes.getVotesByEmail(email);

  if (store) return res.send({ voteStatus });

  const newStore = stores.createStore({
    storeId,
    firstUserId: email,
    imgUrl: '',
    ...storeInfo,
  });

  res.send({ voteStatus, newStore });
});

router.patch('/:nickname/:categoryCode', (req, res) => {
  const { nickname, categoryCode } = req.params;
  const { storeId, votedAt, storeInfo } = req.body;
  const { email } = users.getUserByNickname(nickname);

  votes.updateVote({ email, categoryCode, storeId, votedAt });

  const store = stores.getStoreByStoreId(storeId);
  const voteStatus = votes.getVotesByEmail(email);

  if (store) return res.send({ voteStatus });

  const newStore = stores.createStore({
    storeId,
    firstUserId: email,
    imgUrl: '',
    ...storeInfo,
  });

  res.send({ voteStatus, newStore });
});

router.delete('/:nickname/:categoryCode', (req, res) => {
  const { nickname, categoryCode } = req.params;

  const { email } = users.getUserByNickname(nickname);

  votes.deleteVote({ email, categoryCode });

  const voteStatus = votes.getVotesByEmail(email);

  res.send({ voteStatus });
});

module.exports = router;
