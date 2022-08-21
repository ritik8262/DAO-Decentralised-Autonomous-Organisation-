import sdk from "./1-initialize-sdk.js"

const token = sdk.getToken("0xEc57e241BC70700916970f1F8F87C24d7B83e8C4")

;(async () => {
    try {
        const amount = 1_000_000
        await token.mintToSelf(amount)
        const totalSupply = await token.totalSupply()

        console.log(
            "✅ There now is",
            totalSupply.displayValue,
            "$NF in circulation"
        )
    } catch (error) {
        console.error("Failed to print money", error)
    }
})()
