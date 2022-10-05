import { actionTypes } from "../actions";

const initialState = {
    events: [],
    allEvents: [],
    providers: [],
    allProviders: [],
    detail: [],
    detailPack: [],
    services: [],
    packs: [],
    allPacks: [],
    favs: [],
    order: [],
    ordercita: [],
    ordenGenerada: {},
    clients: [],
    allClient: [],
    idClient: [],
    reviews: [],
    allReviews: [],
    clienteActual: [],
    clienteActual2:[],
    admins: [],
    adminById: {},
    promociones: [],
    ordenesStore:[],
}

if (localStorage.getItem('favs')) {
    initialState.favs = JSON.parse(localStorage.getItem('favs'));
} else initialState.favs = []

if (localStorage.getItem('order')) {
    initialState.favs = JSON.parse(localStorage.getItem('order'));
} else initialState.order = []


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.storeOrder:{
            return{
                ...state,
                ordenesStore: [...action.payload],
            }
        }
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
                promociones: action.payload,
            }
        } case actionTypes.updateAdmin: {
            return {
                ...state,
                admins: action.payload,
            }
        } case actionTypes.deleteAdmin: {
            return {
                ...state,
                admins: action.payload,
            }
        }
        case actionTypes.getEvents: {
            return {
                ...state,
                events: action.payload,
                allEvents: action.payload,
            };
        }
        case actionTypes.getAllClients: {
            return {
                ...state,
                clients: action.payload,
                allClients: action.payload,
            };
        }
        case actionTypes.getIdClient: {
            return {
                ...state,
                idClient: action.payload,
            };
        }
        case actionTypes.deleteClient: {
            return {
                ...state,
                clients: action.payload,
            };
        }
        case actionTypes.updateClient: {
            return {
                ...state,
                clients: action.payload,
            };
        }


            case actionTypes.buscarSiExisteCliente:{
                const allProviders = state.allProviders //aqui estan todos los proveedores
                console.log(action.payload,"Soy el action payload reducer")
                const buscarProveedor = allProviders.map(el=> el.sub) // false o true
                // console.log(buscarProveedor, "MapSubALProviders")
                const includesUser = buscarProveedor.includes(action.payload)
                // const respuesta = buscarProveedor ? true : false
                console.log(includesUser, "True o false")
                return{
                    ...state,

                clienteActual: includesUser,
            }
        }

        case actionTypes.buscarSiExisteClienteVerdadero:{
            const allClients = state.clients //aqui estan todos los clientes
            console.log(allClients, "LLegaron los clientes?reducer")
            console.log(action.payload,"Soy el action payload reducerde client")
            const buscarCliente = allClients.map(el=> el.sub) // false o true
            console.log(buscarCliente, "MapSubALclientes")
            const includesClient = buscarCliente.includes(action.payload)
            // const respuesta = buscarProveedor ? true : false
            console.log(includesClient, "True o false")
            return{
                ...state,

                clienteActual2: includesClient,
        }
    }


        // case actionTypes.addLastOrder:{
        //     console.log(state.ordercita, "estado ordercita")
        //     return{
        //         ...state,
        //         ordenMomentanea: state.ordercita.pop()

        //     }
        // }
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
        case actionTypes.getOrder: {
            return {
                ...state,
                ordercita: action.payload,
            }
        }

        case actionTypes.postOrder: {
            return {
                ...state,
                ordenGenerada: action.payload,
            }
        }
        case actionTypes.postClient: {
            return {
                ...state,
                
            }
        }

        case actionTypes.clearDetails: {
            return {
                ...state,
                detail: [],
                detailPack: [],
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
                detailPack: action.payload,
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
        case actionTypes.cambioClienteActual:{
            return{
                ...state,
                clienteActual2: action.payload

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
            return {
                ...state,
                packs: state.allPacks.filter((s) =>
                    s.services.map(se => se.name).includes(action.payload)),
            }
        }

        case actionTypes.filterPacksByEvents: {
            let evento = action.payload.replace("%C3%B1", "ñ")
            console.log(evento, "REDUCER")
            return {
                ...state,
                packs: state.allPacks.filter((s) =>
                s.events.map(se => se.name.toLowerCase()).includes(evento.toLowerCase())),
            }
        }

        case actionTypes.createPack: {
            return {
                ...state,
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
        case actionTypes.addToFavs: {
            return {
                ...state,
                favs: [...action.payload]
            }
        }
        case actionTypes.addToOrder: {
            return {
                ...state,
                order: [...action.payload]
            }
        }
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
        case actionTypes.Test: {
            return {
                ...state
            }
        }
        case actionTypes.getReviews: {
            return {
                ...state,
                reviews: action.payload,
                allReviews: action.payload,
            };
        }
        case actionTypes.postReviews: {
            return {
                ...state,
            }
        }

        default:
            return state;
    }
}

export default rootReducer;