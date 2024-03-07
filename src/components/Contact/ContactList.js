import TextBlock from "../UI/TextBlock";
import ContactCard from "./ContactCard";
import classes from "./ContactList.module.scss";

const ContactList = ({data}) => {
    return (
        <section className={classes.wrapper}>
            <div className={classes.title}>
                <TextBlock title="Contact Details" hasLine={true}/>
            </div>
            <div className={classes.contacts}>
                {data.map(c => <ContactCard key={c.id} contact={c}/>)}
            </div>
        </section>
    );
};

export default ContactList;