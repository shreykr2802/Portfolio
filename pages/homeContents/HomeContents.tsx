import About from "../components/about/About";
import Contents from "../components/contents/Contents";
import Header from "../components/header/Header";
import classes from "../../styles/Home.module.scss";

const HomeContents = () => {
    return (
        <>
            <Header />
            <main className={classes['main-section']}>
                <Contents />
                <About />
            </main>
        </>
    )
};

export default HomeContents;