const express = require('express');
const votes = require('../models/votes');
const users = require('../models/users');
const stores = require('../models/stores');

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

// 동일 카테고리에서 투표한 이전 매장
router.get('/:nickname/:category', (req, res) => {
  const { nickname, category } = req.params;

  const { email } = users
    .getUsers()
    .filter((user) => user.nickname === nickname)[0];

  const userVotes = votes.findVotesByEmail(email);

  console.log(userVotes);

  const duplicatedVote = userVotes.find(
    (vote) => vote.categoryCode === category,
  );

  if (duplicatedVote === undefined) return res.send(null);

  const store = stores.findStoreById(duplicatedVote.storeId);

  return res.send(store);
});

// 투표
router.post('/', (req, res) => {
  const voteList = votes.getVotes();

  voteList.push(req.body);

  res.send(req.body);
});

// 재투표
router.patch('/:nickname/:categoryCode', (req, res) => {
  const { nickname, categoryCode } = req.params;
  const { storeId, votedAt } = req.body;

  const { email } = users
    .getUsers()
    .filter((user) => user.nickname === nickname)[0];

  const voteList = votes.getVotes();

  const target = voteList.find(
    (vote) => vote.email === email && vote.categoryCode === categoryCode,
  );

  target.storeId = storeId;
  target.votedAt = votedAt ?? target.votedAt;

  res.send(target);
});

router.delete('/:nickname/:categoryCode', (req, res) => {
  const { nickname, categoryCode } = req.params;

  const { email } = users
    .getUsers()
    .filter((user) => user.nickname === nickname)[0];

  const voteList = votes.getVotes();

  const index = voteList.findIndex(
    (vote) => vote.email === email && vote.categoryCode === categoryCode,
  );

  voteList.splice(index, 1);

  console.log(voteList[index]);

  res.send(voteList[index]);
});

module.exports = router;
