import PageTitle from "../components/UI/PageTitle";
import Carousel from "../components/Carousel/Carousel";
import Featured from "../components/Layout/Featured";
import Welcome from "../components/Layout/Welcome";
import Banner from "../components/UI/Banner";
import carouselData from "../data/carousel.json";
import featuredData from '../data/featured.json';

const Home = () => {
    return (
        <>
            <PageTitle>Home</PageTitle>
            <Carousel data={carouselData}/>
            <Welcome title="Welcome"
                     subTitle={`Welcome to\nArch Studio`}
                     description={`We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.\n
Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.\n
We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.`}
                     bgImage={["home", "image-welcome.jpg"]}
                  layout="align-center"
            />
            <Banner title="Small team, big ideas" bgImage={["home", "image-small-team.jpg"]} btnText="About Us" btnLink="about"/>
            <Featured data={featuredData}/>
        </>
    );
};

export default Home;