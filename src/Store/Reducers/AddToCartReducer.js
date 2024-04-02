import { act } from "react-dom/test-utils"

const INITIAL_VALUE= {
    cartCounter: "",
    cartIds: [],
    cartItems: []
}

export default function changeCart(state = INITIAL_VALUE, action){
    switch(action.type){
        case 'ADD_TOCART':
            return{
                ...state,
                cartCounter: action.payload.cartCounter,
                cartIds: action.payload.cartIds,
                // cartItems:[...state.cartItems,{  id:action.payload.cartItems.id, qty: action.payload.cartItems.qty, price: action.payload.cartItems.price}]
                cartItems: action.payload.cartItems
            }
        default:
            return state
    }

}