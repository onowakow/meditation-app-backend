const express = require('express');
const router = express.Router();
const Session = require('../model/session');
module.exports = router;

router.post('/session', (req, res) => {
  const { date, minutes, notes } = req.body;
  const session = new Session({
    date,
    minutes,
    notes,
  });

  try {
    const savedSession = session.save();
    res.status(200).json(savedSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
