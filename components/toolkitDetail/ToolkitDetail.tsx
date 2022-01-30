import classes from "./ToolkitDetail.module.scss";
import { Icon } from '@iconify/react';

const ToolkitDetail = ({ name, iconName, width, height, show = true }: { name: string, iconName: string, width: string, height: string, show?: boolean }) => {
    return (
        <div className={`${classes['toolkit-detail-box']} ${!show ? classes['hidden-visibility'] : ''}`}>
            <Icon icon={iconName} width={width} height={height} />
            <p className={classes['toolkit-name']}>{name}</p>
        </div>
    )
};

export default ToolkitDetail;