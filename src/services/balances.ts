import { WithApis } from "./types"
import { getFromAllNetworks } from "./utils"
type GetBalancesByIdProps = WithApis & {
  account: string,
}

export const getBalancesByAccount = async ({ account, apis }: GetBalancesByIdProps) => {
  return getFromAllNetworks(apis, async api => {
    const { accountId, additional, lockedBreakdown, isVesting, ...balances } = await api.derive.balances.all(account)

    for (const key in balances) {
      balances[key] = balances[key].toString()
    }

    return {
      accountId,
      additional,
      lockedBreakdown,
      isVesting,
      ...balances
    }
  })
}