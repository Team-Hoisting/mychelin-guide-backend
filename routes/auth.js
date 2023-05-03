const express = require('express');
const users = require('../models/users');
const archives = require('../models/archives');
const votes = require('../models/votes');

const router = express.Router();

router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  const user = users.getUserByEmailPw({ email, password });
  const archived = archives.getArchivesByEmail(email);
  const voteStatus = votes.getVotesByEmail(email);

  if (!user)
    return res
      .status(401)
      .send({ error: '아이디 또는 패스워드가 틀렸습니다.' });

  const accessToken = users.generateToken({
    email: user.email,
    nickname: user.nickname,
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  res.send({ email, nickname: user.nickname, archived, voteStatus });
});

router.post('/signup', (req, res) => {
  const { email, password, nickname } = req.body;

  if (users.getUserByNickname(email))
    return res.status(409).send({ error: '중복된 이메일이 존재합니다. ' });

  if (users.getUserByNickname(nickname))
    return res.status(409).send({ error: '중복된 닉네임이 존재합니다. ' });

  const newUser = users.createUser({
    email,
    password,
    nickname,
    isCertified: false,
    votedCategoryOrder: [],
  });

  // const accessToken = users.generateToken({
  //   email: newUser.email,
  //   nickname: newUser.nickname,
  // });

  // res.cookie('accessToken', accessToken, {
  //   maxAge: 1000 * 60 * 60 * 24 * 7,
  //   httpOnly: true,
  // });

  res.send({ newUser });
});

router.get('/check', (req, res) => {
  const { user } = req;

  if (!user) return res.status(401).send({ error: '토큰 정보가 없습니다.' });

  return res.send(user);
});

router.post('/checkEmail', (req, res) => {
  const { email } = req.body;

  const user = users.getUserByEmail(email);

  if (user) return res.sendStatus(409);

  res.sendStatus(200);
});

router.post('/checkNickname', (req, res) => {
  const { nickname } = req.body;

  const user = users.getUserByNickname(nickname);

  if (user) return res.sendStatus(409);

  res.sendStatus(200);
});

router.get('/logout', (req, res) => {
  res.clearCookie('accessToken');
  res.status(204).send({ message: '로그아웃 되었습니다.' });
});

module.exports = router;
