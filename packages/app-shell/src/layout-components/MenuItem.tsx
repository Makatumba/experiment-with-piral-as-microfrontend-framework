import { MenuItemProps } from 'piral';
import * as React from 'react';

export const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    const { children } = props;
    return <li className="nav-item">{children}</li>;
};
