import classes from "./LabelAndInput.module.scss";

const LabelAndInput = ({ name, type, value, setValue }: { name: string, type: string, value: any, setValue: any }) => {

    const renderInput = () => {
        if (type === "file") {
            return <input type={type} onChange={e => setValue(e.target.files)} className={classes['section-input-value']} />
        } else if (type === "text") {
            return <input type={type} value={value} onChange={e => setValue(e.target.value)} className={classes['section-input-value']} />
        } else if (type === "textarea") {
            return <textarea value={value} onChange={e => setValue(e.target.value)} className={classes['section-input-textarea-value']} />
        }
    }

    return <div className={classes['input-label-section']}>
        <label className={classes['section-input-label']}>{name}</label>
        {renderInput()}
    </div>
}

export default LabelAndInput;