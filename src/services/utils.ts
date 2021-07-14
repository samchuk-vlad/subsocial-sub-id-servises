import { Apis, SupportedNetworks } from "../connections/types"
import { ApiPromise } from '@polkadot/api'

type ApiFn<T> = (api: ApiPromise) => Promise<T>

export const getFromAllNetworks = async <T = any, V = any>(apis: Apis, getData: ApiFn<V>) => {
  const data: Record<SupportedNetworks, T> = {} as any

  const promises = Object.entries(apis).map(async ([ network, api ]) => {
    data[network] = await getData(api)
  })

  await Promise.all(promises)

  return data
}