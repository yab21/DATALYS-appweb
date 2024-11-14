const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const compression = require('compression');

// Amélioration de la gestion des variables d'environnement
const port: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';
const hostname: string = process.env.HOSTNAME || 'localhost';

// Configuration de Next.js
const app = next({ 
  dev,
  hostname,
  port 
});

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = createServer((req: any, res: any) => {
      try {
        // Activation de la compression
        compression()(req, res, () => {
          // Vérification de l'URL
          if (!req.url) {
            res.statusCode = 400;
            res.end('Bad Request');
            return;
          }

          const parsedUrl = parse(req.url, true);
          
          // Gestion de la requête par Next.js
          handle(req, res, parsedUrl);
        });
      } catch (err) {
        console.error('Error occurred handling request:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });

    // Gestion des erreurs du serveur
    server.on('error', (err: Error) => {
      console.error('Server error:', err);
    });

    // Démarrage du serveur
    server.listen(port, () => {
      console.log(
        `> Server listening at http://${hostname}:${port} as ${
          dev ? 'development' : process.env.NODE_ENV
        }`
      );
    });
  })
  .catch((err: Error) => {
    console.error('Error during server initialization:', err);
    process.exit(1);
});

module.exports = app;