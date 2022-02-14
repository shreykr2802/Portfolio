import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { insertNewTagStart } from "../../../redux/slices/adminSlice";
import useSelector from "../../../utils/useSelector";
import LabelAndInput from "../../atoms/LabelAndInput/LabelAndInput";
import LabelAndInputContainer from "../../atoms/LabelAndInputContainer/LabelAndInputContainer";
import Button from "../../button/Button";
import classes from "./AdminNewTag.module.scss";

const AdminNewTag = () => {

    const [name, setName] = useState<string>("");
    const [file, setFile] = useState<any>(null);
    const dispatch = useDispatch();
    const router = useRouter();

    const result = useSelector(state => state.admin.result);

    useEffect(() => {
        if (result.success) {
            router.replace("/admin/home")
        }
    }, [result])

    const createNewTag = () => {
        var reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = function () {
            dispatch(insertNewTagStart({ name: name, base64: reader.result }))
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    return <div className={classes['admin-newtag-container']}>
        <div className={classes['main-text-intro']}>
            <p>Add New Tag</p>
        </div>
        <LabelAndInputContainer>
            <LabelAndInput name="Name" type="text" value={name} setValue={setName} />
            <LabelAndInput name="Image" type="file" value={file} setValue={setFile} />
            <Button type="other" text="Create" onClick={createNewTag} />
        </LabelAndInputContainer>
    </div>
}

export default AdminNewTag;