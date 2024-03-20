import Button from "../UI/Button";
import classes from "./ContactCard.module.scss";

const ContactCard = ({contact}) => {
    return (
        <div className={classes.card}>
            <div>
                <p className={classes.name}>{contact.name}</p>
                <p className={classes.details}>
                    Mail :&ensp;{contact.email}<br/>
                    Address :&ensp;{contact.address}<br/>
                    Phone :&ensp;{contact.phone}<br/>
                </p>
            </div>
            <Button to="/" btnStyle="secondary">View on Map</Button>
        </div>
    );
};

export default ContactCard;