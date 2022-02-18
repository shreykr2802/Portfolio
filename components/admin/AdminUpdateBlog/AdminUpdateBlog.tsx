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

const AdminUpdateBlog = () => {

    const [title, setTitle] = useState<string>("");
    const [readTime, setReadTime] = useState<string>("");
    const [shortIntro, setShortIntro] = useState<string>("");
    const [content, setContents] = useState<string>("");
    const [blogId, setBlogId] = useState<number | undefined>();
    const [file, setFile] = useState<any>(null);
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

    // const createNewBlog = () => {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(file[0]);
    //     reader.onload = function () {
    //         dispatch(insertNewBlogStart({ name: name, base64: reader.result }))
    //     };
    //     reader.onerror = function (error) {
    //         console.log('Error: ', error);
    //     };
    // }

    const updateBlog = () => {
        const body = {
            title,
            read_time: readTime,
            short_intro: shortIntro,
            // tags: selectedTags.map((tag: any) => tag.id),
            tags: [100009, 100011, 100001],
            content,
            id: blogId
        }
        dispatch(updateBlogStart(body));
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
            <LabelAndInput name="Read Time" type="text" value={readTime} setValue={setReadTime} />
            <MultiSelectLabelInput name="Tags" onSelect={onSelect} onRemove={onRemove} selectedValue={selectedTags} tags={tags} />
            <LabelAndInput name="Short Intro" type="textarea" value={shortIntro} setValue={setShortIntro} />
            <LabelAndInput name="Content" type="textarea" value={content} setValue={setContents} />
            <ActionButtonContainer>
                <Button type="other" text="Update" onClick={updateBlog} />
                <Button type="other" text="Home" onClick={() => router.replace("/admin/home")} />
            </ActionButtonContainer>
        </LabelAndInputContainer>}
    </div>
}

export default AdminUpdateBlog;