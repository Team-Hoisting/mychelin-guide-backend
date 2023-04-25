const express = require('express');
const archives = require('../models/archives');

const router = express.Router();

router.post('/like', (req, res) => {
  console.log('arc body: ', req.body);
  const newArchive = req.body;
  archives.addArchive(newArchive);

  res.send(newArchive);
});

router.post('/dislike', (req, res) => {
  console.log('dislike: ', req.body);
  const { seq } = req.body;

  archives.deleteArchive(seq);

  res.send(200);
});

module.exports = router;
