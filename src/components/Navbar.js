import React, { useState} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import {ReactComponent as Logo} from '../Logo.svg';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo"  onClick={closeMobileMenu}>
                    <div className="logo"> <Logo/> </div>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Главная
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                            Меню
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                            Галерея
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sale' className='nav-links' onClick={closeMobileMenu}>
                            Акция
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/delivery' className='nav-links' onClick={closeMobileMenu}>
                            Доставка
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                            Контакты
                        </Link>
                    </li>
                    <Link to='/telnumber' >
                        <button onClick={closeMobileMenu}>Позвонить</button>
                    </Link>
                </ul>
                
            </div>
        </nav> 
        </>
    )
}

export default Navbar;