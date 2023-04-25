const express = require('express');
const comments = require('../models/comments');
const users = require('../models/users');

const router = express.Router();
// 전체
// post
// delete
router.get('/', (req, res) => {
  res.send(comments.getComments());
});

router.get('/:storeid', (req, res) => {
  const storeComments = comments.findCommentsByStoreId(req.params.storeid);

  const commentUser = storeComments.map((comment) => {
    const { nickname, isCertified } = users.findUserByEmail(comment.email);
    return { ...comment, nickname, isCertified };
  });

  res.send(commentUser);
});

router.post('/', (req, res) => {
  const newComment = { ...req.body, commentId: comments.generateCommentId() };
  comments.createComment(newComment);
  console.log('newcomment: ', newComment);

  res.sendStatus(200);
});

router.delete('/:commentId', (req, res) => {
  comments.deleteComment(req.params.commentId);

  res.sendStatus(200);
});

module.exports = router;
