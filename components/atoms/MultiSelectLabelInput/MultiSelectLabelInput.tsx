import classes from "./MultiSelectLabelInput.module.scss";
import Multiselect from 'multiselect-react-dropdown';

const MultiSelectLabelInput = ({ tags, selectedValue, onSelect, onRemove, name }: { tags: any[], selectedValue: any[], onSelect: any, onRemove: any, name: string }) => {

    return (
        <div className={classes['input-label-section']}>
            <label className={classes['section-input-label']}>{name}</label>
            <Multiselect
                options={tags.map(tag => ({ name: tag.name, id: tag.id }))}
                selectedValues={selectedValue}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue="name"
                className={classes['section-input-value']}
            />
        </div>
    )
}

export default MultiSelectLabelInput;