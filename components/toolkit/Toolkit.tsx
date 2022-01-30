import HeadingText from "../heading/HeadingText";
import ToolkitDetail from "../toolkitDetail/ToolkitDetail";
import classes from "./Toolkit.module.scss";

const Toolkit = () => {

    const toolkits = [
        {
            name: "React",
            iconName: "logos:react",
            width: "100",
            height: "100"
        },
        {
            name: "CSS",
            iconName: "vscode-icons:file-type-css",
            width: "100",
            height: "100"
        },
        {
            name: "HTML",
            iconName: "logos:html-5",
            width: "100",
            height: "100"
        },
        {
            name: "SASS",
            iconName: "logos:sass",
            width: "100",
            height: "100"
        },
        {
            name: "React Native",
            iconName: "vscode-icons:file-type-reactts",
            width: "100",
            height: "100"
        },
        {
            name: "Express",
            iconName: "logos:express",
            width: "100",
            height: "100"
        },
        {
            name: "NextJs",
            iconName: "logos:nextjs",
            width: "100",
            height: "100"
        },
        {
            name: "Redux",
            iconName: "logos:redux",
            width: "100",
            height: "100"
        },
        {
            name: "Typescript",
            iconName: "logos:typescript-icon",
            width: "100",
            height: "100"
        },
        {
            name: "Tailwind",
            iconName: "logos:tailwindcss-icon",
            width: "100",
            height: "100"
        },
        {
            name: "Jest",
            iconName: "vscode-icons:file-type-jest-snapshot",
            width: "100",
            height: "100"
        },
        {
            name: "",
            iconName: "",
            width: "100",
            height: "100",
            show: false
        },
    ]

    return (
        <div className={classes['toolkit-container']}>
            <HeadingText type="red" text="My Toolkit?" />
            <div className={classes['detailed-toolkit']}>
                {
                    toolkits.map((toolkit: { name: string, iconName: string, width: string, height: string, show?: boolean }) => {
                        return (
                            <ToolkitDetail {...toolkit} key={toolkit.name} />
                        )
                    })
                }

            </div>
        </div>
    )
};

export default Toolkit;