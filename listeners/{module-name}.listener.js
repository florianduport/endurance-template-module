
const listener = require('endurance-core/lib/listener');

listener.createListener("APP_STARTED", async (event) => {
  console.log('new listener here');
});

module.exports = listener;