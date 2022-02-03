import Image from "next/image";
import Link from "next/link";
import Tags from "../tags/Tags";
import classes from "./BlogsSmallInfoList.module.scss";

const BlogsSmallInfoList = () => {

    const blogs = [
        {
            title: "Lorem Ipsum 1",
            content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            uploaded: "1 day ago",
            tags: ["technology", "travel"],
            id: 1
        },
        {
            title: "Lorem Ipsum 2",
            content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            uploaded: "2 day ago",
            tags: ["technology", "personal"],
            id: 2
        },
        {
            title: "Lorem Ipsum 3",
            content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            uploaded: "3 day ago",
            tags: ["technology", "light reading"],
            id: 3
        },
        {
            title: "Lorem Ipsum 4",
            content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            uploaded: "4 day ago",
            tags: ["technology", "travel"],
            id: 4
        },
        {
            title: "Lorem Ipsum 5",
            content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            uploaded: "5 day ago",
            tags: ["reading", "book"],
            id: 5
        }
    ]
    return (
        <div className={classes['blog-list-section']}>
            {blogs.map(blog => {
                return (
                    <Link href={`/blog/${blog.id}`}>
                        <div className={classes['small-blog-container']} key={blog.id} onClick={() => console.log(blog)}>
                            <div className={classes['small-blog-info']}>
                                <p><span className={classes['blog-title']}>{blog.title}</span> - <small className={classes['days-posted']}><i>{blog.uploaded}</i></small></p>
                                <p className={classes['blog-small-content']}>{blog.content}</p>
                                <Tags tags={blog.tags} />
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