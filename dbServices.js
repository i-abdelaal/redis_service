// Import db
const db = require('./db');

module.exports = {
  getAll: (id) => db.getAll(id),
};
// Get all
