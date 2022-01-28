import classes from "./Heading.module.scss";

const HeadingText = ({ type, text }: { type: String, text: String }) => {
    return (
        <p className={`${classes['heading-text']} ${type === 'red' ? classes['red'] : classes['white']}`}>
            {text}
        </p>
    )
};

export default HeadingText;