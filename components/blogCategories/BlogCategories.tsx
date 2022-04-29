import Image from "next/image";
import useSelector from "../../utils/useSelector";
import classes from "./BlogCategories.module.scss";

const BlogCategories = () => {

    const categories = useSelector(state => state.tags.tags);

    return (
        <>
            <div className={classes['blog-categories']}>
                {
                    categories.map((category) => (
                        <div className={classes['category-box']} key={category.id}>
                            <p className={classes['category-name']}>{category.name}</p>
                            <div className={classes['category-image-box']}>
                                <Image src={category.data} layout="fill" className={classes['category-image']} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default BlogCategories;