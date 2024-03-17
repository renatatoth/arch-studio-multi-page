import TextBlock from "../UI/TextBlock";
import PortfolioGallery from "../Portfolio/PortfolioGallery";
import Button from "../UI/Button";
import classes from './Featured.module.scss';


const Featured = ({data}) => {
    return (
        <section className={classes.featured}>
            <div className={classes.wrapper}>
                <TextBlock title="Featured" />
                <Button to="portfolio">See All</Button>
            </div>
            <PortfolioGallery data={data} showNumber={true}/>
        </section>
    );
};

export default Featured;