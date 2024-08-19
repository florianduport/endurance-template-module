
const { createListener } = require('endurance-core/lib/listener');

createListener("APP_STARTED", async (event) => {
  console.log('new listener here');
});

