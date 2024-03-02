import {Outlet} from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import classes from './RootLayout.module.scss';

const RootLayout = () => {
    return (
        <div className={classes.wrapper}>
            <Header/>
            <main className={classes.main}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;