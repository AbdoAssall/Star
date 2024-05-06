import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    if () {
        
    }
    render() {

        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-tranparent">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">Star</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link active" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link active" to="/tv">TV</NavLink>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    }
}