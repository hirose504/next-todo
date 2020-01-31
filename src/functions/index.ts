import * as functions from 'firebase-functions'
import next from 'next'
import * as path from 'path'

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` }
})
const handle = app.getRequestHandler()

// eslint-disable-next-line import/prefer-default-export
export const nextApp = functions.https.onRequest((req, res) => {
  // eslint-disable-next-line no-console
  console.log(`File: ${req.originalUrl}`)
  return app.prepare().then(() => handle(req, res))
})
