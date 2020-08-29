const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Query to get details of movie
  res.sendStatus(500)
});

module.exports = router;