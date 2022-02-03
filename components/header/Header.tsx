import classes from './Header.module.scss';
import Image from "next/image";
import Link from 'next/link';

const Header = () => {

    return (
        <header className={classes['header']}>
            <Link href="/">
                <Image src="/Shrey-logo.png" alt="Shrey Kumar" width="268px" height="72px" className={classes['logo-image']} />
            </Link>
            <div className={classes['header-links']}>
                <Link href="/">Home</Link>
                <Link href="/#AboutSection">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/#ContactSection">Contact</Link>
            </div>
        </header>
    );
}

export default Header;