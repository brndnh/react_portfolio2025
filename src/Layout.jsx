import React from "react";
import { Outlet } from "react-router";
import Header from "./global/Header";
import Footer from "./global/Footer";
import ScrollToTop from './components/ScrollTop.jsx';

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <ScrollToTop />
            </main>
            <Footer />
        </>
    );
}

export default Layout;