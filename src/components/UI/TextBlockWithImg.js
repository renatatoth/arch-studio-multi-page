import React from 'react';
import TextBlock from "./TextBlock";
import classes from "./TextBlockWithImg.module.scss";

const TextBlockWithImg = ({title, image, children}) => {
    const [imgFolder, imgUrl] = image;

    return (
        <section className={classes.wrapper}>
            <div className={classes.textContainer}>
                <TextBlock title={title} hasDivider={true}>{children}</TextBlock>
            </div>
            <div className={classes.imgContainer}>
                <img src={require(`../../assets/${imgFolder}/desktop/${imgUrl}`)} alt={title}/>
            </div>
        </section>
    );
};

export default TextBlockWithImg;