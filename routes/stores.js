const express = require('express');
const stores = require('../models/stores');
const users = require('../models/users');
const votes = require('../models/votes');
const archives = require('../models/archives');

const router = express.Router();

router.get('/', (req, res) => {
  const data = stores.getRankedStores(votes.getVotes());

  res.send(data);
});

router.get('/:id', (req, res) => {
  const storeData = stores.findStoreById(req.params.id);
  const storeId = storeData.storeId;

  const userName = users.findUserByEmail(storeData.firstUserId).nickname;
  const votesCategorized = votes.findVotesByStoreId(storeId);

  const voteCnt = votesCategorized.reduce((acc, vote) => {
    const voteCode = vote.categoryCode;
    acc[voteCode] = (acc[voteCode] || 0) + 1;
    return acc;
  }, {});

  const archivedCnt = archives.getArcivesByStoreId(storeId);

  res.send({ ...storeData, voteCnt, firstVoteUser: userName, archivedCnt });
});

module.exports = router;
