const express = require('express');
const comments = require('../models/comments');
const users = require('../models/users');

const router = express.Router();

router.get('/:storeid', (req, res) => {
  const storeComments = comments.findCommentsByStoreId(req.params.storeid);

  const commentUser = storeComments.map((comment) => {
    const { nickname, isCertified } = users.findUserByEmail(comment.email);
    return { ...comment, nickname, isCertified };
  });

  res.send(commentUser);
});

module.exports = router;
