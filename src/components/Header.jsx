import React from 'react';
import verano from '../images/verano.png';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <span>Bienvenido a nuestra tienda.</span>
                <h1>Conoce las ofertas especiales</h1>
                <p>
                    Adéntrate en las novedades del verano.
                    Conoce nuestros nuevos productos sustentables y sobre todo naturales.
                    Recuerda que nuestros productos no se prueban en animales. 
                </p>
                <img src={verano} alt='Ofertas' style={{ width: '300px', height: 'auto' }}/>
            </div>
        </header>
    );
}

export default Header;