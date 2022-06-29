const defaultState = {
    topCoin:{},
    bottomCoin:{},
}
const coinReducer = (state=defaultState, action ) =>{
    if(action.type === "SET_TOP_COIN"){
        let newState = {...state, topCoin:action.payload}
        return newState;
    } else if(action.type === "SET_Bottom_COIN"){
        let newState = {...state, bottomCoin:action.payload}
        return newState;
    }
    return state
}

export default coinReducer;