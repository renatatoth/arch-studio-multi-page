import Carousel from "../components/ui/Carousel";
import carouselData from "../data/carousel.json";

const Index = () => {
    return (
        <>
            <Carousel data={carouselData}/>
        </>
    );
};

export default Index;