const express = require('express');
const comments = require('../models/comments');
const users = require('../models/users');

const router = express.Router();

router.get('/:storeId', (req, res) => {
  const { page_size, page } = req.query;
  const storeComments = comments.getCommentsByStoreId(req.params.storeId);

  const startIndex = (page - 1) * page_size;
  const endIndex = startIndex + +page_size;

  const paginatedComments = storeComments.slice(startIndex, endIndex);

  const totalCommentsPagesByStore = Math.ceil(storeComments.length / page_size);

  const commentResult = paginatedComments.map((comment) => {
    if (!comment.email) return;
    const { nickname, isCertified } = users.getUserByEmail(comment.email);
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
  const newComment = { ...req.body, commentId: comments.createCommentId() };
  comments.createComment(newComment);

  res.sendStatus(200);
  console.log(comments.getAllComments());
});

router.delete('/:commentId', (req, res) => {
  comments.deleteComment(req.params.commentId);

  res.sendStatus(200);
});

module.exports = router;
