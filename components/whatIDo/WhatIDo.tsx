import HeadingText from '../heading/HeadingText';
import classes from './WhatIDo.module.scss';

const WhatIDo = () => {
    return (
        <div className={classes['what-i-do-container']}>
            <HeadingText type="white" text="What I Do?" />
            <div className={classes['what-i-do-row']}>
                <div className={classes['what-i-do-col']}>
                    <div className={`${classes['what-i-do-design']} ${classes['min-width-design']}`}>
                        <HeadingText type="red" text="Design" className={classes['text-center']} />
                        <p className={classes['contents-text']}>
                            I like design and create interactive UI for people satisfaction.
                            <br />
                            <span className={classes['small-heading']}>Tools</span> <br />
                            <span className={classes['text-categories']}>Figma, Pen and Paper</span>
                        </p>
                    </div>
                    <div className={`${classes['what-i-do-design']} ${classes['min-width-design']}`}>
                        <HeadingText type="red" text="Mobile Development" className={classes['text-center']} />
                        <p className={classes['contents-text']}>
                            As much as I like to be a web developer, I do have skills for Mobile App Development too.
                            <br />
                            <span className={classes['small-heading']}>Framework</span> <br />
                            <span className={classes['text-categories']}>React-Native, Ionic</span>
                        </p>
                    </div>
                </div>
                <div className={classes['what-i-do-design']}>
                    <HeadingText type="red" text="Front-end Development" className={classes['text-center']} />
                    <p className={classes['contents-text']}>
                        I like design, develope, provide solutions as a Front-end Developer.
                        <br />
                        <span className={classes['small-heading']}>Languages</span> <br />
                        <span className={classes['text-categories']}>Javascript, Java</span>
                        <br />
                        <span className={classes['small-heading']}>Frameworks</span> <br />
                        <span className={classes['text-categories']}>React, Tailwind CSS, Materialize, Express, Jest, Redux, Typescript, Redux Toolkit, Redux Saga</span>
                        <br />
                        <span className={classes['small-heading']}>Technologies</span> <br />
                        <span className={classes['text-categories']}>HTML, CSS, SQL, NoSql, Node</span>
                        <br />
                        <span className={classes['small-heading']}>Version Control</span> <br />
                        <span className={classes['text-categories']}>Git, SVN</span>
                    </p>
                </div>
            </div>
        </div >
    )
};

export default WhatIDo;