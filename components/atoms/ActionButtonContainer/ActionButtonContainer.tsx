import classes from "./ActionButtonContainer.module.scss";

const ActionButtonContainer = (props: any) => {
    return <div className={classes['action-button-container']}>{props.children}</div>
}

export default ActionButtonContainer;