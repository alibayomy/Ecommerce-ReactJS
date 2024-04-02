import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AxiosInstance } from "../../Network/AxiosInstance";
import axios from "axios";
import ProductCardComponent from "../../Components/ProductCardComponent";




function WishListPage() {
    const wishListItems = useSelector((state) => state.combineWishList.itemsId)
    const wishListCounter = useSelector((state) => state.combineWishList.counter)
    const [favItems, setfavItems] = useState([])
    useEffect(() => {
        axios.all(wishListItems.map((itemId) => AxiosInstance.get(`/${itemId}`)))
            .then((res) => setfavItems(res))
            .catch((err) => console.log(err));


    }, [wishListCounter])
    return (

        <>
            {
                (localStorage.getItem('CurrentUser'))
                    ?
                    <div className="container">
                        <div className="row justify-content-center">
                            {
                                favItems.map((product) => {
                                    return (
                                        <ProductCardComponent id={product.data.id} cardSrc={product.data.thumbnail} cardTilte={product.data.title} cardDesc={product.data.description} footer={product.data.price}> </ProductCardComponent>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div class="alert alert-danger" role="alert">
                        Please Log In First
                    </div>
            }
        </>
    )
}
export default WishListPage