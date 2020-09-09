import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="amazon.png" />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <div className="header__optionLineOne">Hello Guest</div>
                    <div className="header__optionLineTwo">Sign In</div>
                </div>
                <div className="header__option">
                    <div className="header__optionLineOne">Return</div>
                    <div className="header__optionLineTwo">& Orders</div>
                </div>
                <div className="header__option">
                    <div className="header__optionLineOne">Your</div>
                    <div className="header__optionLineTwo">Prime</div>
                </div>

                {/* Basket */}
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="" />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
