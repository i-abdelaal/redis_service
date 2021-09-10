// Import modules
const express = require('express');
const db = require('./db');

// Import db services
const dbServices = require('./dbServices');
// Init router
const router = express.Router();

// Search page
router.get('/', (req, res) => {
  res.render('searchusers');
});

// Search processing
router.post('/user/search', async (req, res) => {
  let id = req.body.id;

  const obj = await dbServices.getById(id);

  if (!obj) {
    res.render('searchusers', { error: 'User does not found' });
  } else {
    obj.id = id;
    res.render('details', {
      user: obj,
    });
  }
});

// Add user page
router.get('/user/add', (req, res) => {
  res.render('adduser');
});

// Add user processing
router.post('/user/add', (req, res) => {
  const DTO = req.body;

  const reply = dbServices.setWithId(DTO);
  if (!reply) {
    res.render('adduser', { error: 'Something went wrong' });
  }
  res.redirect('/');
});

// Export router
module.exports = router;
