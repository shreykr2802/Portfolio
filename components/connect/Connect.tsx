import Button from "../button/Button";
import HeadingText from "../heading/HeadingText";
import classes from "./Connect.module.scss";

const Connect = () => {
    return (
        <div className={classes['connect-container']}>
            <HeadingText type="white" text="Connect with me?" />
            <div className={classes['connect-text-button']}>
                <p className={classes['connect-text']}>
                    Want to improve your website, product<br />
                    or create a new App for improve your client interactions? <br />
                    Or thinking to colaborate and acheive something beautiful? <br />
                </p>
                <Button type="red" text="Connect" />
            </div>
        </div>
    );
};

export default Connect;