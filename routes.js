// Import modules
const express = require('express');

// Import db services
const dbServices = require('./dbServices');
// Init router
const router = express.Router();

// Search page
router.get('/', (req, res) => {
  res.render('searchusers');
});

// Search processing
router.post('/user/search', (req, res) => {
  let id = req.body.id;

  const obj = dbServices.getAll(id);
  if (!obj) {
    res.render('searchusers', { error: 'User does not found' });
  } else {
    obj.id = id;
    res.render('details', {
      user: obj,
    });
  }
});

// Export router
module.exports = router;
