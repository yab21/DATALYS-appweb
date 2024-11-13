import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import compression from 'compression'
import { IncomingMessage, ServerResponse } from 'http'
 
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  createServer((req: IncomingMessage, res: ServerResponse) => {
    // Cast the req and res to any to bypass type checking
    // This is safe because Next.js handles the request/response appropriately
    compression()(req as any, res as any, () => {
      const parsedUrl = parse(req.url!, true)
      handle(req, res, parsedUrl)
    })
  }).listen(port)
 
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})