import HeadingText from "../heading/HeadingText";
import classes from "./About.module.scss";

const About = () => {
    return (
        <div className={classes['about-me-container']} id="AboutSection">
            <HeadingText type="red" text="About Me?" />
            <p className={classes['about-me-text']}>
                I entered the world of programming at an early age starting with C++, and never looked back. Made my hands dirty in all languages.
                As a person, I love challenges and pushing my mind to great extends.
                A smart worker for the solutions.
                I grab things quickly. My current love are React, Tailwind, Styled Components and React Native. Tell me your problem and be sure to except a solution from me!
            </p>
        </div>
    )
};

export default About