import PortfolioCard from "./PortfolioCard";
import classes from './PortfolioGallery.module.scss';

const PortfolioGallery = ({data}) => {
    return (
        <section className={classes.wrapper}>
            {data.map(e => <PortfolioCard key={e.id} projectData={e} />)}
        </section>
    );
};

export default PortfolioGallery;