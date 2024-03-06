import TextBlock from "../UI/TextBlock";
import PortfolioGallery from "../Portfolio/PortfolioGallery";
import Button from "../UI/Button";
import classes from './Featured.module.scss';
import featuredData from '../../data/featured.json';

const Featured = () => {
    return (
        <section className={classes.featured}>
            <div className={classes.wrapper}>
                <TextBlock title="Featured" />
                <Button to="portfolio">See All</Button>
            </div>
            <PortfolioGallery data={featuredData} showNumber={true}/>
        </section>
    );
};

export default Featured;