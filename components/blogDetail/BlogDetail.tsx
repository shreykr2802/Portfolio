import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatDateTime } from "../../utils/dateTimeUtil";
import classes from "./BlogDetail.module.scss";

const BlogDetail = ({ blog }: any) => {

    const [displayContent, setDisplayContent] = useState<string>("");

    useEffect(() => {
        let oriContent = blog?.content;
        for (let i = 0; i < blog?.images?.length; i++) {
            oriContent = oriContent.replace(`{{image ${i + 2}}}`, `<br/><div style='height: 25rem; overflow: hidden; text-align: center;'>
            <Image src=${blog?.images[i]?.data} height={100} width={100} layout="fill" objectFit="cover" />
        </div>`);
        }
        setDisplayContent(oriContent);
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
                    <Image src={blog?.mainImage?.data} height={100} width={100} layout="fill" objectFit="cover" />
                </div>}
                <div className={classes['blog-detail-main-text']} dangerouslySetInnerHTML={{ __html: displayContent }}>
                </div>
            </div>
        </div>
    )

};

export default BlogDetail;