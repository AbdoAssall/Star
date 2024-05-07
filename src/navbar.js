import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {

    render() {

        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-tranparent">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="/home">Star</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/tv">TV</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" href="/" data-bs-toggle="dropdown" aria-expanded="false">
                                 Treding Day
                                </a>
                                <ul className="dropdown-menu bg-dark text-light">
                                    <li className="nav-item"><NavLink activeClassName="active" className="dropdown-item nav-link" to="/movesday">Movies</NavLink></li>
                                    <li className="nav-item"><NavLink activeClassName="active" className="dropdown-item nav-link" to="/tvday">TV</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item lh-lg align-self-center">
                               <span className="badge bg-danger fw-bold">NEW</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    }
}