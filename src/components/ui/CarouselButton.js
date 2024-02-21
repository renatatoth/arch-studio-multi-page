import classes from './CarouselButton.module.scss';

const CarouselButton = ({btnNumber, currSlide, onSelectSlide}) => {
    return (
        <button className={`${classes.btn} ${btnNumber === currSlide ? classes.active : ''}`} onClick={() => onSelectSlide(btnNumber)}>
            {btnNumber < 10 ? `0${btnNumber + 1}` : btnNumber + 1}
        </button>
    );
};

export default CarouselButton;