import {useState, useEffect, useRef} from "react";
import Button from "./Button";
import classes from './Carousel.module.scss';
import CarouselButton from "./CarouselButton";

const Carousel = ({data}) => {
    const [currSlide, setCurrSlide] = useState(0);
    const [auto, setAuto] = useState(true);
    const timerRef = useRef(null);

    useEffect(() => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            if (auto) {
                setCurrSlide(curr => curr === data.length - 1 ? 0 : curr + 1);
            }
        }, 5000);
        return ()=>clearTimeout(timerRef.current);
    }, [auto, currSlide, data]);

    const selectSlideHandler = (slideNum) => {
        setCurrSlide(slideNum );
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.imgContainer}>
                <img src={require(`../../assets/home/desktop/${data[currSlide].url}`)} alt={data[currSlide].title}/>
            </div>
            <div className={classes.textContainer}>
                <div>
                    <h1>{data[currSlide].title}</h1>
                    <p>{data[currSlide].description}</p>
                </div>
                <Button to="portfolio">See Our Portfolio</Button>
            </div>
            <div className={classes.btnContainer}>
                {data.map(e => <CarouselButton key={e.id} btnNumber={e.id} currSlide={currSlide} onSelectSlide={selectSlideHandler}/>)}
            </div>
        </div>
    );
};

export default Carousel;