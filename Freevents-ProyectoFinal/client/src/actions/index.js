import axios from "axios";

export const actionTypes ={
    getEvents:"getEvents",
    getProviders:"getProviders",
    getServices:"getServices",
    createService:"createService",
    createProvider:"createProvider",
    getDetails:"getDetails",
    getNamesProviders:"getNamesProviders",
    orderByName:"orderByName",

};

export const getEvents = () => {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/events`);
        return dispatch({
            type: actionTypes.getEvents,
            payload: json.data,
        });
    };
};

export const getProviders = () => {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/providers`);
        return dispatch({
            type: actionTypes.getProviders,
            payload: json.data,
        });
    };
};

export const getServices = () => {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/services`);
        return dispatch({
            type: actionTypes.getServices,
            payload: json.data,
        });
    };
};


export function createService(payload) {
    return async function () {
        try {
            const creado = await axios.post("http://localhost:3001/services", payload);
            return creado;
        } catch (error) {
            throw new Error(error);
        }
    };
};


export function createProvider(payload) {
    return async function () {
        try {
            const creado = await axios.post("http://localhost:3001/providers", payload);
            return creado;
        } catch (error) {
            throw new Error(error);
        }
    };
};


export function getDetails(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/providers/${id}`);
            return dispatch({
                type: actionTypes.getDetails,
                payload: json.data,
            });
        } catch (error) {
            return error.message;
        }
    };
};


export const clearDetails = () => {
    return {
        type: actionTypes.clearDetails
    }
}

export function getNamesProviders(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/providers?name=" + name)
            return dispatch({
                type: actionTypes.getNamesProviders,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
            alert("No tal Proveedor")
        }
    }
};

export function orderByName(payload){
    return{
        type:actionTypes.orderByName,
        payload
    }
}; 