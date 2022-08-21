import sdk from "./1-initialize-sdk.js"
import { readFileSync } from "fs"

const editiomDrop = sdk.getEditionDrop(
    "0x966b99C53A94F9964da1B3aE841af5AA20b04e96"
)
;(async () => {
    try {
        await editiomDrop.createBatch([
            {
                name: "Netflix and Chill",
                description: "This NFT will show Netflix on Television",
                image: readFileSync("scripts/assets/tv_netflix.jpg"),
            },
        ])
        console.log("✅ Successfully created a new NFT in the drop")
    } catch (error) {
        console.log("failed to create thr new NFT", error)
    }
})()
