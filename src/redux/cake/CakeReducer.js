const { BUY_CAKE } = require("./CakeType")

const initialState = {
    numCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, 
            numCakes: state.numCakes - action.payload 
        }

        default: return state
    }
}

export default cakeReducer