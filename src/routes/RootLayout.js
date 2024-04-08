import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ScrollToTop from "../helpers/ScrollToTop";
import classes from './RootLayout.module.scss';
import useWindowWidth from "../hooks/useWindowWidth";

const RootLayout = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const viewportWidth = useWindowWidth();

    useEffect(() => {
        // show or hide menu when resizing window
        if (viewportWidth <= 375) setMenuVisible(false);
        else setMenuVisible(true);
    }, [viewportWidth]);

    const handleMenuToggle = () => {
        setMenuVisible(vis => !vis);
    };

    const handleMenuClose = () => {
        if (viewportWidth <= 375) setMenuVisible(false);
    };

    return (
        <div className={classes.wrapper}>
            <Header menuVisible={menuVisible} onToggleMenu={handleMenuToggle} onCloseMenu={handleMenuClose} />
            {menuVisible && <div className={classes.modalOverlay}></div>}
            <main className={classes.main}>
                <ScrollToTop/>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;