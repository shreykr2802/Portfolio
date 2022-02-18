import AdminUpdateBlog from "../../../components/admin/AdminUpdateBlog/AdminUpdateBlog";
import Header from "../../../components/header/Header";
import withAuth from "../../../utils/HOC/withAuth";

const UpdateBlog = () => {
    return (
        <>
            <Header />
            <AdminUpdateBlog />
        </>
    )
}

export default withAuth(UpdateBlog);