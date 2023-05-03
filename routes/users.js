const express = require('express');
const users = require('../models/users');
const votes = require('../models/votes');
const archives = require('../models/archives');
const stores = require('../models/stores');
const fs = require('fs');

const router = express.Router();

router.get('/:nickname', (req, res) => {
  const user = users.getUserByNickname(req.params.nickname);

  const votesByUser = votes.getVotesByEmail(user.email);

  const voteStores = votesByUser.map(({ categoryCode, storeId, votedAt }) => ({
    categoryCode,
    store: stores.getStoreByStoreId(storeId),
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

  const target = users.getUserByNickname(nickname);

  if (content.password === target.password)
    return res.status(409).send({ message: '기존 비밀번호와 동일' });

  const user = users.updateUser({ nickname, newInfo: content });

  if (!content.nickname) return res.status(200).send(user);

  fs.rename(
    `public/img/users/${nickname}`,
    `public/img/users/${content.nickname}`,
    (err) => {
      if (err) throw new Error(err);
    },
  );

  const accessToken = users.generateToken({
    email: user.email,
    nickname: user.nickname,
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  const archived = archives.getArchivesByEmail(user.email);
  const voteStatus = votes.getVotesByEmail(user.email);

  res.status(200).send({
    email: user.email,
    nickname: user.nickname,
    archived,
    voteStatus,
  });
});

router.patch('/:nickname/votedcategoryorder', (req, res) => {
  const nickname = req.params.nickname;
  const votedCategoryOrder = req.body.votedCategoryOrder;

  // req.params.nickname 유효한 값인지 확인?
  if (!req.body.votedCategoryOrder) return;

  users.updateUser({ nickname, newInfo: { votedCategoryOrder } });

  res.sendStatus(200);
});

module.exports = router;
