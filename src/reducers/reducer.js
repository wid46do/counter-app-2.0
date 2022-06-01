const initialState = {
    count: 0
}

const counterRedux = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + action.payload.step
            }
        case "decrement":
            return {
                ...state,
                count: state.count - action.payload.step
            }
        case "reset":
            return {
                count: action.payload.min
            }
        default:
            return state;
    };
};

export default counterRedux;