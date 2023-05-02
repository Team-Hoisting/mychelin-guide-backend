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

// Todo: Store용 분리
const uploadUser = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, 'public/img/users');
    },
    filename(req, file, callback) {
      // Todo: originalname 변경
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
      console.log('req: ', file);
      callback(null, req.body.filename + path.extname(file.originalname));
    },
  }),
});

router.post('/upload/store', uploadStore.single('img'), async (req, res) => {
  console.log('store 이미지', req.file);
  console.log(req.file.path.replace('undefined', req.body.filename));
  console.log(req.file.path);

  if (req.body.filename)
    await fs.rename(
      req.file.path,
      req.file.path.replace('undefined', req.body.filename),
    );
  // fs.renameSync(
  //   req.file.path,
  //   req.file.path.replace('undefined', req.body.filename),
  // );

  res.json({ success: true, file: req.file });
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

module.exports = router;
