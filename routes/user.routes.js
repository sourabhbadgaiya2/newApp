const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(500).json({ message: 'Hello Users' });
});


module.exports = router;
