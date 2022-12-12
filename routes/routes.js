const express = require('express');
const router = express.Router();
const Session = require('../model/session');
module.exports = router;

router.get('/session/:_id?', async (req, res) => {
  const { _id } = req.params;

  try {
    const sessions = await (!_id ? Session.find({}) : Session.findOne({ _id }));
    res.status(200).json(sessions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/session', async (req, res) => {
  const { date, minutes, notes } = req.body;

  const session = new Session({
    date,
    minutes,
    notes,
  });

  try {
    const savedSession = await session.save();
    res.status(200).json(savedSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/session/:_id', async (req, res) => {
  const { _id } = req.params;
  if (!_id) return res.status(400).status({ message: 'Session not found.' });

  try {
    await Session.findOneAndDelete({ _id });
    res.status(200).json({ message: `Deleted session _id: ${_id}` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
