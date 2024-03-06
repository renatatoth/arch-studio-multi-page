import React from 'react';
import TextBlock from "./TextBlock";
import classes from "./TextBlockWithImg.module.scss";

const TextBlockWithImg = ({title, img, children}) => {
    return (
        <section className={classes.wrapper}>
            <div className={classes.textContainer}>
                <TextBlock title={title} hasLine={true}>{children}</TextBlock>
            </div>
            <div className={classes.imgContainer}>
                <img src={img} alt={title}/>
            </div>
        </section>
    );
};

export default TextBlockWithImg;