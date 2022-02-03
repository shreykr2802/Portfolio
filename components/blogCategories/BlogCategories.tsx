import Image from "next/image";
import Button from "../button/Button";
import classes from "./BlogCategories.module.scss";

const BlogCategories = () => {

    const categories = [
        {
            id: 1,
            name: "Technology",
            src: "/category.jpeg"
        },
        {
            id: 2,
            name: "Book",
            src: "/category.jpeg"
        },
        {
            id: 3,
            name: "Travel",
            src: "/category.jpeg"
        },
        {
            id: 4,
            name: "React",
            src: "/category.jpeg"
        },
        {
            id: 5,
            name: "Light Reading",
            src: "/category.jpeg"
        },
        {
            id: 6,
            name: "Music",
            src: "/category.jpeg"
        }
    ]
    return (
        <div className={classes['blog-categories']}>
            {
                categories.map((category) => (
                    <div className={classes['category-box']} key={category.id}>
                        <p className={classes['category-name']}>{category.name}</p>
                        <Image src={category.src} width={100} height={100} layout="responsive" className={classes['category-image']} />

                    </div>
                ))
            }
            <Button text="View All" type="red" onClick={() => { }} />
        </div>
    );
};

export default BlogCategories;