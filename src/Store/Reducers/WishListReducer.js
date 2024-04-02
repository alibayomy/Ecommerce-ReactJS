const INITIAL_VALUE = {
    counter: "",
    itemsId: []
}

export default function changeWishList(state = INITIAL_VALUE, action)
{
    switch(action.type)
    {
        case 'ADD_WISHLIST':
            return {
                ...state,
                counter: action.payload.counter,
                itemsId: action.payload.itemsId
            }
        default:
            return state
    }
}