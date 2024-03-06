import LeaderCard from "./LeaderCard";
import TextBlock from "../UI/TextBlock";
import classes from './Leaders.module.scss';

const Leaders = ({data}) => {
    return (
        <section className={classes.wrapper}>
            <div className={classes.title}>
                <TextBlock title="The Leaders" />
            </div>
            <div className={classes.leadersContainer}>
                {data.map(l => <LeaderCard key={l.id} leader={l}/>)}
            </div>
        </section>
    );
};

export default Leaders;