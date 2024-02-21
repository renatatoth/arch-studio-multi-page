import {Link, NavLink} from "react-router-dom";
import classes from'./Header.module.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.logoContainer}>
                    <Link to="/"><img src={logo} alt="Logo"/></Link>
                </div>
                <ul className={classes.navList}>
                    <li className={classes.navItem}><NavLink to="/portfolio" className={({isActive}) => isActive ? `${classes.active}` : ''}>Portfolio</NavLink></li>
                    <li className={classes.navItem}><NavLink to="/about" className={({isActive}) => isActive ? `${classes.active}` : ''}>About Us</NavLink></li>
                    <li className={classes.navItem}><NavLink to="/contact" className={({isActive}) => isActive ? `${classes.active}` : ''}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;