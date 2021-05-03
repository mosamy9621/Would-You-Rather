import { Link } from 'react-router-dom';
import Navbar from './Navbar';
/**
 * @description stateless component function that is responsible for creating page not found component.
 * @param {object} props 
 * @returns JSX describing the component view.
 */
function PageNotFound(props) {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="header-404">
                    <div className="title-404">404</div>
                    <span>The requested page not found.</span>
                </div>
                <div className="body-404">
                    <Link className="btn-home" to='/'>
                        Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default PageNotFound;