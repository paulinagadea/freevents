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
            return {
                ...state,
                providers: action.payload
            }
        }
        case actionTypes.orderByName: {
            let sortedArr;
            if (action.payload === 'ascendente') {
                sortedArr = state.providers.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })
            } else if (action.payload === "descendente") {
                sortedArr = state.providers.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
            }

            return {
                ...state,
                providers: sortedArr
            }
        };
        //     case actionTypes.orderByNamee:{
        //         let sortedArr ; 
        //         if (action.payload === 'ascendente'){
        //             sortedArr = state.providers.sort(function(a, b){
        //             if(a.name.toLowerCase() > b.name.toLowerCase()){ 
        //                 return 1;
        //             }
        //             if (b.name.toLowerCase() > a.name.toLowerCase()){
        //                 return -1;
        //             }
        //                 return 0;
        //         })
        //             }else if (action.payload === "descendente") {
        //                 sortedArr = state.providers.sort(function (a, b) {
        //             if (a.name.toLowerCase() > b.name.toLowerCase()) {
        //                 return -1
        //             }
        //             if (b.name.toLowerCase() > a.name.toLowerCase()) {
        //                 return 1
        //           }
        //           return 0
        //         })
        //       }

        //     return {
        //         ...state,
        //         dogs:sortedArr
        // }
        //     }
        default:
            return state;
    }
}

export default rootReducer;

