import * as React from 'react';

import {
  LayoutProps,
  Menu,
  Notifications,
  useAction,
  useGlobalState,
} from 'piral';

import { ColorLegend } from '../color-legend/ColorLegend';

export const AuthenticatedLayout: React.FunctionComponent<LayoutProps> = (props) => {
    const { children } = props;
    const user = useGlobalState((state) => state.user);
    const setUser = useAction('setUser');

    return (
        <div>
            <Notifications />
            <Menu type="general" />
            <pre>{JSON.stringify(user)}</pre>
            <button onClick={() => setUser(undefined, undefined, undefined)}>Logout {user?.firstName}</button>
            <ColorLegend />
            <div className="container">{children}</div>
        </div>
    );
};
