const express = require('express');
const router = express.Router();
const { getOnwerShip } = require('../../controllers/praba');

router.get(
  '/',
  [],
  getOnwerShip,
);

module.exports = router;
