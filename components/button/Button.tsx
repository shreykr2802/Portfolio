import { MouseEventHandler } from 'react';
import classes from './Button.module.scss';

const Button = ({ type, text, onClick }: { type: string, text: string, onClick: MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <>
            {type === 'red' ? (
                <>
                    <button className={classes['button-red']} onClick={onClick}>
                        <span className={classes['button-text']}>{text}</span>
                    </button>
                </>
            ) : (
                <>
                    <button className={classes['button-other']} onClick={onClick}>
                        <span className={classes['button-other-text']}>{text}</span>
                    </button>
                </>
            )}
        </>
    )
};

export default Button;