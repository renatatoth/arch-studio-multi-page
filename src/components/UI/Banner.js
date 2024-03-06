import Button from "./Button";
import classes from "./Banner.module.scss";

const Banner = ({title, bgImage, btnText, btnLink}) => {
    return (
        <section className={classes.banner}>
            <div className={classes.imgContainer}>
                <img src={bgImage}  alt={title}/>
            </div>
            <div className={classes.textContainer}>
                <h2>{title}</h2>
                <Button to={btnLink}>{btnText}</Button>
            </div>
        </section>
    );
};

export default Banner;