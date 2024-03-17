import PageTitle from "../components/UI/PageTitle";
import Hero from "../components/Layout/Hero";
import ContactList from "../components/Contact/ContactList";
import Map from "../components/UI/Map";
import ContactForm from "../components/Contact/ContactForm";
import contactData from "../data/offices.json";

const Contact = () => {
    return (
        <>
            <PageTitle>Contact</PageTitle>
            <Hero
                title="Contact"
                subTitle="Tell us about your project"
                description="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
                bgImage={["contact", "image-hero.jpg"]}
                layout="align-right"
            />
            <ContactList data={contactData}/>
            <Map/>
            <ContactForm/>
        </>
    );
};

export default Contact;