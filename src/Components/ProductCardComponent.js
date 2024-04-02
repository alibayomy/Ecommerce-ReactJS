import { Link } from "react-router-dom/cjs/react-router-dom.min"
import MyButtonComponent from "./MyButtonComponent"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addToWishList } from "../Store/Actions/WishListAction"
import { AddToCart } from "../Store/Actions/AddToCartAction"
import './ProductCardComponent.css'


function ProductCardComponent(props) {
    const wishListProducts = useSelector((state) => state.combineWishList.itemsId)
    const wishListCounter = useSelector((state) => state.combineWishList.counter)
    const cartProducts = useSelector((state) => state.combineCart.cartItems)
    const getCartIds = useSelector((state) => state.combineCart.cartIds)
    const cartCounter = useSelector((state) => state.combineCart.cartCounter)
    
    const [currentHeart, setCurrentHeart] = useState({
        liked: <i class="fa-solid fa-heart"></i>,
        notliked: <i class="fa-regular fa-heart"></i>
    })
    const dispatch = useDispatch()

    function addToWishListFunc(e) {
        const addItems = wishListProducts
        if (wishListProducts.includes(props.id)) {
            const updateItems = addItems.filter((id) => id !== props.id)
            dispatch(addToWishList(Number(wishListCounter - 1), updateItems))
        }
        else {
            addItems.push(props.id)
            dispatch(addToWishList(Number(wishListCounter + 1), addItems))

        }
    }
    function addToCartFunc(e) {
        const cartProductsObjs = cartProducts
        const addCartid = getCartIds
        if (getCartIds.includes(props.id)) {
            cartProductsObjs.map((obj) => {
                if (obj.id === props.id) {
                    obj.qty = (obj.qty + 1)
                }
            })
        }
        else {
            addCartid.push(props.id)
            const newItem = { id: props.id, qty: 1, price: props.footer }
            cartProducts.push(newItem)
            dispatch(AddToCart(Number(cartCounter) + 1, addCartid, cartProducts))
        }
    }


    return (
        <div className="card m-1 mt-3 shadow " style={{ width: "18rem" }} id={props.id}>
            <Link to={`/products/${props.id}`}>
                <img src={`${props.cardSrc}`} className="card-img-top" ></img>
            </Link>
            <div className="card-body text-center">
                <h5 class="card-title">{props.cardTilte}</h5>
                <p className="card-text rounded">{props.cardDesc}</p>

            </div>
            <div className="card-footer text-center fw-bold row myCardFootr text-danger" style={{backgroundColor:"#10495C"}}>
                <div className="col-lg-4 col-md-4 col-sm-4">

                    {
                        (localStorage.getItem('CurrentUser'))
                            ?
                            (
                                (getCartIds.includes(props.id))
                                    ?
                                    <button className="rounded-circle text-center"><i class="fa-solid fa-cart-shopping"
                                    style={{ color: "#74C0FC" }}>
                                    </i><span className="position-absolute top-10 start-30 translate-middle badge rounded-pill bg-danger">
                                            {cartProducts.find((item)=> item.id === props.id).qty}
                                            <span className="visually-hidden">unread messages</span>
                                        </span></button>
                                    :
                                    <button className="rounded-circle text-center"><i class="fa-solid fa-cart-plus" onClick={(e) => addToCartFunc(e)}></i></button>

                            )
                            :
                            <span></span>
                    }


                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    {`${props.footer}$`}
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    {
                        (localStorage.getItem('CurrentUser'))
                            ?
                            <button className="rounded-circle text-center" onClick={(e) => addToWishListFunc(e)}>{wishListProducts.includes(props.id) ? currentHeart.liked : currentHeart.notliked}</button>
                            :
                            <span></span>

                    }
                </div>


            </div>
        </div>
    )
}
export default ProductCardComponent
