import { Router } from 'express';
import { StatusCodes} from 'http-status-codes';

const router = Router();


router.post('/teste', (req, res) => {
  console.log(req.query.teste);

  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

export { router };