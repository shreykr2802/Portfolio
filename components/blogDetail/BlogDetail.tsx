import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatDateTime } from "../../utils/dateTimeUtil";
import classes from "./BlogDetail.module.scss";

const BlogDetail = ({ blog }: any) => {

    const [content, setContent] = useState("");

    useEffect(() => {
        let newContent = blog?.content;
        for (let i = 0; i < blog?.images?.length; i++) {
            newContent = newContent.replace(`{{image ${i + 2}}}`, `<br/>
            <img src=${blog?.images[i]?.data} layout="fill" objectFit="cover"/>`);
        }
        setContent(newContent);
    }, [blog.images])

    return (
        <div className={classes['blog-detail-section']}>
            <Link href="/blog">
                <div className={classes['back-section']}>
                    <Icon icon="akar-icons:arrow-left" fontSize={20} color="#9C9C9C" />
                    <small className={classes['back-text']}><i>Back to Blog list</i></small>
                </div>
            </Link>
            <div className={classes['main-text-intro']}>
                <p><span className={classes['blog-title']}>{blog.title}</span> - <small className={classes['days-posted']}><i>{blog.read_time} min read</i></small></p>
                <p><small className={classes['days-posted']}>{formatDateTime(blog.updated_on)}</small></p>
            </div>
            <div>
                {blog?.mainImage?.data && <div className={classes['blog-detail-main-image']} >
                    <Image src={blog?.mainImage?.data} layout="fill" />
                </div>}
                <div className={classes['blog-detail-main-text']} dangerouslySetInnerHTML={{ __html: content }}>
                </div>
            </div>
        </div>
    )

};

export default BlogDetail;