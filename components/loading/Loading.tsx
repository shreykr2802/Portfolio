import classes from "./Loading.module.scss";

const Loading = () => {
    return <div className={classes["loading-container"]}><div className={classes['loading-heart']}><div></div></div></div>
}

export default Loading;