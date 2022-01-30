import About from "../about/About";
import Contents from "../contents/Contents";
import Header from "../header/Header";
import classes from "../../../styles/Home.module.scss";
import WhatIDo from "../whatIDo/WhatIDo";
import Toolkit from "../toolkit/Toolkit";
import Connect from "../connect/Connect";
import SocialMediaFooter from "../socialMediaFooter/SocialMediaFooter";
import ContactForm from "../contactForm/ContactForm";
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