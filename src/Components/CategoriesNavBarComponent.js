import { Link } from "react-router-dom/cjs/react-router-dom.min"
import './CategoriesNavBarComponent.css'

function CategoriesNavBarComponent() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary p-0">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center categClass" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?smartphones">smartphones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?laptops">laptops</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?fragrances">fragrances</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?skincare">skincare</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/category/?groceries">groceries</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?home-decoration">home-decoration</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?furniture">furniture</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?tops">tops</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?womens-dresses">womens-dresses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?womens-shoes">womens-shoes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?mens-shirts">mens-shirts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?mens-shoes">mens-shoes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/category/?mens-watches">mens-watches</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?womens-watches">womens-watches</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?womens-bags">womens-bags</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?womens-jewellery">womens-jewellery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/category/?mens-watches">mens-watches</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?womens-watches">womens-watches</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?womens-bags">womens-bags</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/?womens-jewellery">womens-jewellery</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default CategoriesNavBarComponent