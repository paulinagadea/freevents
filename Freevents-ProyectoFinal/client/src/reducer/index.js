import { actionTypes } from "../actions";

const initialState = {
    events:[],
    allEvents:[],
    providers:[],
    allProviders:[],
    detail:[],
    services:[],
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
            return{
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
                detail:[],
            }
        }
        case actionTypes.getDetails: {
            return {
                ...state,
                detail:[],
            }
        }  
    default:
        return state;
    }
}

export default rootReducer;


// case 'ORDER_BY_NAME':
//             let pokemonOrdenados = []
//             const allPokes = state.pokemons
//             if (action.payload === 'asc') {
//                 pokemonOrdenados = allPokes.sort(function (a, b) {
//                     if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
//                         return 1;
//                     }
//                     if (b.nombre.toLowerCase() > a.nombre.toLowerCase()) {
//                         return -1;
//                     }
//                     return 0;
//                 })
//             } else {
//                 pokemonOrdenados = allPokes.sort(function (a, b) {
//                     if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
//                         return -1;
//                     }
//                     if (b.nombre.toLowerCase() > a.nombre.toLowerCase()) {
//                         return 1;
//                     }
//                     return 0;
//                 })
//             }

//             return {
//                 ...state,
//                 pokemons: pokemonOrdenados
//             };
//         case 'ORDER_BY_ATTACK':
//             let sortedAttack = action.payload === 'asca' ?
//                 state.pokemons.sort(function (a, b) {
//                     if (a.ataque > b.ataque) {
//                         return -1;
//                     }
//                     if (b.ataque > a.ataque) {
//                         return 1;
//                     }
//                     return 0;
//                 }) :
//                 state.pokemons.sort(function (a, b) {
//                     if (a.ataque > b.ataque) {
//                         return 1;
//                     }
//                     if (b.ataque > a.ataque) {
//                         return -1;
//                     }
//                     return 0;
//                 })
//             return {
//                 ...state,
//                 nombre: sortedAttack
//             };