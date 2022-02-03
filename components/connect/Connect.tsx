import { useDispatch } from "react-redux";
import { setShowContactForm } from "../../redux/slices/appSlice";
import Button from "../button/Button";
import HeadingText from "../heading/HeadingText";
import classes from "./Connect.module.scss";

const Connect = () => {

    const dispatch = useDispatch();

    const showContactForm = () => {
        dispatch(setShowContactForm());
    }

    return (
        <div className={classes['connect-container']} id="ContactSection">
            <HeadingText type="white" text="Connect with me?" />
            <div className={classes['connect-text-button']}>
                <p className={classes['connect-text']}>
                    Want to improve your website, product<br />
                    or create a new App for improve your client interactions? <br />
                    Or thinking to colaborate and acheive something beautiful? <br />
                </p>
                <Button type="red" text="Connect" onClick={showContactForm} />
            </div>
        </div>
    );
};

export default Connect;