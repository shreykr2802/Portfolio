import AdminNewTag from "../../../components/admin/AdminNewTag/AdminNewTag";
import Header from "../../../components/header/Header";
import withAuth from "../../../utils/HOC/withAuth";

const NewTag = () => {
    return (
        <>
            <Header />
            <AdminNewTag />
        </>
    )
}

export default withAuth(NewTag);