import classes from './PortfolioCard.module.scss';

const PortfolioCard = ({projectData, showNumber}) => {
    return (
        <div className={classes.card}>
            <div className={classes.overlay}></div>
            <div className={classes.imgContainer}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={require(`../../assets/portfolio/tablet/${projectData.imgUrl}`)}/>
                    <img src={require(`../../assets/portfolio/desktop/${projectData.imgUrl}`)} alt={projectData.title}/>
                </picture>
            </div>
            <div className={classes.textContainer}>
                <h3 className={classes.projectTitle}>{projectData.title}</h3>
                <p className={classes.projectDate}>{projectData.date}</p>
            </div>
            {showNumber && <span className={classes.projectNumber}>{projectData.id}</span>}
        </div>
    );
};

export default PortfolioCard;