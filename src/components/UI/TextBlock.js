import classes from './TextBlock.module.scss';

const TextBlock = ({title, hasDivider, children}) => {
    return (
        <div className={classes.textBlock}>
            {hasDivider && <span className={classes.line}></span>}
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.text}>{children}</p>
        </div>
    );
};

export default TextBlock;