import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class PageNotFound extends Component {
    render() {
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
}
export default PageNotFound;