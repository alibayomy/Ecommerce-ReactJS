import { Link } from "react-router-dom/cjs/react-router-dom.min"
import MyButtonComponent from "./MyButtonComponent"
import { useDispatch, useSelector } from "react-redux"
import { AddToCart } from "../Store/Actions/AddToCartAction"



function CartItemComponent(props) {

    const cartCounter = useSelector((state)=> state.combineCart.cartCounter)
    const cartProducts = useSelector((state) => state.combineCart.cartItems)
    const getCartIds = useSelector((state) => state.combineCart.cartIds)
    const dispatch = useDispatch()

    function removeFromCartFunc() {
        const updateCart = getCartIds.filter((id)=> id !== props.id)
        const updateCartProducts = cartProducts.filter((obj)=> obj.id !== props.id)
        let adjustcounter = 0
        for (let pro of updateCartProducts) {
            if (pro.qty) {
                adjustcounter= adjustcounter + (Number(pro.qty))
            }
        }
        dispatch(AddToCart(adjustcounter,updateCart, updateCartProducts))
    }

    function adjustQuantity(e, itemId){
        const increaseQty = cartProducts
        increaseQty.map((product)=> {
            if(product.id === itemId)
            {
                product.qty = Number(e.target.value)
            }
        })
        let adjustcounter = 0
        for (let pro of increaseQty) {
            if (pro.qty) {
                adjustcounter= adjustcounter + (Number(pro.qty))
            }
        }
        dispatch(AddToCart(adjustcounter, getCartIds, increaseQty))
        
    }
    return (
        <div className="container mt-5 mb-5 shadow ">
            <div className="row">
                <div className="col-lg-4 col-md-4-col-sm-4">
                    <Link to={`/products/${props.id}`}>
                        <img src={`${props.cardSrc}`} className="card-img-top " style={{ height: "16rem" }}></img>
                    </Link>
                </div>
                <div className="col-lg-6 col-md-4-col-sm-4 position-relative">
                    <h3 class="card-title">{props.cardTilte}</h3>
                    <p className="card-text rounded">{props.cardDesc}</p>
                    <MyButtonComponent display='d-grid' title="Remove from cart" btnClass="btn-primary mt-5 " clickFunc={removeFromCartFunc}></MyButtonComponent>
                </div>
                <div className="col-lg-2 col-md-2-col-sm-2">
                    <h2>{`${props.price}$`}</h2>
                    {/* <select class="form-select mt-5" aria-label="Default select example"
                    onChange={(e)=>adjustQuantity(e, props.id)}>
                        <option selected>{props.qty}</option>
                        <option value={`${props.qty + 1}`}>{props.qty + 1}</option>
                        <option value={`${props.qty + 2}`}>{props.qty + 2}</option>
                        <option value={`${props.qty + 3}`}>{props.qty + 3}</option>
                        <option value={`${props.qty + 4}`}>{props.qty + 4}</option>
                        <option value={`${props.qty + 5}`}>{props.qty + 5}</option>
                        <option value={`${props.qty + 6}`}>{props.qty + 6}</option>
                        <option value={`${props.qty + 7}`}>{props.qty + 7}</option>
                        <option value={`${props.qty + 8}`}>{props.qty + 8}</option>
                        <option value={`${props.qty + 9}`}>{props.qty + 9}</option>
                    </select> */}
                    <select class="form-select mt-5" aria-label="Default select example"
                    onChange={(e)=>adjustQuantity(e, props.id)}>
                        <option selected>{props.qty}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <h4 className="mt-5 text-danger">{`Total:  ${props.price*props.qty}`}</h4>
                </div>

            </div>
        </div>
    )
}
export default CartItemComponent