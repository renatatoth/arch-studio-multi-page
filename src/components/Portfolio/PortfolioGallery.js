import PortfolioCard from "./PortfolioCard";
import classes from './PortfolioGallery.module.scss';

const PortfolioGallery = ({data, showNumber}) => {
    return (
        <section className={classes.wrapper}>
            {data.map(e => <PortfolioCard key={e.id} projectData={e} showNumber={showNumber} />)}
        </section>
    );
};

export default PortfolioGallery;