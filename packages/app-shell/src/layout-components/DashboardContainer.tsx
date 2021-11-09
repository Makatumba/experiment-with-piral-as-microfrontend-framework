import { DashboardContainerProps, ExtensionSlot, useGlobalState } from 'piral';
import * as React from 'react';

export const DashboardContainer: React.FunctionComponent<DashboardContainerProps> = (props) => {
    const { children } = props;
    const user = useGlobalState((state) => state.user);
    return (
        <div>
            <h1>Hello, {user?.firstName}</h1>
            <div className="tiles">{children}</div>
        </div>
    );
};
