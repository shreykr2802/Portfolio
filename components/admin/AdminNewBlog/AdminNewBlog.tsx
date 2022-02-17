import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { insertNewBlogStart } from "../../../redux/slices/adminSlice";
import { fetchTagDataStart } from "../../../redux/slices/tagSlice";
import useSelector from "../../../utils/useSelector";
import ActionButtonContainer from "../../atoms/ActionButtonContainer/ActionButtonContainer";
import LabelAndInput from "../../atoms/LabelAndInput/LabelAndInput";
import LabelAndInputContainer from "../../atoms/LabelAndInputContainer/LabelAndInputContainer";
import Button from "../../button/Button";
import classes from "./AdminNewBlog.module.scss";

const AdminNewBlog = () => {

    const [title, setTitle] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [readTime, setReadTime] = useState<string>("");
    const [shortIntro, setShortIntro] = useState<string>("");
    const [content, setContents] = useState<string>("");
    const [file, setFile] = useState<any>(null);
    const dispatch = useDispatch();
    const router = useRouter();

    const result = useSelector(state => state.admin.resultBlog);
    const tags = useSelector(state => state.tags.tags);

    useEffect(() => {
        if (result.success) {
            router.replace("/admin/home")
        }
    }, [result]);

    useEffect(() => {
        if (!tags.length) {
            dispatch(fetchTagDataStart());
        }
    }, [])

    const createNewBlog = () => {
        var reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = function () {
            dispatch(insertNewBlogStart({ name: name, base64: reader.result }))
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    return <div className={classes['admin-newblog-container']}>
        <div className={classes['main-text-intro']}>
            <p>Add New Blog</p>
        </div>
        <LabelAndInputContainer>
            <LabelAndInput name="Title" type="text" value={title} setValue={setTitle} />
            <LabelAndInput name="Name" type="text" value={name} setValue={setName} />
            <LabelAndInput name="Read Time" type="number" value={readTime} setValue={setReadTime} />
            <LabelAndInput name="Short Intro" type="textarea" value={shortIntro} setValue={setShortIntro} />
            <LabelAndInput name="Content" type="textarea" value={content} setValue={setContents} />
            <ActionButtonContainer>
                <Button type="other" text="Create" onClick={createNewBlog} />
                <Button type="other" text="Home" onClick={() => router.replace("/admin/home")} />
            </ActionButtonContainer>
        </LabelAndInputContainer>
    </div>
}

export default AdminNewBlog;