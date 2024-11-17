import express from 'express';
import next from 'next';
import { createServer } from 'http';
import compression from './compression';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Activation de la compression
  server.use(compression());

  // Headers de sécurité pour le sous-domaine
  server.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    // Autoriser uniquement le sous-domaine
    res.setHeader('Access-Control-Allow-Origin', 'https://applicationweb.datalysconsulting.com');
    next();
  });

  // Route de santé pour le monitoring
  server.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
  });

  // Toutes les autres routes gérées par Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const httpServer = createServer(server);

  httpServer.listen(port, () => {
    console.log(`> Server listening on port ${port}`);
  });
}).catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
}); 