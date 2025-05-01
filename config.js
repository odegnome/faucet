
import { stringToPath } from '@cosmjs/crypto'

export default {
    port: 80, // http port 
    db: {
        path: "./db/faucet.db" // save request states 
    },
    project: {
        name: "Ping Testnet",
        logo: "https://ping.pub/logo.svg",
        deployer: `<a href="#">Oblique</a>`
    },
    blockchain: {
        // make sure that CORS is enabled in rpc section in config.toml
        // cors_allowed_origins = ["*"]
        rpc_endpoint: "http://localhost:26657",

    },
    sender: {
        mnemonic: "fence code crash master claw hope private civil sugar various afraid measure visual rug true notable usual arctic bird mansion problem glimpse thumb deputy",
        option: {
            hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
            prefix: "mantra"
        }
    },
    tx: {
        amount: {
            denom: "uom",
            amount: "10000000"
        },
        fee: {
            amount: [
                {
                    amount: "200000",
                    denom: "uom"
                }
            ],
            gas: "200000"
        },
    },
    limit: {
        // how many times each wallet address is allowed in a window(24h)
        address: 10, 
        // how many times each ip is allowed in a window(24h),
        // if you use proxy, double check if the req.ip is return client's ip.
        ip: 10 
    }
}
