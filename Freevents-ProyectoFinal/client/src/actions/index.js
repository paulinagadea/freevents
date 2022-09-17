import axios from "axios";

export const actionTypes ={
    getEvents:"getEvents",
    getProviders:"getProviders",
    getServices:"getServices",
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
            type: "GET_PROVIDERS",
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

