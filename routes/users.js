const express = require('express');
const users = require('../models/users');
const votes = require('../models/votes');
const archives = require('../models/archives');

const { findStoreById } = require('../models/stores');

const router = express.Router();

router.get('/all/:nickname', (req, res) => {
  const user = users.findByNickname(req.params.nickname);

  const votesByUser = votes.findVotesByEmail(user.email);

  const voteStores = votesByUser.map(({ categoryCode, storeId, votedAt }) => ({
    categoryCode,
    store: findStoreById(storeId),
    votedAt,
  }));

  const archivesByUser = archives.getArchivesByEmail(user.email);

  const archiveStores = archivesByUser.map(({ storeId }) =>
    findStoreById(storeId),
  );

  res.send({
    user,
    voteStores,
    archiveStores,
  });
});

module.exports = router;
