import Link from "next/link"

const LinkAdminHome = ({ name, href }: { name: string, href: string }) => {
    return (
        <Link href={href}>
            <h3>{name}</h3>
        </Link>
    )
}

export default LinkAdminHome;