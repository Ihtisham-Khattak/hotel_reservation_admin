import { toast } from "react-toastify";
import firebase from "../../config/firebase";
import { reRegisterSnapshot } from "./authAction";
const storage = firebase.storage();
export const LoadModal = (data) => async (dispatch) => {
    dispatch({
        type: "QR_MODAL_SHOW",
        payload: data,
    });
};
