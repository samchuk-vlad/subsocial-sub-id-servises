import { Router } from 'express'

import { Apis } from '../../connections/types'
import { getNetworksProperties } from '../../services/properties';

const createChainsRouter = (apis: Apis) => {
  const router = Router()

  router.get('/properties', async function (_req, res) {
    const propertiesByNetwork = await getNetworksProperties({ apis })
    res.send(propertiesByNetwork);
  });

  return router
}

export default createChainsRouter