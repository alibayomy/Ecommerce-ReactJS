import { useEffect, useState } from "react";
import { AxiosInstance } from "../../Network/AxiosInstance";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './SingleProductPage.css'
import MyButtonComponent from "../../Components/MyButtonComponent";
import whiteHeart from '../../images/love.png'
import redHeart from '../../images/heart.png'
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../Store/Actions/WishListAction";
import { AddToCart } from "../../Store/Actions/AddToCartAction";
function SingleProductPage(props) {

    //! iMAGES slider ----------------------------------------

    const [imgIndex, setImageIndex] = useState(0)

    function setprevImage() {
        if (imgIndex === 0) {
            setImageIndex(productImages.length - 1)
        }
        else {
            setImageIndex(imgIndex - 1)
        }

    }
    function setnextImage() {
        if (imgIndex === (productImages.length - 1)) {
            setImageIndex(0)
        }
        else
            setImageIndex(imgIndex + 1)
    }

//^ handleing the wishList and cart---------------------------------------


    const dispatch = useDispatch()
    const wishListProducts = useSelector((state) => state.combineWishList.itemsId)
    const wishListCounter = useSelector((state) => state.combineWishList.counter)
    const cartProducts = useSelector((state) => state.combineCart.cartItems)
    const getCartIds = useSelector((state) => state.combineCart.cartIds)
    const cartCounter = useSelector((state) => state.combineCart.cartCounter)
    const productId = useParams()

function addToCartFunction(e){
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
        addCartid.push(Number(productId.id))
        const newItem = { id: Number(productId.id), qty: 1, price: product.price }
        cartProducts.push(newItem)
        dispatch(AddToCart(Number(cartCounter) + 1, addCartid, cartProducts))
    }
}

function addToWishListFunc(){
    const newListProducts = wishListProducts
    if (newListProducts.includes(Number(productId.id)))
    {
        const updatedProducts = newListProducts.filter((singleId)=> singleId !== Number(productId.id ))
        dispatch((addToWishList(wishListCounter-1, updatedProducts)))
    }
    else{
        newListProducts.push(Number(productId.id))
        dispatch(addToWishList(wishListCounter + 1, newListProducts))
    }

}
    const [product, setProduct] = useState({})
    const [productImages, setProductImages] = useState([])
    useEffect(() => {
        AxiosInstance.get(`/${productId.id}`)
            .then((res) => {
                setProduct(res.data)
                setProductImages(res.data.images)
            })
            .catch((err) => console.log(err))
    }, [imgIndex, wishListCounter, getCartIds])
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 me-5">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={productImages[imgIndex]} className="d-block w-100" alt="..."></img>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" onClick={() => setprevImage()}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" onClick={() => setnextImage()} >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 m-5" id={productId.id}>
                        <span className="position-absolute top-10 start-30 translate-middle badge rounded-pill bg-danger">
                            {`Discount:${product.discountPercentage}%`}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        <h1 className="fw-bold mb-5 productTitle">{product.title}</h1>
                        <h2 className="mt-5">{product.description}</h2>
                        <div className="col-12 m-5">
                            <p><s>{`was: ${Math.round((product.price) * (1 + (product.discountPercentage / 100)))}$`}</s></p>
                            <h4>{`Now: ${product.price}$`}</h4>
                        </div>
                        <div className="col-12 ms-0 m-5 text-start">
                            <p className="fs-3 text-danger">{`Available Quantity: ${product.stock} `}</p>
                        </div>
                        <div className="d-flex">
                            <div className="col-6" >
                                {
                                    (localStorage.getItem('CurrentUser'))
                                    ?
                                    (
                                        getCartIds.includes(Number(productId.id))
                                        ?
                                        <MyButtonComponent display='d-grid' title="Added To Card" btnClass="btn-success" disable = "True"></MyButtonComponent>
                                        :
                                        <MyButtonComponent display='d-grid' title="Add To Card" btnClass="btn-primary" clickFunc = {addToCartFunction}></MyButtonComponent>
                                    )
                                    :
                                    <MyButtonComponent display='d-grid' title="Add To Card" btnClass="btn-primary" disable = "True"></MyButtonComponent>
                                }
                            </div>
                            <div className="col-6 ms-5 rounded-circle">
                                {
                                    (localStorage.getItem('CurrentUser'))                                    
                                    ?
                                    <img src={ wishListProducts.includes(Number(productId.id)) ? redHeart : whiteHeart}  className='heartIcon' on onClick={() => addToWishListFunc()}></img>
                                    :
                                    <span></span>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SingleProductPage