const { BUY_ICECREAM } = require("./IceCreamType")

const initialState = {
    numIceCreams: 100
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state, 
            numIceCreams: state.numIceCreams -1 
        }

        default: return state
    }
}

export default iceCreamReducer