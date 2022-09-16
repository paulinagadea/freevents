
// const initialState = {
//     eventos:[],
//     proveedores:[],
//     allProveedores:[],
//     detail: [],

// }
function rootReducer(){

}
// function rootReducer(state = initialState, action){
// switch (action.type) {
//     case "CLEAR_STATE":
//         return{
//             ...state,
//             detail:[],
//             proveedores:[],
//         };
//         case "GET_PROVEEDORES":
//             return {
//                 ...state,
//                 proveedores: action.payload,
//                 allProveedores: action.payload
//             }
        
        

//     default:
//         break;
// }
// }

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