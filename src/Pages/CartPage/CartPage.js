import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AxiosInstance } from "../../Network/AxiosInstance"
import CartItemComponent from "../../Components/CartItemComponent"
import MyButtonComponent from "../../Components/MyButtonComponent"




function CartPage() {

    const getCartIds = useSelector((state) => state.combineCart.cartIds)
    const cartProducts = useSelector((state) => state.combineCart.cartItems)
    const cartCounter = useSelector((state)=> state.combineCart.cartCounter)


    const [cartItems, setCartItems] = useState([])
    const [sum, setSum] = useState(0)

    useEffect(() => {
        axios.all(getCartIds.map((itemId) => AxiosInstance.get(`/${itemId}`)))
            .then((res) => setCartItems(res))
            .catch((err) => console.log(err));
        let total = 0
        for (let pro of cartProducts) {
            if (pro.id) {
                total= (total + (Number(pro.qty) * Number(pro.price)))
            }
        }
        setSum(total)
    }, [cartProducts, cartProducts.id,cartCounter])



    return (
        <>
            <div className="container text-start">
                <h2 className=" mt-5 text-danger text-start">Cart Items <span className="fw-lighter">{`(${cartCounter}item)`}</span></h2>
            </div>
            {
                (localStorage.getItem('CurrentUser'))
                    ?
                    (<div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                {
                                    cartItems.map((item) => {
                                        return (
                                            <CartItemComponent id={item.data.id} cardSrc={item.data.thumbnail} cardTilte={item.data.title} cardDesc={item.data.description} price={item.data.price}
                                                qty={(cartProducts.find(prod => prod.id === item.data.id)) ? (cartProducts.find(prod => prod.id === item.data.id)).qty : 0}></CartItemComponent>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 border border-warning h-50 p-4 bg-body rounded shadow-sm">
                                <h3>Order Summary</h3>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Apply</button>
                                </div>
                                <div className="col-12 d-flex mb-1">
                                    <div className="col-6">
                                        <span className="fw-lighter me-5">{`Subtotal (${cartCounter}item)`}</span>
                                    </div>
                                    <div className="col-5 text-end">
                                        <span className="fw-lighter me-5">{sum}</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex mb-1 pb-2 border-bottom ">
                                    <div className="col-6">
                                        <span className="fw-lighter me-5">{`Tax `}</span>
                                    </div>
                                    <div className="col-5 text-end">
                                        <span className="fw-lighter me-5">{'14%'}</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex mb-2">
                                    <div className="col-6">
                                        <span className="fw-bold fs-2 me-5">{`TOTAL `}</span>
                                    </div>
                                    <div className="col-5 text-end">
                                        <span className="fw-bold fs-2 me-5">{`${Math.round(sum * (1+ 14/100))}$`}</span>
                                    </div>
                                    </div>
                                <MyButtonComponent display='d-grid' btnClass='btn-success' title='Check Out'></MyButtonComponent>
                            </div>
                        </div>
                    </div>)
                    :
                    <div class="alert alert-danger" role="alert">
                        Please Log In First
                    </div>
            }
        </>
    )
}
export default CartPage