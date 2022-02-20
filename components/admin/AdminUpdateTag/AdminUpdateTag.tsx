import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateATagStart } from "../../../redux/slices/adminSlice";
import { fetchPlainTagDataStart } from "../../../redux/slices/tagSlice";
import useSelector from "../../../utils/useSelector";
import ActionButtonContainer from "../../atoms/ActionButtonContainer/ActionButtonContainer";
import LabelAndInput from "../../atoms/LabelAndInput/LabelAndInput";
import LabelAndInputContainer from "../../atoms/LabelAndInputContainer/LabelAndInputContainer";
import Button from "../../button/Button";
import classes from "./AdminUpdateTag.module.scss";

const AdminUpdateTag = () => {

    const [name, setName] = useState<string>("");
    const [file, setFile] = useState<any>(null);
    const dispatch = useDispatch();
    const router = useRouter();
    const [id, setId] = useState<number | undefined>();

    const result = useSelector(state => state.admin.resultUpdateTag);
    const tags = useSelector(state => state.tags.plainTags);

    useEffect(() => {
        if (result.success) {
            router.replace("/admin/home")
        }
    }, [result])

    useEffect(() => {
        dispatch(fetchPlainTagDataStart())
    }, [])

    const updateATag = () => {
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file[0]);

            reader.onload = function () {
                dispatch(updateATagStart({ id, name: name, base64: reader.result, isAttachment: true }))
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        } else {
            dispatch(updateATagStart({ id, name: name, isAttachment: false }))
        }

    }

    const searchTag = () => {
        const tag = tags.find(tag => tag.id === Number(id))
        setName(tag.name);
    }

    return <div className={classes['admin-newtag-container']}>
        <div className={classes['main-text-intro']}>
            <p>Update A Tag</p>
        </div>
        <div className={classes['search-container']}>
            <LabelAndInput name="Tag Id" type="text" value={id} setValue={setId} />
            <Button type="other" text="Search" onClick={searchTag} />
            {/* <Button type="other" text="Clear" onClick={clearSearch} /> */}
        </div>
        <LabelAndInputContainer>
            <LabelAndInput name="Name" type="text" value={name} setValue={setName} />
            <LabelAndInput name="Image" type="file" value={file} setValue={setFile} />
            <ActionButtonContainer>
                <Button type="other" text="Update" onClick={updateATag} />
                <Button type="other" text="Home" onClick={() => router.replace("/admin/home")} />
            </ActionButtonContainer>
        </LabelAndInputContainer>
    </div>
}

export default AdminUpdateTag;