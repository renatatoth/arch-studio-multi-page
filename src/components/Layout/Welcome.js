import TextBlock from "../UI/TextBlock";
import classes from './Welcome.module.scss';

const Welcome = ({title, subTitle, description, image}) => {
    const [imgFolder, imgUrl] = image;

    return (
        <section className={classes.wrapper}>
            <div className={classes.imgContainer}>
                <img src={require(`../../assets/${imgFolder}/desktop/${imgUrl}`)} alt={title}/>
            </div>
            <div className={classes.textContainer}>
                <h1 className={classes.title}>{title}</h1>
                <TextBlock title={subTitle} hasLine={false}>{description}</TextBlock>
            </div>
        </section>
    );
};

export default Welcome;