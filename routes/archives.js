const express = require('express');
const archives = require('../models/archives');

const router = express.Router();

router.get('/:storeId', (req, res) => {
  const archivesData = archives.getArchivesByStoreId(req.params.storeId);
  const isUserArchived = !!archivesData.filter(
    (archive) => archive.email === req.user.email,
  ).length;

  res.send({
    archivesData,
    totalArchivesCnt: archivesData.length,
    isUserArchived,
  });
});

router.post('/', (req, res) => {
  const newArchive = req.body;
  archives.createArchive(newArchive);

  res.sendStatus(200);
});

router.delete('/', (req, res) => {
  archives.deleteArchive(req.body);

  res.sendStatus(200);
});

module.exports = router;
