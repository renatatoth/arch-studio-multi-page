import classes from "./Map.module.scss";
import mapImage from "../../assets/contact/desktop/image-map.png";
import mapImageTablet from "../../assets/contact/tablet/image-map.png";
import mapImageMobile from "../../assets/contact/mobile/image-map.png";


const Map = () => {
    return (
        <section className={classes.map}>
            <picture>
                <source media="(max-width: 414px)" srcSet={mapImageMobile}/>
                <source media="(max-width: 916px)" srcSet={mapImageTablet}/>
                <img src={mapImage} alt="Map"/>
            </picture>
        </section>
    );
};

export default Map;