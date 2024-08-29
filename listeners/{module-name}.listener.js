import listener from 'endurance-core/lib/listener';

listener.createListener("APP_STARTED", async (event) => {
  console.log('new listener here');
});

export default listener;