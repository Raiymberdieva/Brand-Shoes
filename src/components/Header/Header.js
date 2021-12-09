import React, {useContext} from 'react';
import {Link , NavLink} from "react-router-dom";
import {CustomContext} from "../../Context";
import logo from "../../assets/logo1.svg"
import cartLogo from "../../assets/cart1.svg"

const Header = () => {
    const {count, removeUser} = useContext(CustomContext);
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Brand Shop</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="header__link"><NavLink to="/men">Men</NavLink></li>
                        <li className="header__link"><NavLink to="/women">Women</NavLink></li>
                        <li className="header__link"><NavLink to="/child">Child</NavLink></li>
                        <li className="header__link"><NavLink to="/cart">Cart</NavLink>
                        <span className='header__cart-count'>
                            {count < 1 ? '' : count > 9 ? '9+' : count}
                        </span>
                        </li>
                        <li className="header__link">
                            <Link to='/' onClick={()=>{removeUser();
                            localStorage.clear()
                            } }>Log out</Link>
                        </li>
                    </ul>
                </div>
            </nav>


            {/*<nav className='#ffffff white'>*/}
            {/*    <div className="nav-wrapper">*/}
            {/*        <Link to="/" className="brand-logo center">*/}
            {/*            <img src={logo} alt="logo"/>*/}
            {/*        </Link>*/}
            {/*        <ul className="left">*/}
            {/*            <li><NavLink to="/men">Men</NavLink></li>*/}
            {/*            <li><NavLink to="/women">Women</NavLink></li>*/}
            {/*            <li><Link to="/child">Child</Link></li>*/}
            {/*        </ul>*/}


            {/*        <ul className="right">*/}
            {/*            <li><NavLink to="/favorite">Favorite</NavLink></li>*/}
            {/*            <li><NavLink to="/cart">*/}
            {/*                <img src={cartLogo} alt=""/>*/}
            {/*            </NavLink>*/}
            {/*                <span className='header__cart-count'>*/}
            {/*                    {count < 1 ? '' : count > 9 ? '9+' : count}*/}
            {/*                              </span>*/}
            {/*            </li>*/}
            {/*            <li><Link to='/' onClick={()=>removeUser()}> User </Link></li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </header>
    );
};

export default Header;