const express = require('express');
const users = require('../models/users');
const votes = require('../models/votes');
const archives = require('../models/archives');
const stores = require('../models/stores');

const router = express.Router();

router.get('/:nickname/profile', (req, res) => {
  const user = users.findByNickname(req.params.nickname);

  // votes
  const votesByUser = votes.findVotesByEmail(user.email);

  const voteStores = votesByUser.map(({ categoryCode, storeId, votedAt }) => ({
    categoryCode,
    store: stores.findStoreById(storeId),
    votedAt,
  }));

  res.send({
    user,
    voteStores,
  });
});

router.patch('/:nickname', (req, res) => {
  const { nickname } = req.params;
  const content = req.body;

  let user = users.findByNickname(nickname);

  if (Object.keys(content).includes('nickname'))
    user.nickname = content.nickname;
  else user.password = content.password;

  user = users.findByNickname(content.nickname);

  res.send(user);
});

router.post('/:nickname/votedcategoryorder', (req, res) => {
  const nickname = req.params.nickname;
  const votedCategoryOrder = req.body.votedCategoryOrder;

  // req.params.nickname 유효한 값인지 확인?
  if (!req.body.votedCategoryOrder) return;

  users.updateUserInfo(nickname, { votedCategoryOrder });

  res.sendStatus(200);
});

module.exports = router;
