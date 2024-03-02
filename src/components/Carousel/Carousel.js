import {useState, useEffect, useRef} from "react";
import Button from "../UI/Button";
import CarouselButton from "./CarouselButton";
import classes from './Carousel.module.scss';

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
        setCurrSlide(slideNum - 1);
    };

    return (
        <section className={classes.wrapper}>
            <div className={classes.imgContainer}>
                <img src={require(`../../assets/home/desktop/${data[currSlide].imgUrl}`)} alt={data[currSlide].title}/>
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
        </section>
    );
};

export default Carousel;