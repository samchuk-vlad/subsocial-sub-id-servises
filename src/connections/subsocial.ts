import { SubsocialApi } from '@subsocial/api'
import { Api } from '@subsocial/api'
import { registry } from '@subsocial/types/substrate/registry'
import { ApiPromise } from '@polkadot/api'
import { subsocial as connection } from './networks'

const { node, ipfs, offchain } = connection

let subsocial: SubsocialApi
let api: ApiPromise
/**
 * Create a new or return existing connection to Subsocial API
 * (includes Substrate and IPFS connections).
 */

type Api = SubsocialApi & {
  api: ApiPromise
}

export const resolveSubsocialApi = async (): Promise<Api> => {
  // Connect to Subsocial's Substrate node:

  if (!subsocial) {
    api = await Api.connect(node)
    const properties = await api.rpc.system.properties()

    registry.setChainProperties(properties)
    subsocial = new SubsocialApi({
      substrateApi: api,
      ipfsNodeUrl: ipfs as string,
      offchainUrl: offchain
    });

    (subsocial as any).api = api

  }

  return subsocial as unknown as Api
}
