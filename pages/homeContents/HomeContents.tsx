import About from "../../components/about/About";
import Contents from "../../components/contents/Contents";
import Header from "../../components/header/Header";
import classes from "../../styles/Home.module.scss";
import WhatIDo from "../../components/whatIDo/WhatIDo";
import Toolkit from "../../components/toolkit/Toolkit";
import Connect from "../../components/connect/Connect";
import SocialMediaFooter from "../../components/socialMediaFooter/SocialMediaFooter";
import ContactForm from "../../components/contactForm/ContactForm";
import useSelector from "../../utils/useSelector";

const HomeContents = () => {

    const showContactForm = useSelector(state => state.app.showContactForm);

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
            {showContactForm && <ContactForm />}
        </>
    )
};

export default HomeContents;