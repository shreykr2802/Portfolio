import classes from "./Tags.module.scss";

const Tags = ({ tags, time }: { tags: string[], time: string }) => {
    return (
        <div className={classes['tags-section']}>
            {tags.map(tag => (<div className={classes['tags-block']} key={tag}>
                <p className={classes['tag-name']}>{tag}</p>
            </div>))}
            <small className={classes['time-read']}>{time} min read</small>
        </div>
    )
};

export default Tags;