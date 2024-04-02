

export  const AddToCart = (cartCounter, cartIds, cartItems) => {

    return{
        type: 'ADD_TOCART',
        payload: {cartCounter, cartIds, cartItems}
    }

}