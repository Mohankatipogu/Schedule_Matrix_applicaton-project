import React from "react";
import "./header.css"
import { Link } from "react-router-dom";
function Header(){
    return(
            <div > 
            <nav class="navbar navbar-expand-lg" style={{background:'#227B94'}}>
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Schedule</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to={"/"} className="text-decoration-none">
                <li class="nav-item nav-link">
                   Home
                </li>
                </Link>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        </div>
    )
}
export default Header;