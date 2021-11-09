import { NotificationsHostProps } from 'piral';
import * as React from 'react';

export const NotificationsHost: React.FunctionComponent<NotificationsHostProps> = (props) => {
    const { children } = props;
    return <div className="notifications">{children}</div>;
};
