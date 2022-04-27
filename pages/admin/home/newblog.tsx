import AdminNewBlog from "../../../components/admin/AdminNewBlog/AdminNewBlog";
import Header from "../../../components/header/Header";
import withAuth from "../../../utils/HOC/withAuth";

const NewBlog = () => {
    return (
        <>
            <Header />
            <AdminNewBlog />
        </>
    )
}

export default withAuth(NewBlog);