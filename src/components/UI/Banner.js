import Button from "./Button";
import classes from "./Banner.module.scss";

const Banner = ({title, bgImage, btnText, btnLink}) => {
    const [bgImgFolder, bgImgUrl] = bgImage;

    return (
        <section className={classes.banner}>
            <div className={classes.imgContainer}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={require(`../../assets/${bgImgFolder}/tablet/${bgImgUrl}`)}/>
                    <img src={require(`../../assets/${bgImgFolder}/desktop/${bgImgUrl}`)} alt={title}/>
                </picture>
            </div>
            <div className={classes.textContainer}>
                <h2>{title}</h2>
                <Button to={btnLink}>{btnText}</Button>
            </div>
        </section>
    );
};

export default Banner;