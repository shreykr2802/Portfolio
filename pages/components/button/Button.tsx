import classes from './Button.module.scss';

const Button = ({ type, text }: { type: String, text: String }) => {
    return (
        <>
            {type === 'red' ? (
                <>
                    <button className={classes['button-red']}>
                        <span className={classes['button-text']}>{text}</span>
                    </button>
                </>
            ) : (
                <>
                </>
            )}
        </>
    )
};

export default Button;