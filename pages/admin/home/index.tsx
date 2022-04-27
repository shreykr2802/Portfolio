import AdminHome from "../../../components/admin/AdminHome/AdminHome";
import Header from "../../../components/header/Header";
import withAuth from "../../../utils/HOC/withAuth";

const Home = () => {
    return (
        <>
            <Header />
            <AdminHome />
        </>
    )
}

export default withAuth(Home);