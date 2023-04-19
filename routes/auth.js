const express = require('express');
const users = require('../models/users');

const router = express.Router();

router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  const user = users.findUser(email, password);
  console.log('로그인한 계정:', user);

  if (!user)
    return res
      .status(401)
      .send({ error: '아이디 또는 패스워드가 틀렸습니다.' });

  const accessToken = users.generateToken(user.email, user.nickname);

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  res.send({ email, nickname: user.nickname });
});

router.post('/signup', (req, res) => {
  const { email, password, nickname } = req.body;

  const user = users.findUserByEmail(email);

  console.log('중복된 계정:', user);

  if (user)
    return res.status(409).send({ error: '중복된 이메일이 존재합니다. ' });

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

router.get('/logout', (req, res) => {
  res.clearCookie('accessToken');
  res.status(204).send({ message: '로그아웃 되었습니다.' });
});

module.exports = router;
