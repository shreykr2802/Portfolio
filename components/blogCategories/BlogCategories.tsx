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
                            <Image src={"/category.jpeg"} width={100} height={100} layout="responsive" className={classes['category-image']} />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default BlogCategories;