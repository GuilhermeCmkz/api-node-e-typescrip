import express from 'express';

const server = express();


server.get('/teste', (_, res) => {
  return res.send('Olá, DEV!');
});

export { server };