import Image from "next/image";
import Link from "next/link";
import { formatDateTime } from "../../utils/dateTimeUtil";
import useSelector from "../../utils/useSelector";
import Tags from "../tags/Tags";
import classes from "./BlogsSmallInfoList.module.scss";

const BlogsSmallInfoList = () => {

    const blogs = useSelector(state => state.blogs.blogs);

    return (
        <div className={classes['blog-list-section']}>
            {blogs.map(blog => {
                return (
                    <Link href={`/blog/${blog.id}`} key={blog.id}>
                        <div className={classes['small-blog-container']}>
                            <div className={classes['small-blog-info']}>
                                <p><span className={classes['blog-title']}>{blog.title}</span> - <small className={classes['days-posted']}><i>{formatDateTime(blog.updated_on)}</i></small></p>
                                <p className={classes['blog-small-content']}>{blog.short_intro}</p>
                                <Tags tags={blog.tags} time={blog.read_time} />
                            </div>
                            <div className={classes['image-info']}>
                                <Image src="/temp.jpeg" alt="Shrey Kumar" height={200} width={300} layout="intrinsic" />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
};

export default BlogsSmallInfoList;