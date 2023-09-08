import { Router } from 'express';

const router = Router();


router.post('/teste', (req, res) => {
  console.log(req.query.teste);

  return res.json(req.body);
});

router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

export { router };