import classes from './Hero.module.scss';
import TextBlock from "./TextBlock";

const Hero = ({title, subTitle, description, imgSrcFolder}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.imgContainer}>
                <img src={require(`../../assets/${imgSrcFolder}/desktop/image-hero.jpg`)} alt={title}/>
            </div>
            <div className={classes.textContainer}>
                <h1 className={classes.title}>{title}</h1>
                <TextBlock title={subTitle} hasLine={true}>{description}</TextBlock>
            </div>
        </div>
    );
};

export default Hero;