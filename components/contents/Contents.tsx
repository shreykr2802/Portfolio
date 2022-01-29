import classes from './Contents.module.scss';
import Image from 'next/image';
import Button from '../button/Button';
import { Icon } from '@iconify/react';

const Contents = () => {
    return (
        <div className={classes['contents-container']}>
            <div className={classes['intro-section']}>
                <h1 className={classes['hello-text']}>Hi there <br /> I am Shrey</h1>
                <div className={classes['button-home-section']}>
                    <Button type="red" text="Reach Out" />

                    {/* @ts-ignore */}
                    <div className={classes['scroll-down']}>
                        <Icon icon="bi:mouse-fill" fontSize="30" color="black" />
                        <p className={classes['scroll-down-text']}>Scroll Down</p>
                    </div>
                </div>
            </div>
            <div className={classes['image-section']}>
                <Image src="/Shrey-Home.png" alt="Shrey" width="453px" height="678px" />
            </div>
        </div>
    )
};

export default Contents;