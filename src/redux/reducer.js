import * as types from "./actionType";

const initialise = {
    loading: false,
    basket: [],
    user: null,
    error: null,
};

const basketReducer = (state = initialise, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
                loading: true,
            };
        case types.REGISTER_SUCCESS:
        default:
            return {
                ...state,
                loading: false,
                error: action.payload,

            };
        default:
            return state;
    };
};

