const express = require('express');
const users = require('../models/users');
const archives = require('../models/archives');

const router = express.Router();

router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  const user = users.findUser(email, password);
  const archived = archives.getArchivesByEmail(email);

  console.log('로그인한 계정:', user);
  console.log('user: ');

  if (!user)
    return res
      .status(401)
      .send({ error: '아이디 또는 패스워드가 틀렸습니다.' });

  const accessToken = users.generateToken(user.email, user.nickname);

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  res.send({ email, nickname: user.nickname, archived });
});

router.post('/signup', (req, res) => {
  const { email, password, nickname } = req.body;

  let user = users.findUserByEmail(email);

  console.log('중복된 이메일:', user);

  if (user)
    return res.status(409).send({ error: '중복된 이메일이 존재합니다. ' });

  user = users.findByNickname(nickname);

  if (user)
    return res.status(409).send({ error: '중복된 닉네임이 존재합니다. ' });

  const newUser = users.createUser({ email, password, nickname });

  const accessToken = users.generateToken(newUser.email, newUser.nickname);

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  res.send({ email, nickname });
});

router.get('/check', (req, res) => {
  const { user } = req;

  console.log('현재 유저:', user);

  if (!user) return res.status(401).send({ error: '토큰 정보가 없습니다.' });

  return res.send(user);
});

router.post('/checkEmail', (req, res) => {
  const { email } = req.body;

  console.log('확인할 이메일: ', email);

  const user = users.findUserByEmail(email);

  console.log('중복 이메일 유저: ', user);

  if (user) return res.sendStatus(409);

  res.sendStatus(200);
});

router.post('/checkNickname', (req, res) => {
  const { nickname } = req.body;

  console.log('확인할 닉네임: ', nickname);

  const user = users.findByNickname(nickname);

  console.log('중복 닉네임 유저: ', user);

  if (user) return res.sendStatus(409);

  res.sendStatus(200);
});

router.get('/logout', (req, res) => {
  res.clearCookie('accessToken');
  res.status(204).send({ message: '로그아웃 되었습니다.' });
});

module.exports = router;
