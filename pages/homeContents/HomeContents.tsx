import About from "../../components/about/About";
import Contents from "../../components/contents/Contents";
import Header from "../../components/header/Header";
import classes from "../../styles/Home.module.scss";
import WhatIDo from "../../components/whatIDo/WhatIDo";
import Toolkit from "../../components/toolkit/Toolkit";
import Connect from "../../components/connect/Connect";
import SocialMediaFooter from "../../components/socialMediaFooter/SocialMediaFooter";

const HomeContents = () => {
    return (
        <>
            <Header />
            <main className={classes['main-section']}>
                <Contents />
                <About />
                <WhatIDo />
                <Toolkit />
                <Connect />
            </main>
            <SocialMediaFooter />
        </>
    )
};

export default HomeContents;