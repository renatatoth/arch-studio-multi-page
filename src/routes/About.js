import PageTitle from "../components/ui/PageTitle";
import Hero from "../components/layout/Hero";

const About = () => {
    return (
        <>
            <PageTitle>About us</PageTitle>
            <Hero
                title="About"
                subTitle="Your team of professionals"
                description="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
                imgSrcFolder={'about'}
            />
        </>
    );
};

export default About;