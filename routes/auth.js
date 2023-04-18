const express = require('express');
const users = require('../models/users');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Auth');
});

router.post('/signin', (req, res) => {
  const { userid, password } = req.body;

  // if (!userid || !password) return res.status(401).send({error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.'});
  console.log(userid, password);
  const user = users.findUser(userid, password);
  console.log('로그인한 계정:', user);

  if (!user)
    return res
      .status(401)
      .send({ error: '아이디 또는 패스워드가 틀렸습니다.' });

  const accessToken = users.generateToken(user.userid, user.username);

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  res.send({ userid, username: user.username });
});

router.post('/signup', (req, res) => {
  const { userid, password, username } = req.body;

  const user = users.findUserByUserid(userid);

  console.log('중복된 계정:', user);

  if (user)
    return res.status(409).send({ error: '중복된 이메일이 존재합니다. ' });

  const newUser = users.createUser({ userid, password, username });

  const accessToken = users.generateToken(newUser.userid, newUser.username);

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  res.send({ userid, username });
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
