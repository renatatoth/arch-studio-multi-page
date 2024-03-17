import classes from './LeaderCard.module.scss';
import linkedInLogo from "../../assets/icons/icon-linkedin.svg";
import twitterLogo from "../../assets/icons/icon-twitter.svg";

const LeaderCard = ({leader}) => {
    return (
        <div className={classes.card}>
            <div className={classes.imgContainer}>
                <img src={require(`../../assets/about/desktop/${leader.img}`)} alt={leader.name}/>
                <div className={classes.linksContainer}>
                    <a href={leader.linkedIn}><img className={classes.logo} src={linkedInLogo} alt="LinkedIn"/></a>
                    <a href={leader.twitter}><img className={classes.logo} src={twitterLogo} alt="Twitter"/></a>
                </div>
            </div>
            <h3 className={classes.name}>{leader.name}</h3>
            <p className={classes.jobTitle}>{leader.jobTitle}</p>
        </div>
    );
};

export default LeaderCard;