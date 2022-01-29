import { Icon } from "@iconify/react";
import classes from "./SocialMediaFooter.module.scss";

const SocialMediaLink = ({ iconName, height, width, link }: { iconName: string, height: string, width: string, link: string }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon icon={iconName} width={width} height={height} color="white" />
        </a>)
}

const SocialMediaFooter = () => {

    const socialMedias = [
        {
            name: "instagram",
            iconName: "bi:instagram",
            height: "50",
            width: "50",
            link: "https://instagram.com/shreykr2802"
        },
        {
            name: "linkedin",
            iconName: "bi:linkedin",
            height: "50",
            width: "50",
            link: "https://linkedin.com/in/shreykr2802"
        },
        {
            name: "github",
            iconName: "bi:github",
            height: "50",
            width: "50",
            link: "https://github.com/shreykr2802"
        },
        {
            name: "twitter",
            iconName: "bi:twitter",
            height: "50",
            width: "50",
            link: "https://twitter.com/shreykr2802"
        },
        {
            name: "mail",
            iconName: "bi:envelope",
            height: "50",
            width: "50",
            link: "mailto:shreykr2802@gmail.com"
        }
    ]

    return (
        <>
            <footer className={classes['footer-social-media']}>
                <p className={classes['text-social-media']}>I am Available on Social Media</p>
                <div className={classes['social-media-links']}>
                    {
                        socialMedias.map((socialMedia: { name: string, iconName: string, height: string, width: string, link: string }) => {
                            return (
                                <SocialMediaLink {...socialMedia} key={socialMedia.name} />
                            )
                        })
                    }
                </div>

            </footer>
            <div>
                <p className={classes['text-copyright']}>Created with <Icon icon="ant-design:heart-filled" height="12" width="12" color="#DC4040" />.
                    All Designs and rights reserved. Shrey Kumar<sup><Icon icon="ant-design:copyright-circle-outlined" height="12" width="12" color="#DC4040" /></sup></p>
            </div>
        </>
    )
};

export default SocialMediaFooter;