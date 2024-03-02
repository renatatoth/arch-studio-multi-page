import {Link} from "react-router-dom";
import classes from './Button.module.scss';
import arrow from '../../assets/icons/icon-arrow.svg';

const Button = ({children, to}) => {
    return (
        <Link to={to} className={`${classes.btn} ${children ? classes.withText : ''}`}>
            <span>{children}</span>
            <img src={arrow} className={classes.icon} alt="Arrow icon" />
        </Link>
    );
};

export default Button;