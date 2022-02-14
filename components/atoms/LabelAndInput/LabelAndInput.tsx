import classes from "./LabelAndInput.module.scss";

const LabelAndInput = ({ name, type, value, setValue }: { name: string, type: string, value: any, setValue: any }) => {

    return <div className={classes['input-label-section']}>
        <label className={classes['section-input-label']}>{name}</label>
        {
            type === "file" ? (<input type={type} onChange={e => setValue(e.target.files)} className={classes['section-input-value']} />)
                : (<input type={type} value={value} onChange={e => setValue(e.target.value)} className={classes['section-input-value']} />)
        }
    </div>
}

export default LabelAndInput;