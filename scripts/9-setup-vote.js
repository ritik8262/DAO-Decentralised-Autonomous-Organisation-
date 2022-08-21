import sdk from "./1-initialize-sdk.js"

const vote = sdk.getVote("0xD51720cD95105F95b34E6e3a83D4C6f71910e816")

const token = sdk.getToken("0xEc57e241BC70700916970f1F8F87C24d7B83e8C4")

;(async () => {
    try {
        await token.roles.grant("minter", vote.getAddress())

        console.log(
            "✅ Successfully gave vote contract permissions to act on token contract"
        )
    } catch (error) {
        console.error(
            "Failed to grant vote contract permissions on token contract"
        )
        process.exit(1)
    }

    try {
        const ownedTokenBalance = await token.balanceOf(
            process.env.WALLET_ADDRESS
        )

        const ownedAmount = ownedTokenBalance.displayValue
        const percent90 = (Number(ownedAmount) / 100) * 90

        await token.transfer(vote.getAddress(), percent90)

        console.log(
            "✅ Successfully transferred " +
                percent90 +
                " tokens to vote contract"
        )
    } catch (error) {
        console.log("Failed to transfer tokens to vote contract", error)
    }
})()
