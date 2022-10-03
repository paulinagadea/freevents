import axios from "axios";

export const actionTypes = {
    getAdmins: "getAdmins",
    getAdminById:"getAdminById",
    postAdmin:"postAdmin",
    postPromociones:"postPromociones",
    updateAdmin:"updateAdmin",
    deleteAdmin:"deleteAdmin",
}


export const getAdmins = (payload) => {
    return async function (dispatch) {
        var json = await axios.get(`/admins/?name=${payload}`);
        return dispatch({
            type: actionTypes.getAdmins,
            payload: json.data,
        });
    };
};

export function getByAdminId(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/admins/:${id}`);
            return dispatch({
                type: actionTypes.getAdminById,
                payload: json.data,
            });
        } catch (error) {
            return error.message;
        }
    };
};

export function postAdmin(payload) {
    return async function (dispatch) {
        try {
            const creado = await axios.post("/admins", payload);
            return dispatch({
                type: actionTypes.postAdmin,
                payload: creado.data
            })
        } catch (error) {
            throw new Error(error);
        }
    };
};

export function postPromociones(payload) {
    return async function (dispatch) {
        try {
            const creado = await axios.post("/admins/promocion", payload);
            return dispatch({
                type: actionTypes.postPromociones,
                payload: creado.data
            })
        } catch (error) {
            throw new Error(error);
        }
    };
};

export const updateAdmin = (id) => {
    return async function (dispatch) {
        var json = await axios.patch(`/admins/:${id}`);
        return dispatch({
            type: actionTypes.updateAdmin,
            payload: json.data,
        });
    };
};

export function deleteAdmin(id) {
    return async function () {
        try {
            const eliminado = await axios.delete(`admins/delete/${id}`)
            return eliminado;
        } catch (error) {
            throw new Error(error)
        }
    }
};