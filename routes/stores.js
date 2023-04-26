const express = require('express');
const stores = require('../models/stores');
const users = require('../models/users');
const votes = require('../models/votes');
const archives = require('../models/archives');
const { findStoreById } = require('../models/stores');

const router = express.Router();

router.get('/', (req, res) => {
  const { category, page_size, page } = req.query;

  const rankedStores = stores.getRankedStores(votes.getVotes());

  const startIndex = (page - 1) * page_size;
  const endIndex = startIndex + +page_size;

  const filteredStores = category
    ? rankedStores.filter(({ votesByCategory }) =>
        Object.keys(votesByCategory).includes(category),
      )
    : rankedStores;

  const pageStores = filteredStores.slice(startIndex, endIndex);

  res.send(pageStores);
});

router.get('/search', (req, res) => {
  const { usersearch, page_size, page } = req.query;

  if (!page_size && !page) res.send(stores.getSearchedStores(usersearch));

  const searchedStores = stores.getSearchedStores(usersearch);

  const startIndex = (page - 1) * page_size;
  const endIndex = startIndex + +page_size;

  const pageStores = searchedStores.slice(startIndex, endIndex);

  res.send(pageStores);
});

router.get('/:id', (req, res) => {
  const storeData = stores.findStoreById(req.params.id);

  if (!storeData) {
    res.send(null);
    return;
  }

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

router.get('/voted/:nickname', (req, res) => {
  const { email } = users.findByNickname(req.params.nickname);

  const votedStores = votes.findVotesByEmail(email);

  const data = votedStores.map(({ categoryCode, storeId }) => ({
    categoryCode,
    store: findStoreById(storeId),
  }));

  res.send(data);
});

module.exports = router;
