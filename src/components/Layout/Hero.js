import TextBlock from "../UI/TextBlock";
import classes from './Hero.module.scss';

const Hero = ({title, subTitle, description, bgImage, layout}) => {
    return (
        <div className={`${classes.wrapper} ${layout === 'align-center' ? classes.alignCenter : layout === 'align-right' ? classes.alignRight : ''}`}>
            <div className={classes.imgContainer}>
                <img src={bgImage} alt={title}/>
            </div>
            <div className={classes.textContainer}>
                <h1 className={classes.title}>{title}</h1>
                <TextBlock title={subTitle} hasLine={layout === 'align-right' && true}>{description}</TextBlock>
            </div>
        </div>
    );
};

export default Hero;