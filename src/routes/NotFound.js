import PageTitle from "../components/ui/PageTitle";
import classes from './NotFound.module.scss';

const NotFound = () => {
    return (
        <>
            <PageTitle>{''}</PageTitle>
            <div className={classes.notFound}>Page not found. The page you are looking for is unavailable.</div>
        </>
    );
};

export default NotFound;