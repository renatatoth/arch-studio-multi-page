import classes from "./PageTitle.module.scss";

const PageTitle = ({children}) => {
    return (
        <span className={classes.pageTitle}>{children}</span>
    );
};

export default PageTitle;