import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useDataLayerValue} from '../DataLayer'
import { auth } from '../firebase';


function Header() {
    const [{basket,user}] = useDataLayerValue();

    const login=()=>{
        auth.signOut();
    }
    return (
        <nav className="header">
            {/* logo */}
            <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            {/* search box */}
            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Search anything...."/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                {/* buttons of login cart etc */}
                <Link className="header__link" to={!user && "/login"}>
                    <div onClick={login} className="header__option">
                        <span className="header__option1">Hello {!user? "Guest": user.email}</span>
                        <span className="header__option2">{user ? "Sign Out":"Sign In"}</span>
                    </div>
                </Link>
                <Link className="header__link" to="/orders">
                    <div className="header__option">
                        <span  className="header__option1">Returns</span>
                        <span className="header__option2">& Orders</span>
                    </div>
                </Link>
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__option1">Your</span>
                        <span className="header__option2">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__option2 header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
