import BlogCategories from "../blogCategories/BlogCategories";
import BlogsSmallInfoList from "../blogsSmallInfoList/BlogsSmallInfoList";
import classes from "./BlogsContainer.module.scss";

const BlogsContainer = () => {
    return (
        <div className={classes['blog-container']}>
            <BlogsSmallInfoList />
            <BlogCategories />
        </div>
    );
}

export default BlogsContainer;