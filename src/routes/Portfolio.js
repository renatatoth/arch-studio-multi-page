import PageTitle from "../components/ui/PageTitle";
import PortfolioGallery from "../components/layout/PortfolioGallery";
import portfolioData from '../data/portfolio.json';

const Portfolio = () => {
    return (
        <>
            <PageTitle>Portfolio</PageTitle>
            <PortfolioGallery data={portfolioData}/>
        </>
    );
};

export default Portfolio;