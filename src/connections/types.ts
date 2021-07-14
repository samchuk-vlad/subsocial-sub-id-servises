import { ApiPromise } from '@polkadot/api'

export type Network = {
  node: string
  types?: any,
  [key: string]: any
}

export type SupportedNetworks =
  | 'subsocial'
  | 'kusama'
  | 'polkadot'

export type Networks = Record<SupportedNetworks, Network>
export type Apis = Record<SupportedNetworks, ApiPromise>