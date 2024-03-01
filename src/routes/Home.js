import PageTitle from "../components/ui/PageTitle";
import Carousel from "../components/ui/Carousel";
import TextBlock from "../components/layout/TextBlock";
import Button from "../components/ui/Button";
import carouselData from "../data/carousel.json";
import classes from './Home.module.scss';

const Home = () => {
    return (
        <>
            <PageTitle>Home</PageTitle>
            <Carousel data={carouselData}/>
            <section className={classes.welcome}>
                <div className={classes.textContainer}>
                    <TextBlock title="Welcome to Arch Studio" hasLine={false}>
                        {`We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.\n
Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.\n
We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.`}
                    </TextBlock>
                </div>
                <div className={classes.imgContainer}>
                    <img src={require('../assets/home/desktop/image-welcome.jpg')} alt="Welcome"/>
                </div>
            </section>
            <section className={classes.about}>
                <div className={classes.imgContainer}>
                    <img src={require('../assets/home/desktop/image-small-team.jpg')} alt="Small team"/>
                </div>
                <div className={classes.textContainer}>
                    <h2>Small team, big ideas</h2>
                    <Button to="about">About Us</Button>
                </div>
            </section>

        </>
    );
};

export default Home;