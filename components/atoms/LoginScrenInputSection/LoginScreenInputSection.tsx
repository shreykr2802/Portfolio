import classes from "./LoginScreenInputSection.module.scss";

const LoginScreenInput = ({ name, inputType, value, setValue }: { name: string, inputType: string, value: string, setValue: Function }) => {
    return (
        <div className={classes['user-input-section']}>
            <p className={classes['section-input-label']}>{name}: </p>
            <input type={inputType} value={value} onChange={e => setValue(e.target.value)} className={classes['section-input-value']} />
        </div>
    )
}
export default LoginScreenInput;