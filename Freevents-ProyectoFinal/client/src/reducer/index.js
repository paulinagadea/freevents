import { actionTypes } from "../actions";

const initialState = {
    events: [],
    allEvents: [],
    providers: [],
    allProviders: [],
    detail: [],
    services: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.getEvents: {
            return {
                ...state,
                events: action.payload,
                allEvents: action.payload,
            };
        }
        case actionTypes.getProviders: {
            return {
                ...state,
                providers: action.payload,
                allProviders: action.payload,
            }
        }
        case actionTypes.getServices: {
            return {
                ...state,
                services: action.payload,
            }
        }
        case actionTypes.clearDetails: {
            return {
                ...state,
                detail: [],
            }
        }
        case actionTypes.getDetails: {
            return {
                ...state,
                detail: action.payload,
            }
        }
        case actionTypes.getNamesProviders: {
            const nameProvid = state.allProviders
            let nameVi = nameProvid.filter(v => {
                return v.name.toLowerCase().trim().includes(action.payload.toLowerCase().trim())
            })
            if (nameVi.length > 0) {
                return {
                    ...state,
                    providers: nameVi
                }
            } else {
                return {
                    ...state,
                    providers: state.allProviders
                }
            }
        }
        case actionTypes.orderByName:
            let providersorder = []
            const allProvi = state.providers
            if (action.payload === "asc") {
                providersorder = allProvi.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    } return 0;
                })
            } else {
                providersorder = allProvi.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            }
            return {
                ...state,
                providers: providersorder
            };
        default:
            return state;
    }
}

export default rootReducer;

