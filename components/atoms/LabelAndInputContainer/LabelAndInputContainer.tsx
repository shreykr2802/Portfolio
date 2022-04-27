import classes from "./LabelAndInputContainer.module.scss";

const LabelAndInputContainer = (props: any) => {
    return <div className={classes['label-input-container']}>{props.children}</div>
}

export default LabelAndInputContainer;