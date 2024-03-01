import classes from "./Footer.module.css";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "../ui/Button";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <nav className={classes.nav}>
                <div className={classes.logoContainer}>
                    <Link to="/"><img src={logo} alt="Logo"/></Link>
                </div>
                <ul className={classes.navList}>
                    <li className={classes.navItem}><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li className={classes.navItem}><NavLink to="/about">About Us</NavLink></li>
                    <li className={classes.navItem}><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className={classes.btnContainer}>
                <Button to="portfolio">See Our Portfolio</Button>
            </div>
        </footer>
    );
};

export default Footer;