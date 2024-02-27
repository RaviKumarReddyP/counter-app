import React, { Component } from 'react';
const NavBar = (props) => {
    return (<nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar <span
                className="badge badge-pill badge-secondary">{props.totalCounters}</span></a>
            </div>
        </nav>);
    
    
}
 
export default NavBar;
//shortcuts
//imrc for import react component
//cc for class component
//sfc for stateless functional component