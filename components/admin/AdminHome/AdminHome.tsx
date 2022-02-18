import Link from "next/link";
import LinkAdminHome from "../../atoms/LinkForAdminHome/LinkAdminHome";
import classes from "./AdminHome.module.scss";

const AdminHome = () => {
    return (
        <>
            <div className={classes['admin-home-container']}>
                <div className={classes['main-text-intro']}>
                    <p>Create Data for Blog</p>
                </div>
                <LinkAdminHome name="Create new Blog" href="/admin/home/newblog" />
                <LinkAdminHome name="Create new Tag" href="/admin/home/newtag" />
                <LinkAdminHome name="Update a Blog" href="/admin/home/updateblog" />
                {/* <LinkAdminHome name="Update a Tag" href="/admin/home/updatetag" /> */}
            </div>
        </>
    )
}

export default AdminHome;