import PageTitle from "../components/UI/PageTitle";
import PortfolioGallery from "../components/Portfolio/PortfolioGallery";
import portfolioData from '../data/portfolio.json';

const Portfolio = () => {
    return (
        <>
            <PageTitle>Portfolio</PageTitle>
            <PortfolioGallery data={portfolioData} showNumber={false}/>
        </>
    );
};

export default Portfolio;