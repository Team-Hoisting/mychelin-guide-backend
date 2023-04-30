const express = require('express');
const archives = require('../models/archives');

const router = express.Router();

router.post('/', (req, res) => {
  const newArchive = req.body;
  archives.addArchive(newArchive);

  res.sendStatus(200);
});

router.delete('/', (req, res) => {
  archives.deleteArchive(req.body);

  res.sendStatus(200);
});

module.exports = router;
