
import { combineReducers } from "redux";
import changeWishList from "./WishListReducer";
import changeCart from "./AddToCartReducer";


export default  combineReducers({
   combineWishList: changeWishList,
    combineCart : changeCart
})
