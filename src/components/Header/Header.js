import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="header">
                <Link to="/">
                    <img className="header-logo" src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png"
                        alt="amazon_logo" />
                </Link>
                <div className="header-option" style={{ marginRight: "-10px" }} >
                    <RoomIcon />
                </div>
                <div className="header-option">
                    <span className="header-option1">Hello </span>
                    <span className="header-option2"> Select Your Address</span>
                </div>
                <div className="search">
                    <select>
                        <option>All</option>
                    </select>
                    <input type="text" className="searchInput" />
                    <SearchIcon className="searchIcon" />
                </div>
                <div className="header-nav">
                    <Link to="/login" className="header-link">
                        <div className="header-option">
                            <span className="header-option1">Hello Guest</span>
                            <span className="header-option2"> Sign In</span>
                        </div>
                    </Link>
                    <Link to="/orders" className="header-link">
                        <div className="header-option">
                            <span className="header-option1">Returns</span>
                            <span className="header-option2">Orders</span>
                        </div>
                    </Link>
                    <Link to="/checkout" className="header-link">
                        <div className="header-option">
                            <div className="header-basket">
                                <div className="header-option">
                                    <ShoppingCartIcon />
                                    <span className="header-option2 basket-count">0</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header
