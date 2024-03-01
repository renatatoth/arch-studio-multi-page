import classes from './CarouselButton.module.scss';

const CarouselButton = ({btnNumber, currSlide, onSelectSlide}) => {
    return (
        <button className={`${classes.btn} ${btnNumber === currSlide + 1 ? classes.active : ''}`} onClick={() => onSelectSlide(btnNumber)}>
            {btnNumber < 10 ? `0${btnNumber}` : btnNumber}
        </button>
    );
};

export default CarouselButton;