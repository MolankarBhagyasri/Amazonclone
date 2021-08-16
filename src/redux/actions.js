import *  as types from "./actionType";
import { auth } from "../utils/firebase";

const registerStart = () => ({
    type: types.REGISTER_START,
});

const registerSucess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload:user,
});


const registerError= (error) => ({
    type: types.REGISTER_FAIL,
    payload:error,
});

export const registerInitiate = (email,password) => {
    return function(dispatch) {
        dispatch(registerStart());
        auth
        .createUserWithEmailAndPassword(email, password).then(({ user }) => {
            dispatch(registerSucess(user));
        })
            .catch((error) => dispatch(registerError(error.message)));
    }
}