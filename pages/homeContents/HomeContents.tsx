import About from "../components/about/About";
import Contents from "../components/contents/Contents";
import Header from "../components/header/Header";
import classes from "../../styles/Home.module.scss";
import WhatIDo from "../components/whatIDo/WhatIDo";

const HomeContents = () => {
    return (
        <>
            <Header />
            <main className={classes['main-section']}>
                <Contents />
                <About />
                <WhatIDo />
            </main>
        </>
    )
};

export default HomeContents;