import { actionTypes } from "../actionAdmin";

const initialState = {
    admins: [],
    adminById: {},
    promociones:[],

}

function adminReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.getAdmins: {
            return {
                ...state,
                admins: action.payload,
            };
        } case actionTypes.getByAdminId: {
            return {
                ...state,
                adminById: action.payload,
            };
        } case actionTypes.postAdmin: {
            return {
                ...state,
            }
        } case actionTypes.postPromociones: {
            return {
                ...state,
                promociones:action.payload,
            }
        } case actionTypes.updateAdmin: {
            return {
                ...state,
                admins: action.payload,
            }
        }case actionTypes.deleteAdmin: {
            return {
                ...state,
                admins: action.payload,
            }
        }
        default:
            return state;
    }
}


export default adminReducer;