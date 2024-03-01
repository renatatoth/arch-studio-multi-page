import PageTitle from "../components/ui/PageTitle";
import Hero from "../components/layout/Hero";

const Contact = () => {
    return (
        <>
            <PageTitle>Contact</PageTitle>
            <Hero
                title="Contact"
                subTitle="Tell us about your project"
                description="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
                imgSrcFolder="contact"
            />
        </>
    );
};

export default Contact;