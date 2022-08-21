import sdk from "./1-initialize-sdk.js"

const editionDrop = sdk.getEditionDrop(
    "0x966b99C53A94F9964da1B3aE841af5AA20b04e96"
)

const token = sdk.getToken("0xEc57e241BC70700916970f1F8F87C24d7B83e8C4")

;(async () => {
    try {
        const walletAddresses =
            await editionDrop.history.getAllClaimerAddresses(0)

        if (walletAddresses.length === 0) {
            console.log(
                "No NFT's have been claimed yet, maybe get some friends to claim your free NFT's!"
            )
            process.exit(0)
        }

        const airdropTargets = walletAddresses.map((address) => {
            const randomAmount = Math.floor(
                Math.random() * (10000 - 1000 + 1) + 1000
            )

            console.log(
                "✅ Going to airdrop",
                randomAmount,
                "tokens to",
                address
            )

            const airdropTarget = {
                toAddress: address,
                amount: randomAmount,
            }
            return airdropTarget
        })

        console.log("🌈 Starting airdrop...")
        await token.transferBatch(airdropTargets)
        console.log(
            "✅ Successfully airdropped tokens to all the holders of the NFT!"
        )
    } catch (err) {
        console.error("Failed to airdrop tokens", err)
    }
})()
