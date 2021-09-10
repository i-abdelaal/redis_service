// Import db
const db = require('./db');

module.exports = {
  // Get user By ID
  getById: db.getById,

  // Set user details
  setWithId: db.setWithId,

  // Delete user
  delById: db.delById,
};
