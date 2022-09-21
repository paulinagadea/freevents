import { actionTypes} from "../actions";

const initialState = {
    events: [],
    allEvents: [],
    providers: [],
    allProviders: [],
    detail: [],
    services: [],
    packs: [],
    allPacks: [],
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
        } case actionTypes.getPacks: {
            return {
                ...state,
                packs: action.payload,
                allPacks: action.payload,
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
                providers: [],
            }
        }
        case actionTypes.getDetails: {
            return {
                ...state,
                detail: action.payload,
            }
        }
        case actionTypes.getDetailsPacks: {
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
        case actionTypes.getNamesPacks: {
            return {
                ...state,
                packs: action.payload
            }
        }
        case actionTypes.orderByNamePack: {
            let sortedix;
            if (action.payload === 'ascendente') {
                sortedix = state.packs.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })
            } else if (action.payload === "descendente") {
                sortedix = state.packs.sort(function (a, b) {
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
                packs: sortedix
            }
        };
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
        case actionTypes.filterPacksByService:{

            // console.log(action.payload, "PAYLOAD TEMP")
            const allPackss = state.allPacks
            // console.log(state.allPacks)
            // console.log(allPackss, "EL ALL PACKS")
            const serviceFiltered = action.payload === 'All' ? allPackss : allPackss.filter(el=>el.services.map( el=> el.name.includes(action.payload)))
            console.log(serviceFiltered, "TEMP FILTRADO")
            
            return{
                ...state,
                packs: serviceFiltered,
            }
        }
        case actionTypes.createProvider: {
            return {
                ...state,
            }
        }
        case actionTypes.createUser: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}

export default rootReducer;


