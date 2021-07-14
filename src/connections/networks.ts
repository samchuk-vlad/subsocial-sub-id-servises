import { Networks } from "./types"
import { registryTypes as subsocialTypes } from '@subsocial/types'

export const subsocial = {
  node: 'wss://rpc.subsocial.network',
  ipfs: 'https://app.subsocial.network/ipfs',
  offchain: 'https://app.subsocial.network/offchain',
  types: subsocialTypes
}

export const networks: Networks = {
  subsocial,
  kusama: {
    node: 'wss://kusama-rpc.polkadot.io'
  },
  polkadot: {
    node: 'wss://rpc.polkadot.io'
  }
}

export default networks