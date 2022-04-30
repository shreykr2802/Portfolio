import useSelector from "../../utils/useSelector";
import BlogCategories from "../blogCategories/BlogCategories";
import BlogsSmallInfoList from "../blogsSmallInfoList/BlogsSmallInfoList";
import Loading from "../loading/Loading";
import classes from "./BlogsContainer.module.scss";

const BlogsContainer = () => {

    const blogsLoading = useSelector(state => state.blogs.loading);
    const tagsLoading = useSelector(state => state.tags.loading)

    return (
        <div className={classes['blog-container']}>
            {(!blogsLoading && !tagsLoading) ? (
                <>
                    <BlogsSmallInfoList />
                    <BlogCategories />
                </>
            ) : (
                <Loading />
            )}

        </div>
    );
}

export default BlogsContainer;