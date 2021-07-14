import { WithApis } from "./types"
import { getFromAllNetworks } from "./utils"

export const getNetworksProperties = async ({ apis }: WithApis) => {
  return getFromAllNetworks(apis, api => api.rpc.system.properties())
}