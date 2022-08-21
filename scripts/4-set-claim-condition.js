import sdk from "./1-initialize-sdk.js"
import { MaxUint256 } from "@ethersproject/constants"

const editionDrop = sdk.getEditionDrop(
    "0x966b99C53A94F9964da1B3aE841af5AA20b04e96"
)
;(async () => {
    try {
        const claimConditions = [
            {
                startTime: new Date(),
                maxQuantity: 50_000,
                price: 0,
                quantitiyLimitPerTransaction: 1,
                waitInSeconds: MaxUint256,
            },
        ]
        await editionDrop.claimConditions.set("0", claimConditions)
        console.log("✅ Successfully set claim conditions")
    } catch (error) {
        console.log("Failed to set claim conditions", error)
    }
})()
