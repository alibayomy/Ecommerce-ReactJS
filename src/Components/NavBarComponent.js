import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { addToWishList } from "../Store/Actions/WishListAction"
import { AddToCart } from "../Store/Actions/AddToCartAction"




function NavBarComponent(props) {

    const getWishListCounter = useSelector((state)=> state.combineWishList.counter)
    const getCardCounter = useSelector((state) => state.combineCart.cartCounter)
    const wishListProducts = useSelector((state) => state.combineWishList.itemsId)
    const cartProducts = useSelector((state) => state.combineCart.cartItems)
    const getCartIds = useSelector((state) => state.combineCart.cartIds)
   const history = useHistory()

   const dispatch = useDispatch()
   const [searchInput, setSearchInput] = useState('')
    const [currentUser, setCurrentUser] = useState({})

    function getSearchInput(e){
       setSearchInput(e.target.value)
    }

    function pushToSearch(e)
    {
        e.preventDefault()
        history.push(`/search/?${searchInput}`)

    }
    function logOutFunc(e)
    {
        e.preventDefault()
        localStorage.removeItem('CurrentUser')
        dispatch(addToWishList(0, []))
        dispatch(AddToCart(0, [], []))

        setCurrentUser({})
        history.push(`/login`)
    }
useEffect(()=>{
    (localStorage.getItem('CurrentUser')) && setCurrentUser(JSON.stringify(localStorage.getItem('CurrentUser')))
},[currentUser])   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="ms-5 nav-item">
                            {
                                (localStorage.getItem('CurrentUser'))
                                ?
                                <span></span>
                                :
                                <Link className="nav-link active" to="/register">Register <i className="fa-solid fa-user-plus"></i></Link>

                            }
                        </li>
                    </ul>
                    <form className="d-flex col-4 me-5" role="search">
                        <input className="form-control me-2" type="search" placeholder="What are you looking for" aria-label="Search" onChange={(e)=> getSearchInput(e)}></input>
                        <button className="btn btn-outline-light" type="submit" onClick={(e)=> pushToSearch(e)}>Search</button>
                    </form>

                    <div className="logInButton pe-2 border-end">
                        {
                            (localStorage.getItem('CurrentUser')) 
                            ?
                            <Link className="navbar-brand ms-3" onClick={(e)=> logOutFunc(e)}>LogOut <i className="fa-solid fa-right-from-bracket"></i></Link>
                            :
                            <Link className="navbar-brand ms-3" to="/login">LogIn <i className="fa-solid fa-user"></i></Link>

                        }

                    </div>
                   
                    <div className="pe-2 border-end">
                        <Link className="navbar-brand ms-3 " to="/wishlist">Wishlist  <i className="fa-regular fa-heart"></i></Link>
                        {
                            getWishListCounter ? <span className="position-absolute top-10 start-30 translate-middle badge rounded-pill bg-danger">
                            {getWishListCounter}
                            <span className="visually-hidden">unread messages</span>
                            </span>
                            :
                            <span></span>
                        }
                        
                    </div>
                    <div>
                        <Link className="navbar-brand ms-3" to="/cart">Cart <i className="fa-solid fa-cart-shopping"></i></Link>
                        {
                            getCardCounter ? <span className="position-absolute top-10 start-30 translate-middle badge rounded-pill bg-danger">
                            {getCardCounter}
                            <span className="visually-hidden">unread messages</span>
                            </span>
                            :
                            <span></span>
                        }
                        
                    </div>
                </div>
            </div>
        </nav >
    )
}
export default NavBarComponent