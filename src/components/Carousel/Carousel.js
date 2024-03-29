import {useState, useEffect, useRef} from "react";
import Button from "../UI/Button";
import CarouselButton from "./CarouselButton";
import useWindowWidth from "../../hooks/useWindowWidth";
import classes from './Carousel.module.scss';

const Carousel = ({data}) => {
    const [currSlide, setCurrSlide] = useState(0);
    const [auto, setAuto] = useState(true);
    const timerRef = useRef(null);
    const viewportWidth = useWindowWidth();

    useEffect(() => {
        if (viewportWidth > 768) {
            // play carousel only on desktop viewport
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => {
                if (auto) {
                    setCurrSlide(curr => curr === data.length - 1 ? 0 : curr + 1);
                }
            }, 5000);
        } else {
            // static component on tablet and mobile
            setCurrSlide(0);
        }

        return () => clearTimeout(timerRef.current);
    }, [auto, currSlide, data, viewportWidth]);

    const selectSlideHandler = (slideNum) => {
        setCurrSlide(slideNum - 1);
    };

    return (
        <section className={classes.wrapper}>
            <div className={classes.imgContainer}>
                <picture>
                    <source media="(max-width: 375px)" srcSet={require(`../../assets/home/mobile/${data[currSlide].imgUrl}`)}/>
                    <source media="(max-width: 768px)" srcSet={require(`../../assets/home/tablet/${data[currSlide].imgUrl}`)}/>
                    <img src={require(`../../assets/home/desktop/${data[currSlide].imgUrl}`)} alt={data[currSlide].title}/>
                </picture>
            </div>
            <div className={classes.textContainer}>
                <div>
                <h1>{data[currSlide].title}</h1>
                    <p>{data[currSlide].description}</p>
                </div>
                <Button to="portfolio">See Our Portfolio</Button>
            </div>
            {viewportWidth > 768 &&
                <div className={classes.btnContainer}>
                    {data.map(e => <CarouselButton key={e.id} btnNumber={e.id} currSlide={currSlide} onSelectSlide={selectSlideHandler}/>)}
                </div>}
        </section>
    );
};

export default Carousel;