import classes from './Hero.module.scss';

const Hero = ({title, subTitle, description, imgSrcFolder}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.overlay}></div>
            <div className={classes.imgContainer}>
                <img src={require(`../../assets/${imgSrcFolder}/desktop/image-hero.jpg`)} alt=""/>
            </div>
            <div className={classes.textContainer}>
                <h1 className={classes.title}>{title}</h1>
                <h2 className={classes.subTitle}>{subTitle}</h2>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
};

export default Hero;