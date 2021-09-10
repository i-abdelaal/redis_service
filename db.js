// Import redis
const redis = require('redis');

// Create client
let client = redis.createClient();

module.exports = {
  // Init connection
  dbInit: () => {
    client.on('connect', () => {
      console.log('Connected to Redis...');
    });
  },

  // Get all
  getAll: (id) => {
    client.hgetall(id, (err, obj) => {
      if (!obj) {
        return null;
      } else {
        return obj;
      }
    });
  },
};
