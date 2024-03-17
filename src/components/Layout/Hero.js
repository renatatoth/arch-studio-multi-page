import TextBlock from "../UI/TextBlock";
import classes from './Hero.module.scss';

const Hero = ({title, subTitle, description, bgImage}) => {
    const [bgImgFolder, bgImgUrl] = bgImage;

    return (
        <section className={classes.wrapper}>
            <div className={classes.imgContainer}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={require(`../../assets/${bgImgFolder}/tablet/${bgImgUrl}`)}/>
                    <img src={require(`../../assets/${bgImgFolder}/desktop/${bgImgUrl}`)} alt={title}/>
                </picture>
            </div>
            <div className={classes.textContainer}>
                <h1 className={classes.title}>{title}</h1>
                <TextBlock title={subTitle} hasLine>{description}</TextBlock>
            </div>
        </section>
    );
};

export default Hero;