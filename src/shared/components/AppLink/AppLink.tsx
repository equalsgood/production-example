import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {to, className, theme = AppLinkTheme.PRIMARY, children} = props;
    return (
        <Link to={to} className={classNames(cls['app-link'], {}, [cls[theme]])}>
            {children}
        </Link>
    );
};