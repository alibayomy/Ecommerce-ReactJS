import { useEffect, useState } from "react"
import NavBarComponent from "../../Components/NavBarComponent"
import axios from "axios"
import { AxiosInstance } from "../../Network/AxiosInstance"
import ProductCardComponent from "../../Components/ProductCardComponent"
import { prettyDOM } from "@testing-library/react"
import { useSelector } from "react-redux"
import PaginationComponent from "../../Components/PaginationComponent"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

function HomePage() {

    const [data, setData] = useState([])
    const [limit, setLimit] = useState(28)
    const [skip, setSkip] = useState(0)

    const cartProducts = useSelector((state) => state.combineCart.cartItems)

    const getparam = useLocation().search
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?${getparam.slice(1)}`)
            .then((res) => setData(res.data.products))
            .catch((err) => console.log(err))
    }, [getparam])
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {
                        data.map((product) => {
                            return (
                                <ProductCardComponent id={product.id} cardSrc={product.thumbnail} cardTilte={product.title} cardDesc={product.description} footer={product.price}> </ProductCardComponent>
                            )
                        })
                    }
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center '>
                    <div className='col-3 text-center'>
                        <PaginationComponent/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage