import classes from "./Tags.module.scss";

const Tags = ({ tags }: { tags: string[] }) => {
    return (
        <div className={classes['tags-section']}>
            {tags.map(tag => (<div className={classes['tags-block']} key={tag}>
                <p className={classes['tag-name']}>{tag}</p>
            </div>))}
        </div>
    )
};

export default Tags;