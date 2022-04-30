import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatDateTime } from "../../utils/dateTimeUtil";
import classes from "./BlogDetail.module.scss";

const BlogDetail = ({ blog }: any) => {

    useEffect(() => {
        let newContent = blog?.content;
        let lastIndex = 0;
        const mainDiv = document.createElement("div");
        for (let i = 0; i < blog?.images?.length; i++) {
            const text = newContent.slice(lastIndex, newContent.indexOf(`{{image ${i + 2}}}`));
            lastIndex = newContent.indexOf(`{{image ${i + 2}}}`) + `{{image ${i + 2}}}`.length;
            const p = document.createElement("p");
            const textNode = document.createTextNode(text);
            p.appendChild(textNode);
            mainDiv.appendChild(p);
            const br = document.createElement("br");
            mainDiv.appendChild(br);
            const img = document.createElement("img");
            img.setAttribute("src", blog?.images[i]?.data);
            img.classList.add(classes["rest-image-prop"]);
            mainDiv.appendChild(img);
            mainDiv.appendChild(br);
        }
        const el = document.getElementById("__blog_detail");
        while (el?.firstChild) el.removeChild(el.firstChild);
        document.getElementById("__blog_detail")?.appendChild(mainDiv);
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
                <div className={classes['blog-detail-main-text']} id="__blog_detail">
                </div>
            </div>
        </div>
    )

};

export default BlogDetail;