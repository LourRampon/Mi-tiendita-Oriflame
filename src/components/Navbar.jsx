import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { isElementType } from '@testing-library/user-event/dist/utils';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Mi tienda</span>
                </div>
             <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
             </ul>
             <div className="navbar-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
             </div>
            </nav>
        </div>
    ); 
};

export default Navbar;