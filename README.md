# Subsocial SubId services by [DappForce](https://github.com/dappforce)

## Api

### Main endpoint

```
api/v1/
```

### Account info

**Get balances from all network by account:**

```
GET /:acccount/balances` 
```

Example: 

```sh
curl --location --request GET 'http://localhost:3001/api/v1/5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty/balances'

Result:
{
    "subsocial": {
        "accountId": "3rGZ2cUTaCHWgG6z3UL8nFsWvUBt1K5CEeoMXTUVFL2GCZ9q",
        "additional": [],
        "lockedBreakdown": [],
        "isVesting": false,
        "accountNonce": "0",
        "freeBalance": "0",
        "frozenFee": "0",
        "frozenMisc": "0",
        "reservedBalance": "0",
        "votingBalance": "0",
        "availableBalance": "0",
        "lockedBalance": "0",
        "vestingLocked": "0",
        "vestedBalance": "0",
        "vestedClaimable": "0",
        "vestingEndBlock": "0",
        "vestingPerBlock": "0",
        "vestingTotal": "0"
    }
    "kusama": { ... }
    ...
}
```

### Chains info

**Get properties from all supported networks**

```
GET /chains/properties
```

Example:

```sh
curl --location --request GET 'http://localhost:3001/api/v1/chains/properties'

Result:
{
    "subsocial": {
        "ss58Format": 28,
        "tokenDecimals": [
            11
        ],
        "tokenSymbol": [
            "SUB"
        ]
    },
    "kusama": {
        "ss58Format": 2,
        "tokenDecimals": [
            12
        ],
        "tokenSymbol": [
            "KSM"
        ]
    },
    "polkadot": {
        "ss58Format": 0,
        "tokenDecimals": [
            10
        ],
        "tokenSymbol": [
            "DOT"
        ]
    }
}
```

## Development

```sh
# Install Node.js dependencies
yarn

# Compile TypeScript
yarn build

# Run
yarn start
```

## Available scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `start` - run server,

### Build your own docker image

```sh
docker build . -f docker/Dockerfile -t subsocial-sub-id-servisec:latest
```

## License

Subsocial is [GPL 3.0](./LICENSE) licensed.
