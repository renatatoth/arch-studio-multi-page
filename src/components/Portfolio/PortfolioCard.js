import classes from './PortfolioCard.module.scss';

const PortfolioCard = ({projectData}) => {
    return (
        <div className={classes.card} style={{backgroundImage: `url(${require(`../../assets/portfolio/desktop/${projectData.imgUrl}`)}`}}>
            <div className={classes.overlay}></div>
            <div className={classes.textWrapper}>
                <h3 className={classes.projectTitle}>{projectData.title}</h3>
                <p className={classes.projectDate}>{projectData.date}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;