

export const addToWishList = (counter, itemsId) =>{
    return{
    type: 'ADD_WISHLIST',
    payload: {counter, itemsId}

    }
}