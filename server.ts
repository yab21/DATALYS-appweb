import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import compression from 'compression'
import { IncomingMessage, ServerResponse } from 'http'

// Amélioration de la gestion des variables d'environnement
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'

// Configuration de Next.js
const app = next({ 
  dev,
  hostname,
  port 
})

const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = createServer((req: IncomingMessage, res: ServerResponse) => {
      try {
        // Activation de la compression
        compression()(req as any, res as any, () => {
          // Vérification de l'URL
          if (!req.url) {
            res.statusCode = 400
            res.end('Bad Request')
            return
          }

          const parsedUrl = parse(req.url, true)
          
          // Gestion de la requête par Next.js
          handle(req, res, parsedUrl)
        })
      } catch (err) {
        console.error('Error occurred handling request:', err)
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    })

    // Gestion des erreurs du serveur
    server.on('error', (err) => {
      console.error('Server error:', err)
    })

    // Démarrage du serveur
    server.listen(port, () => {
      console.log(
        `> Server listening at http://${hostname}:${port} as ${
          dev ? 'development' : process.env.NODE_ENV
        }`
      )
    })
  })
  .catch((err) => {
    console.error('Error during server initialization:', err)
    process.exit(1)
})