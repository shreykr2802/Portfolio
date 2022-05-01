import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBlogStart } from "../../../redux/slices/adminSlice";
import { fetchBlogDataByIdStart } from "../../../redux/slices/blogSlice";
import { fetchPlainTagDataStart } from "../../../redux/slices/tagSlice";
import useSelector from "../../../utils/useSelector";
import ActionButtonContainer from "../../atoms/ActionButtonContainer/ActionButtonContainer";
import LabelAndInput from "../../atoms/LabelAndInput/LabelAndInput";
import LabelAndInputContainer from "../../atoms/LabelAndInputContainer/LabelAndInputContainer";
import MultiSelectLabelInput from "../../atoms/MultiSelectLabelInput/MultiSelectLabelInput";
import Button from "../../button/Button";
import classes from "./AdminUpdateBlog.module.scss";
import { v4 as uuidv4 } from "uuid";

interface IImage {
    base64: string | ArrayBuffer | null,
    priority: number,
    id: string
}

const AdminUpdateBlog = () => {

    const [title, setTitle] = useState<string>("");
    const [readTime, setReadTime] = useState<string>("");
    const [shortIntro, setShortIntro] = useState<string>("");
    const [content, setContents] = useState<string>("");
    const [blogId, setBlogId] = useState<number | undefined>();
    const [mainImage, setMainImage] = useState<any>(null);
    const [images, setImages] = useState<IImage[] | []>([]);
    const [namedRoute, setNamedRoute] = useState<String>("");
    const dispatch = useDispatch();
    const router = useRouter();

    const result = useSelector(state => state.admin.resultUpdateBlog);
    const tags = useSelector(state => state.tags.plainTags);
    const [selectedTags, setSelectedTags] = useState([]);
    const blogData = useSelector(state => state.blogs.blogData);

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

    const updateBlog = () => {
        const body = {
            title,
            read_time: readTime,
            short_intro: shortIntro,
            tags: selectedTags.map((tag: any) => tag.id),
            content,
            id: blogId,
            mainImage,
            images,
            namedRoute
        }
        dispatch(updateBlogStart(body));
    }

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

    const onSelect = (selectedList: any) => {
        setSelectedTags(selectedList);
    }

    const onRemove = (selectedList: any) => {
        setSelectedTags(selectedList);
    }

    const searchBlog = () => {
        dispatch(fetchBlogDataByIdStart(blogId));
    }

    useEffect(() => {
        if (blogData.id === Number(blogId)) {
            setTitle(blogData.title);
            setShortIntro(blogData.short_intro);
            setReadTime(blogData.read_time);
            setContents(blogData.content);
        } else {
            setTitle("");
            setShortIntro("");
            setReadTime("");
            setContents("");
        }
    }, [blogData, blogId])

    return <div className={classes['admin-newblog-container']}>
        <div className={classes['main-text-intro']}>
            <p>Update A Blog</p>
        </div>
        <div className={classes['search-container']}>
            <LabelAndInput name="Blog Id" type="text" value={blogId} setValue={setBlogId} />
            <Button type="other" text="Search" onClick={searchBlog} />
            {/* <Button type="other" text="Clear" onClick={clearSearch} /> */}
        </div>
        {(blogData.id === Number(blogId)) && <LabelAndInputContainer>
            <LabelAndInput name="Title" type="text" value={title} setValue={setTitle} />
            <LabelAndInput name="Named Route" type="text" value={namedRoute} setValue={setNamedRoute} />
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
            <ActionButtonContainer>
                <Button type="other" text="Update" onClick={updateBlog} />
                <Button type="other" text="Home" onClick={() => router.replace("/admin/home")} />
            </ActionButtonContainer>
        </LabelAndInputContainer>}
    </div>
}

export default AdminUpdateBlog;