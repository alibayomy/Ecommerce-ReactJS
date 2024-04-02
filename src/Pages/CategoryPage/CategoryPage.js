import { useEffect, useState } from "react"
import { AxiosInstance } from "../../Network/AxiosInstance"
import axios from "axios"
import ProductCardComponent from "../../Components/ProductCardComponent"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"



function CategoryPage() {
    const [data, setData] = useState([])
    const getSearchParm = useLocation().search
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${getSearchParm.slice(1)}`)
            .then((res) => setData(res.data.products))
            .catch((err) => console.log(err))
    }, [getSearchParm])

    return (
        <div className="container">
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
    )

}

export default CategoryPage