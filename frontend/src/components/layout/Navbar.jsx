import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const navItems = [
        'Holiday Gifting', 'New Arrivals', 'Best-Sellers', 'Clothing',
        'Tops & Sweaters', 'Pants & Jeans', 'Outerwear', 'Shoes & Bags', 'Sale'
    ];

    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar__list">
                    {navItems.map((item, index) => (
                        <li key={index} className={item === 'Sale' ? 'navbar__item navbar__item--sale' : 'navbar__item'}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
