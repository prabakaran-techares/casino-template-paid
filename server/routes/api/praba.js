const express = require('express');
const router = express.Router();
const { getOnwerShip } = require('../../controllers/praba');

router.post(
  '/',
  [],
  getOnwerShip,
);

module.exports = router;
