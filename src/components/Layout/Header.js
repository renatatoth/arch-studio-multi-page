import {Link, NavLink} from "react-router-dom";
import classes from'./Header.module.scss';
import logo from '../../assets/logo.svg';
import menu from '../../assets/icons/icon-hamburger.svg';

const Header = ({menuVisible, onToggleMenu, onCloseMenu}) => {


    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.logoContainer}>
                    <Link to="/" onClick={onCloseMenu}><img src={logo} alt="Logo"/></Link>
                </div>
                {menuVisible &&
                    <ul className={classes.navList}>
                        <li className={classes.navItem}>
                            <NavLink to="/portfolio" onClick={onCloseMenu} className={({isActive}) => isActive ? `${classes.active}` : ''}>Portfolio</NavLink>
                        </li>
                        <li className={classes.navItem}>
                            <NavLink to="/about" onClick={onCloseMenu} className={({isActive}) => isActive ? `${classes.active}` : ''}>About Us</NavLink>
                        </li>
                        <li className={classes.navItem}>
                            <NavLink to="/contact" onClick={onCloseMenu} className={({isActive}) => isActive ? `${classes.active}` : ''}>Contact</NavLink>
                        </li>
                    </ul>
                }
                <div className={classes.mobileMenu} onClick={onToggleMenu}>
                    <img src={menu} alt="Menu icon"/>
                </div>
            </nav>
        </header>
    );
};

export default Header;