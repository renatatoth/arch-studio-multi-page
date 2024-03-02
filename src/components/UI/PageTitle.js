import classes from "./PageTitle.module.scss";

const PageTitle = ({children}) => {
    return (
        <aside className={classes.pageTitle}>{children}</aside>
    );
};

export default PageTitle;