import Link from "next/link";
import classes from "./LinkAdminHome.module.scss";

const LinkAdminHome = ({ name, href }: { name: string, href: string }) => {
    return (
        <Link href={href}>
            <h3 className={classes['link-admin-home']}>{name}</h3>
        </Link>
    )
}

export default LinkAdminHome;