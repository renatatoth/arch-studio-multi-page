import PageTitle from "../components/UI/PageTitle";
import Hero from "../components/Layout/Hero";
import TextBlockWithImg from "../components/UI/TextBlockWithImg";
import Leaders from "../components/Leaders/Leaders";
import leaderData from '../data/leaders.json';

const About = () => {
    return (
        <>
            <PageTitle>About us</PageTitle>
            <Hero
                title="About"
                subTitle="Your team of professionals"
                description="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
                bgImage={["about", "image-hero.jpg"]}
                layout="align-right"
            />
            <TextBlockWithImg title={`Our\nHeritage`} image={['about', 'image-heritage.jpg']}>
                {`Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.\n
Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.\n
Our small team of world-class professionals provides input on every project.`}
            </TextBlockWithImg>
            <Leaders data={leaderData}/>
        </>
    );
};

export default About;