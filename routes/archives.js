const express = require('express');
const archives = require('../models/archives');

const router = express.Router();

router.post('/archive', (req, res) => {
  const newArchive = req.body;
  archives.addArchive(newArchive);

  res.send(newArchive);
});

router.post('/unarchive', (req, res) => {
  archives.deleteArchive(req.body);

  res.send(200);
});

module.exports = router;
