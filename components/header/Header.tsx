import classes from './Header.module.scss';
import Image from "next/image";

const Header = () => {

    return (
        <header className={classes['header']}>
            <Image src="/Shrey-logo.png" alt="Shrey Kumar" width="268px" height="72px" />
            <div className={classes['header-links']}>
                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        </header>
    );
}

export default Header;