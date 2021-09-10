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

  // Get user by ID
  getById: (id) => {
    return new Promise((resolve, reject) => {
      client.hgetall(id, (err, obj) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        resolve(obj);
      });
    });
  },

  // Set user details
  setWithId: (DTO) => {
    const { id, first_name, last_name, email, phone } = DTO;
    client.hmset(
      id,
      [
        'first_name',
        first_name,
        'last_name',
        last_name,
        'email',
        email,
        'phone',
        phone,
      ],
      (reply, err) => {
        if (err) {
          console.log(err);
          return null;
        }

        return reply;
      }
    );
  },

  delById: (id) => {
    client.del(id);
  },
};
