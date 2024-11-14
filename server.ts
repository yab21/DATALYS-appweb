const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const compression = require('compression');

const port: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';
const hostname: string = process.env.HOSTNAME || 'localhost';

const app = next({ 
  dev,
  hostname,
  port,
  dir: __dirname
});

const handle = app.getRequestHandler();

const startServer = async () => {
  try {
    await app.prepare();
    
    const server = createServer((req: any, res: any) => {
      try {
        compression()(req, res, () => {
          if (!req.url) {
            res.statusCode = 400;
            res.end('Bad Request');
            return;
          }

          const parsedUrl = parse(req.url, true);
          handle(req, res, parsedUrl);
        });
      } catch (err) {
        console.error('Request handling error:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });

    server.on('error', (err: Error) => {
      console.error('Server error:', err);
      process.exit(1);
    });

    server.listen(port, () => {
      console.log(
        `> Server listening at http://${hostname}:${port} as ${
          dev ? 'development' : process.env.NODE_ENV
        }`
      );
    });
  } catch (err) {
    console.error('Error during server initialization:', err);
    process.exit(1);
  }
};

startServer().catch((err) => {
  console.error('Fatal error during server startup:', err);
  process.exit(1);
});

module.exports = app;