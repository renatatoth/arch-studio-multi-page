import {Link} from "react-router-dom";
import classes from './Button.module.scss';
import arrow from '../../assets/icons/icon-arrow.svg';

const Button = ({children, to, btnStyle}) => {
    return (
        <Link to={to} className={`${classes.btn} ${btnStyle === 'secondary' ? classes.secondary : ''}`}>
            <span>{children}</span>
            <img src={arrow} className={classes.icon} alt="Arrow icon" />
        </Link>
    );
};

export default Button;