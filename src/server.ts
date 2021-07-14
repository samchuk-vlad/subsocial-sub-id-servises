import express from 'express'
import cors from 'cors';
import timeout from 'connect-timeout';
import { reqTimeoutSecs, maxFileSizeBytes, allowedOrigins, port } from './env';
import { newLogger } from '@subsocial/utils';

import { createRoutes } from './routes'
import { Apis } from './connections/types';

require('dotenv').config()

const log = newLogger('HTTP server')

export const startHttpServer = (apis: Apis) => {
  const app = express()

  app.use(cors((req, callback) => {
    const origin = req.method === 'GET' ? '*' : allowedOrigins
    callback(null, { origin })
  }))

  function haltOnTimedout(req: express.Request, _res: express.Response, next) {
    if (!req.timedout) next()
  }

  app.use(timeout(`${reqTimeoutSecs}s`))

  // for parsing application/json
  app.use(express.json({ limit: maxFileSizeBytes }))
  app.use(haltOnTimedout)

  // for parsing application/xwww-form-urlencoded
  app.use(express.urlencoded({ extended: true, limit: maxFileSizeBytes }))
  app.use(haltOnTimedout)

  app.use('/api/v1', createRoutes(apis))

  // for parsing multipart/form-data
  // const upload = multer({ limits: { fieldSize: maxFileSizeBytes } })
  // app.use(express.static('./email/templates'))
  app.listen(port, () => {
    log.info(`HTTP server started on port ${port}`)
  })
}