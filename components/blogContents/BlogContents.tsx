import Header from "../header/Header";
import classes from "../../styles/Home.module.scss";
import BlogsContainer from "../blogsContainer/BlogsContainer";

const BlogContents = () => {

    return (
        <>
            <Header />
            <main className={classes['main-section']}>
                <div className={classes['main-text-intro']}>
                    <p>Welcome to my Blog. Find whatever suits you best!</p>
                </div>
                <BlogsContainer />
            </main>
        </>
    )
};

export default BlogContents;