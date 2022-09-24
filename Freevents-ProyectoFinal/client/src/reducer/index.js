import { actionTypes } from "../actions";

const initialState = {
    events: [],
    allEvents: [],
    providers: [],
    allProviders: [],
    detail: [],
    services: [],
    packs: [],
    allPacks: [],
    cart: [],
    order: [],
}

if (localStorage.getItem('cart')) {
    initialState.cart = JSON.parse(localStorage.getItem('cart'));
} else initialState.cart = []

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
        } case actionTypes.getOrder: {
            return {
                ...state,
                order: action.payload,
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
        // case actionTypes.getNamesPaquetes: {
        //     return {
        //         ...state,
        //         packs: action.payload
        //     }
        // }

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
        case actionTypes.filterPacksByService: {
            // const allPackss = state.allPacks
            // const serviceFiltered = action.payload === 'All' ? allPackss : allPackss.filter(el=>el.services.map( el=> el.name.includes(action.payload)))
            // console.log(serviceFiltered, "TEMP FILTRADO")

            return {
                ...state,
                packs: state.allPacks.filter((s) =>
                    s.services.map(se => se.name).includes(action.payload)),
            }
        }
        case actionTypes.createProvider: {
            return {
                ...state,
            }
        }
        case actionTypes.orderByPrice: {
            let sortedPrice;
            if (action.payload === 'ascendente') {
                sortedPrice = state.packs.sort(function (a, b) {
                    if (a.price > b.price) {
                        return 1;
                    }
                    if (b.price > a.price) {
                        return -1;
                    }
                    return 0;
                })
            } else if (action.payload === "descendente") {
                sortedPrice = state.packs.sort(function (a, b) {
                    if (a.price > b.price) {
                        return -1
                    }
                    if (b.price > a.price) {
                        return 1
                    }
                    return 0
                })
            }
            return {
                ...state,
                packs: sortedPrice
            }
        };

        case actionTypes.createUser: {
            return {
                ...state,
            }
        }
        case actionTypes.addToCart: {
            return {
                ...state,
                cart: [...action.payload]
            }
        }


        // case actionTypes.addToCart: {
        //     let newPack = state.packs.find(
        //         (p) => p.id === action.payload
        //     );
        //     let packInCart = state.cart.find((pack) => pack.id === newPack.id)

        //     return packInCart
        //         ? {
        //             ...state,
        //             cart: state.cart.map((pack) =>
        //                 pack.id === newPack.id
        //                     ? { ...pack, quantity: pack.quantity + 1 }
        //                     : pack
        //             ),
        //         }
        //         : {
        //             ...state,
        //             cart: [...state.cart, { ...newPack, quantity: 1 }],
        //         };
        // } 
        case actionTypes.removeOneFromCart: {
            let packToDelete = state.cart.find((pack) => pack.id === action.payload);

            return packToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((pack) =>
                        pack.id === action.payload
                            ? { ...pack, quantity: pack.quantity - 1 }
                            : pack
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter((pack) => pack.id !== action.payload),
                };
        } case actionTypes.removeAllFromCart: {
            return {
                ...state,
                cart: state.cart.filter((pack) => pack.id !== action.payload),
            };
        }
        case actionTypes.clearCart: {
            return {
                ...state,
                cart: [],
            }
        }
        default:
            return state;
    }
}

export default rootReducer;