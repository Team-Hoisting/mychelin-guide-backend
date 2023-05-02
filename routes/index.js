/**
 * router 개념
 * 목적에 따라 라우팅 분리
 * @see https://inpa.tistory.com/entry/EXPRESS-%F0%9F%93%9A-%EB%9D%BC%EC%9A%B0%ED%84%B0-Router
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const auth = require('./auth');
const stores = require('./stores');
const votes = require('./votes');
const comments = require('./comments');
const archives = require('./archives');
const users = require('./users');

// /api/store
router.use('/auth', auth);
router.use('/stores', stores);
router.use('/votes', votes);
router.use('/comments', comments);
router.use('/archives', archives);
router.use('/users', users);
const multer = require('multer');

const uploadUser = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, 'public/img/users');
    },
    filename(req, file, callback) {
      callback(null, req.user.nickname);
    },
  }),
});

const uploadStore = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, 'public/img/stores');
    },
    filename(req, file, callback) {
      callback(null, file.originalname);
    },
  }),
});

router.post('/upload/user', uploadUser.single('img'), (req, res) => {
  console.log('이미지 업로드 완료', req.file);

  res.json({ success: true, file: req.file });
});

router.delete('/upload/user', (req, res) => {
  try {
    fs.unlinkSync(`public/img/users/${req.user.nickname}`);

    res.json({ success: true });
  } catch (err) {
    if (err.code == 'ENOENT') {
      console.log('파일 삭제 Error 발생');
    }
  }
});

router.post('/upload/store', uploadStore.single('img'), (req, res) => {
  fs.rename(
    `public/img/stores/${req.file.originalname}`,
    `public/img/stores/${req.body.filename}`,
    (err) => {
      if (err) console.log('ERROR: ' + err);
    },
  );

  res.json({ success: true, file: req.file });
});

module.exports = router;
