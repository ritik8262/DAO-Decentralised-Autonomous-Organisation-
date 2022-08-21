import sdk from "./1-initialize-sdk.js"
import { ethers } from "ethers"
import { CommonSymbolSchema } from "@thirdweb-dev/sdk"

const vote = sdk.getVote("0xD51720cD95105F95b34E6e3a83D4C6f71910e816")

const token = sdk.getToken("0xEc57e241BC70700916970f1F8F87C24d7B83e8C4")

;(async () => {
    try {
        const amount = 420_000
        const description =
            "Should the DAO mint an additional " +
            amount +
            " token into the treasury?"
        const executions = [
            {
                toAddress: token.getAddress(),
                nativeTokenValue: 0,
                transactionData: token.encoder.encode("mintTo", [
                    vote.getAddress(),
                    ethers.utils.parseUnits(amount.toString(), 18),
                ]),
            },
        ]
        await vote.propose(description, executions)

        console.log("✅ Successfully created proposal to mint tokens")
    } catch (error) {
        console.error("failed  to create firstt proposal", error)
        process.exit(1)
    }

    try {
        const amount = 6_900
        const description =
            "Should the DAO transfer " +
            amount +
            " tokens from the treasury to" +
            process.env.WALLET_ADDRESS +
            "for being awesome?"
        const executions = [
            {
                nativeTokenValue: 0,
                transactionData: token.encoder.encode("transfer", [
                    process.env.WALLET_ADDRESS,
                    ethers.utils.parseUnits(amount.toString(), 18),
                ]),
                toAddress: token.getAddress(),
            },
        ]
        await vote.propose(description, executions)

        console.log(
            "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
        )
    } catch (error) {
        console.error("Failed to create second propoosal", error)
    }
})()
