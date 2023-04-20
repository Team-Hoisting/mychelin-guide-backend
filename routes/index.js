/**
 * router 개념
 * 목적에 따라 라우팅 분리
 * @see https://inpa.tistory.com/entry/EXPRESS-%F0%9F%93%9A-%EB%9D%BC%EC%9A%B0%ED%84%B0-Router
 */
const express = require('express');

const router = express.Router();

const auth = require('./auth');
const stores = require('./stores');
const votes = require('./votes');

// /api/store
router.use('/auth', auth);
router.use('/stores', stores);
router.use('/votes', votes);

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = router;
