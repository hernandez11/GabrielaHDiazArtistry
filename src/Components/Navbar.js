import React from 'react';
import '../Styling/Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <>
        <div  className='navbar'>
            {/* logo */}
            <div className='logo__container'>
                <NavLink exact to='/' className='nav__logo'> <img className='logo__img' src='./Assets/main__logo.png' alt='' /> </NavLink>
            </div>
            {/* Nav Links */}
            <div className='navlink__container'>
                <ul className='navlink__wrapper'>
                    {/* <li className='nav__item'>
                        <NavLink exact to='/Featured' className='nav__link'>FEATURED</NavLink>
                    </li> */}
                    <li className='nav__item'>
                        <NavLink exact to='/Latest-Work' className='nav__link'>LATEST WORK</NavLink>
                    </li>                        
                    <li className='nav__item'>
                        <NavLink exact to='/Contact' className='nav__link'>CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar
