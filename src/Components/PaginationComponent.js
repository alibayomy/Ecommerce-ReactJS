import { Link } from "react-router-dom/cjs/react-router-dom.min"

function PaginationComponent() {

    return (
        <nav aria-label="Page navigation example ">
            <ul class="pagination pagination-lg mt-3">
                <li class="page-item"><Link class="page-link" to="?limit=28&skip=0">1</Link></li>
                <li class="page-item"><Link class="page-link" to="?limit=28&skip=30">2</Link></li>
                <li class="page-item"><Link class="page-link" to="?limit=28&skip=60">3</Link></li>
                <li class="page-item"><Link class="page-link" to="?limit=28&skip=90">4</Link></li>
                
            </ul>
        </nav>
    )
}
export default PaginationComponent