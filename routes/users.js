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

// 사용자 정보 변경 (닉네임, 비밀번호)
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

module.exports = router;
