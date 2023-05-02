const express = require('express');
const stores = require('../models/stores');
const users = require('../models/users');
const votes = require('../models/votes');
const archives = require('../models/archives');

const router = express.Router();

router.get('/', (req, res) => {
  const { keyword, categoryCode, page_size, page } = req.query;

  const rankedStores = stores.getStoresByOrder({
    allVotes: votes.getAllVotes(),
    keyword,
    categoryCode,
    archivesCounterFn: archives.getArchivesByStoreId,
    starCounterFn: votes.countStars,
  });

  const startIndex = (page - 1) * page_size;
  const endIndex = startIndex + +page_size;

  const pageStores = rankedStores.slice(startIndex, endIndex);

  res.send(pageStores);
});

router.get('/search', (req, res) => {
  const { keyword, page_size, page } = req.query;

  if (!page_size && !page) return res.send(stores.getStoresByKeyword(keyword));

  const searchedStores = stores.getStoresByKeyword(keyword);

  const startIndex = (page - 1) * page_size;
  const endIndex = startIndex + +page_size;

  const pageStores = searchedStores.slice(startIndex, endIndex);

  res.send(pageStores);
});

router.get('/:storeId', (req, res) => {
  const storeData = stores.getStoreByStoreId(req.params.storeId);

  if (!storeData) {
    res.send(null);
    return;
  }

  const storeId = storeData.storeId;

  const nickname = users.getUserByEmail(storeData.firstUserId).nickname;
  const votesCategorized = votes.getVotesByStoreId(storeId);

  const votesCountByStoreId = votesCategorized.reduce((acc, vote) => {
    const voteCode = vote.categoryCode;
    acc[voteCode] = (acc[voteCode] || 0) + 1;
    return acc;
  }, {});

  const totalVotes = votes.countAllVotes();
  const votesCount = votes.getVotesByStoreId(storeId).length;
  const archivesCount = archives.getArchivesByStoreId(storeId);

  const starsCount = votes.countStars({
    totalVotes,
    archivesCount,
    votesCount,
  });

  res.send({
    ...storeData,
    voteCnt: votesCountByStoreId,
    firstVoteUser: nickname,
    archivesCount,
    starsCount,
  });
});

router.get('/voted/:nickname', (req, res) => {
  const { email } = users.getUserByNickname(req.params.nickname);

  const votesByUser = votes.getVotesByEmail(email);

  const data = votesByUser.map(({ categoryCode, storeId }) => ({
    categoryCode,
    store: stores.getStoreByStoreId(storeId),
  }));

  res.send(data);
});

router.get('/archived/:nickname', (req, res) => {
  const { page_size, page } = req.query;
  const { nickname } = req.params;
  const { email } = users.getUserByNickname(nickname);

  const startIndex = (page - 1) * page_size;
  const endIndex = startIndex + +page_size;

  const archivesByUser = archives.getArchivesByEmail(email);

  const archiveStores = archivesByUser.map(({ storeId }) => {
    const newStore = stores.getStoreByStoreId(storeId);

    return newStore;
  });

  const pageStores = archiveStores.slice(startIndex, endIndex);

  res.send(pageStores);
});

router.get('/searchMap/:condition', (req, res) => {
  if (req.params.condition !== 'isRegistered') return;

  const data = Array.from({ length: Object.keys(req.query).length }, (_, idx) =>
    stores.getStoreByStoreId(req.query[idx]) ? true : false,
  );

  res.send(data);
});

module.exports = router;
