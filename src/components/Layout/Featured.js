import TextBlock from "../UI/TextBlock";
import PortfolioGallery from "../Portfolio/PortfolioGallery";
import Button from "../UI/Button";
import classes from './Featured.module.scss';


const Featured = ({data}) => {
    return (
        <section className={classes.featured}>
            <div className={classes.title}>
                <TextBlock title="Featured"/>
            </div>
            <div className={classes.btnContainer}>
                <Button to="portfolio">See All</Button>
            </div>
            <div className={classes.gallery}>
                <PortfolioGallery data={data} showNumber={true}/>
            </div>
        </section>
    );
};

export default Featured;