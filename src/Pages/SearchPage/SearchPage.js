import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { AxiosInstance } from "../../Network/AxiosInstance"
import ProductCardComponent from "../../Components/ProductCardComponent"



function SearchPage()
{
    const searchParam = useLocation().search
    const [searchItems, setSearchItems] = useState([])
    useEffect(()=> {
        AxiosInstance(`/search?q=${searchParam.slice(1)}`)
        .then((res)=> setSearchItems(res.data.products))
        .catch((err)=> console.log(err))
    },[searchParam])

    return(
        <div className="container">
        <div className="row justify-content-center">
            {
                searchItems.map((product) => {
                    return (
                        <ProductCardComponent id={product.id} cardSrc={product.thumbnail}  cardTilte = {product.title}  cardDesc={product.description} footer = {product.price}> </ProductCardComponent>
                    )
                })
            }
        </div>
    </div>
    )
}
export default SearchPage