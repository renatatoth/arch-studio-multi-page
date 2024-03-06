import PageTitle from "../components/UI/PageTitle";
import Hero from "../components/Layout/Hero";
import heroImage from '../assets/contact/desktop/image-hero.jpg';

const Contact = () => {
    return (
        <>
            <PageTitle>Contact</PageTitle>
            <Hero
                title="Contact"
                subTitle="Tell us about your project"
                description="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
                bgImage={heroImage}
                layout="align-right"
            />
        </>
    );
};

export default Contact;