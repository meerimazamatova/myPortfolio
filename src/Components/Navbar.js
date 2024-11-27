import React from 'react';
import '../Styles/Navbar.css'; // Adjust the path if needed
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link to={'/'}>Home</Link></li>
                <li className="navbar-item"><Link to={'/aboutme'}>About</Link></li>
                <li className="navbar-item"><Link to={'/projects'}>Projects</Link></li>
            
            </ul>
        </nav>
    );
};

export default Navbar;
