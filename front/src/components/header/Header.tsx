import "./Header.scss"
import balagan from "../../imgs/balagan.png"
import logo from "../../imgs/logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <NavLink to="/main">
                <img src={logo} alt="balagan"></img>
                </NavLink>
                
            </div>
            <nav className="header__nav">
                <NavLink to="/events" className="header__nav__link">События</NavLink>
                <NavLink to="/events" className="header__nav__link">Магазин</NavLink>
                <NavLink to="/events" className="header__nav__link">О проекте</NavLink>
                <NavLink to="/auth" className="header__nav__link header__nav__link__enter">Войти</NavLink>
            </nav>
        </div>
    );
};

export default Header;