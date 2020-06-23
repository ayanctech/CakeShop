const { BUY_CAKE } = require("./CakeType")

export const buyCake = (number=1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}
