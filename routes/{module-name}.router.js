import createRouter from 'endurance-core/lib/router';

const router = createRouter();

router.get("/", (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

export default router;
