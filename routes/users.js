const express = require('express');
const users = require('../models/users');
const votes = require('../models/votes');
const archives = require('../models/archives');
const stores = require('../models/stores');

const router = express.Router();

router.get('/:nickname/all', (req, res) => {
  const user = users.findByNickname(req.params.nickname);

  const votesByUser = votes.findVotesByEmail(user.email);

  const voteStores = votesByUser.map(({ categoryCode, storeId, votedAt }) => ({
    categoryCode,
    store: stores.findStoreById(storeId),
    votedAt,
  }));

  const archivesByUser = archives.getArchivesByEmail(user.email);

  const archiveStores = archivesByUser.map(({ storeId }) =>
    stores.findStoreById(storeId),
  );

  res.send({
    user,
    voteStores,
    archiveStores,
  });
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
