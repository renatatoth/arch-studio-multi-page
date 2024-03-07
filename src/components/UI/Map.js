import classes from "./Map.module.scss";
import mapImage from "../../assets/contact/desktop/image-map.png";

const Map = () => {
    return (
        <section className={classes.map}>
            <img src={mapImage} alt="Map"/>
        </section>
    );
};

export default Map;