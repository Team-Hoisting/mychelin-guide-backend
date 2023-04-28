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
  const { pageSize, page } = req.query;
  const storeComments = comments.findCommentsByStoreId(req.params.storeid);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + +pageSize;

  const paginatedComments = storeComments.slice(startIndex, endIndex);
  const totalCommentsPagesByStore = Math.ceil(storeComments.length / pageSize);
  console.log('comments: ', paginatedComments);

  const commentResult = paginatedComments.map((comment) => {
    // 예외 처리 필요
    if (!comment.email) return;
    const { nickname, isCertified } = users.findUserByEmail(comment.email);
    return {
      ...comment,
      nickname,
      isCertified,
    };
  });

  res.send({ data: commentResult, totalPages: totalCommentsPagesByStore });
});

router.post('/', (req, res) => {
  if (!req.body.email) return;
  const newComment = { ...req.body, commentId: comments.generateCommentId() };
  comments.createComment(newComment);

  res.sendStatus(200);
});

router.delete('/:commentId', (req, res) => {
  comments.deleteComment(req.params.commentId);

  res.sendStatus(200);
});

module.exports = router;
