import AdminUpdateTag from "../../../components/admin/AdminUpdateTag/AdminUpdateTag";
import Header from "../../../components/header/Header";
import withAuth from "../../../utils/HOC/withAuth";

const UpdateTag = () => {
    return (
        <>
            <Header />
            <AdminUpdateTag />
        </>
    )
}

export default withAuth(UpdateTag);