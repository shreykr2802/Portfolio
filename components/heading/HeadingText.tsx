import classes from "./Heading.module.scss";

const HeadingText = ({ type, text, className = "" }: { type: String, text: String, className?: String }) => {
    return (
        <p className={`${classes['heading-text']} ${type === 'red' ? classes['red'] : classes['white']} ${className}`}>
            {text}
        </p>
    )
};

export default HeadingText;