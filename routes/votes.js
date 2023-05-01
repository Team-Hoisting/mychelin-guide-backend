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

  console.log('[storeId]: ', storeId);

  const store = stores.getStoreByStoreId(storeId);

  console.log('[store]', store);

  if (!store)
    console.log(
      stores.createStore({
        storeId,
        firstUserId: email,
        imgUrl: '',
        ...storeInfo,
      }),
    );

  votes.createVote({
    storeId,
    email,
    categoryCode,
    votedAt,
  });

  res.send(votes.getVotesByEmail(email));
});

router.patch('/:nickname/:categoryCode', (req, res) => {
  const { nickname, categoryCode } = req.params;
  const { storeId, votedAt, storeInfo } = req.body;
  const { email } = users.getUserByNickname(nickname);

  const store = stores.getStoreByStoreId(storeId);

  if (!store)
    console.log(
      stores.createStore({
        storeId,
        firstUserId: email,
        imgUrl: '',
        ...storeInfo,
      }),
    );

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
