import { Router } from 'express'
import { Apis } from '../connections/types'
import { getBalancesByAccount } from '../services/balances'
import createChainsRouter from './chains'

export const createRoutes = (apis: Apis) => {
  const router = Router()

  router.get('/:account/balances',
    async function (req, res) {
      const { account } = req.params
      const balances = await getBalancesByAccount({ account, apis })
      res.send(balances);
    }
  )

  router.use('/chains', createChainsRouter(apis))

  return router
}

