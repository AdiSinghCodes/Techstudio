import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src="tech_logo-removebg-preview.png" alt="Techstudio Logo" /> {/* Add a valid src for the logo */}
            </div>
            <div className="navbar-right">
                <ul className="links">
                    <strong><li><Link to="/">Home</Link></li></strong>
                    <strong><li><Link to="/aboutus">About Us</Link></li></strong>
                    <strong><li><Link to="/services">Services</Link></li></strong>
                    <strong><li><Link to="/portfolio">Portfolio</Link></li></strong>
                    <strong><li><Link to="/blogs">Blogs</Link></li></strong>
                    <strong><li><Link to="/contactus">Contact Us</Link></li></strong>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
