import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { insertNewBlogStart } from "../../../redux/slices/adminSlice";
import { fetchPlainTagDataStart } from "../../../redux/slices/tagSlice";
import { formatDateTime } from "../../../utils/dateTimeUtil";
import useSelector from "../../../utils/useSelector";
import ActionButtonContainer from "../../atoms/ActionButtonContainer/ActionButtonContainer";
import LabelAndInput from "../../atoms/LabelAndInput/LabelAndInput";
import LabelAndInputContainer from "../../atoms/LabelAndInputContainer/LabelAndInputContainer";
import MultiSelectLabelInput from "../../atoms/MultiSelectLabelInput/MultiSelectLabelInput";
import Button from "../../button/Button";
import classes from "./AdminNewBlog.module.scss";
import { v4 as uuidv4 } from "uuid";

interface IImage {
    base64: string | ArrayBuffer | null,
    priority: number,
    id: string
}

const AdminNewBlog = () => {

    const [title, setTitle] = useState<string>("");
    const [readTime, setReadTime] = useState<string>("");
    const [shortIntro, setShortIntro] = useState<string>("");
    const [content, setContents] = useState<string>("");
    const [displayContent, setDisplayContents] = useState<string>("");
    const [mainImage, setMainImage] = useState<any>(null);
    const [images, setImages] = useState<IImage[] | []>([]);
    const dispatch = useDispatch();
    const router = useRouter();

    const result = useSelector(state => state.admin.resultBlog);
    const tags = useSelector(state => state.tags.plainTags);
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        if (result.success) {
            router.replace("/admin/home")
        }
    }, [result]);

    useEffect(() => {
        if (!tags.length) {
            dispatch(fetchPlainTagDataStart());
        }
    }, [])

    const setBase64MainImage = (files: any) => {
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            setMainImage(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const createNewBlog = () => {
        const body = {
            title,
            read_time: readTime,
            short_intro: shortIntro,
            tags: selectedTags.map((tag: any) => tag.id),
            content,
            mainImage,
            images
        }
        dispatch(insertNewBlogStart(body));
    }

    const onSelect = (selectedList: any) => {
        setSelectedTags(selectedList);
    }

    const onRemove = (selectedList: any) => {
        setSelectedTags(selectedList);
    }

    const addImageSection = () => {
        const imgs = [
            ...images,
            {
                base64: "",
                priority: images.length + 2,
                id: uuidv4()
            }
        ]
        setImages(imgs);
    }

    const setBase64Image = (img: IImage, files: any) => {
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            const newImage: IImage = {
                ...img,
                base64: reader.result
            }
            const newImages = images.map((image: IImage) => image.id === img.id ? newImage : image)
            setImages(newImages);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const setContentWithImage = () => {
        let oriContent = content;
        for (let i = 0; i < images.length; i++) {
            oriContent = oriContent.replace(`{{image ${i + 2}}}`, `<div style='width: 100%; height: 100%;'><img  style='width: 100%; height: 100%;' src=${images[i].base64} /></div>`);
        }
        setDisplayContents(oriContent);
    }

    return (
        <div className={classes['container']}>
            <div className={classes['admin-newblog-container']}>
                <div className={classes['main-text-intro']}>
                    <p>Add New Blog</p>
                </div>
                <LabelAndInputContainer>
                    <LabelAndInput name="Title" type="text" value={title} setValue={setTitle} />
                    <LabelAndInput name="Read Time" type="text" value={readTime} setValue={setReadTime} />
                    <MultiSelectLabelInput name="Tags" onSelect={onSelect} onRemove={onRemove} selectedValue={selectedTags} tags={tags} />
                    <LabelAndInput name="Short Intro" type="textarea" value={shortIntro} setValue={setShortIntro} />
                    <LabelAndInput name="Main Image" type="file" value={mainImage} setValue={setBase64MainImage} />
                    <Button type="other" text="Add Image" onClick={addImageSection} />
                    {
                        images.map((image, index) => {
                            return <span key={image.id}><LabelAndInput name={`Image ${index + 2}`} type="file" value={image.base64} setValue={(files: any) => setBase64Image(image, files)} /></span>
                        })
                    }
                    <LabelAndInput name="Content" type="textarea" value={content} setValue={setContents} />
                    <button className={classes['check-button']} type="button" onClick={setContentWithImage}>Check</button>
                    <ActionButtonContainer>
                        <Button type="other" text="Create" onClick={createNewBlog} />
                        <Button type="other" text="Home" onClick={() => router.replace("/admin/home")} />
                    </ActionButtonContainer>
                </LabelAndInputContainer>
            </div>
            <div className={classes['admin-newblog-container']}>
                <div className={classes['main-text-intro']}>
                    <p>Live Preview - Blog</p>
                </div>
                <div className={classes['main-text-intro-blog']}>
                    <p><span className={classes['blog-title']}>{title}</span> - <small className={classes['days-posted']}><i>{readTime} min read</i></small></p>
                    <p><small className={classes['days-posted']}>{formatDateTime(new Date())}</small></p>
                </div>
                <div className={classes['blog-detail-main-image']} >
                    {mainImage && <Image src={mainImage} height={100} width={100} layout="fill" objectFit="cover" />}
                </div>
                <div className={classes['blog-detail-main-text']} dangerouslySetInnerHTML={{ __html: displayContent }}>
                    {/* <p >{blog.content}</p> */}
                </div>
            </div>
        </div>
    )
}

export default AdminNewBlog;