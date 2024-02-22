import Carousel from "../components/ui/Carousel";
import carouselData from "../data/carousel.json";
import PageTitle from "../components/ui/PageTitle";

const Home = () => {
    return (
        <>
            <PageTitle>Home</PageTitle>
            <Carousel data={carouselData}/>
        </>
    );
};

export default Home;