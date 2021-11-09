import { NotificationsToastProps } from 'piral';
import * as React from 'react';

export const NotificationsToast: React.FunctionComponent<NotificationsToastProps> = (props) => {
    const { options, onClose, children } = props;
    return (
        <div className={`notification-toast ${options.type}`}>
            <div className="notification-toast-details">
                {options.title && <div className="notification-toast-title">{options.title}</div>}
                <div className="notification-toast-description">{children}</div>
            </div>
            <div className="notification-toast-close" onClick={onClose} />
        </div>
    );
};
