import { toast } from "react-toastify";
import firebase from "../../config/firebase";
import { LOGIN, LOGOUT } from "../types";
// import firebase from "../../config/firebase";

export const loginAction = (creds) => {
    return (dispatch) => {
        dispatch(Loader(true));
        firebase
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then((data) => {
                dispatch(reRegisterSnapshot(data.user?.uid));
            })
            .catch((error) => {
                dispatch(Loader(false));
                // dispatch({
                //     type: "LOGIN_FAIL",
                //     uid: "",
                //     error: error,
                // });
                // dispatch({
                //     type: "LOGIN_REQUEST_END",
                // });
                toast.error(error.message);
            });
    };
};

export const reRegisterSnapshot = (id) => async (dispatch) => {
    firebase
        .firestore()
        .collection("users")
        .doc(id)
        .onSnapshot(async (doc) => {
            dispatch({
                type: LOGIN,
                payload: { id: doc.id, ...doc.data() },
            });
            dispatch(Loader(false));
            // dispatch({
            //     type: "LOGIN_REQUEST_END",
            // });
        });
};

export const logout = () => async (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
const Loader = (data) => async (dispatch) => {
    dispatch({
        type: "AUTH_LOADER",
        payload: data,
    });
};
