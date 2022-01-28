import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowColorSideBar } from '../../../redux/slices/appSlice';
import useSelector from '../../../utils/useSelector';
import classes from './Header.module.scss';
import Image from "next/image";

const Header = () => {

    const selectedColor = useSelector((state) => state.app.colorSideBar);
    const dispatch = useDispatch();

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    }, []);

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