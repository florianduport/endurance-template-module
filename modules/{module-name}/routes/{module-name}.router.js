import routerBase from 'endurance-core/lib/router.js';

const router = routerBase();

router.get("/", (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

export default router;
