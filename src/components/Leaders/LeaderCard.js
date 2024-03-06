import classes from './LeaderCard.module.scss';

const LeaderCard = ({leader}) => {
    return (
        <div className={classes.card}>
            <div className={classes.imgContainer}>
                <img src={require(`../../assets/about/desktop/${leader.img}`)} alt={leader.name}/>
            </div>
            <h3 className={classes.name}>{leader.name}</h3>
            <p className={classes.jobTitle}>{leader.jobTitle}</p>
        </div>
    );
};

export default LeaderCard;