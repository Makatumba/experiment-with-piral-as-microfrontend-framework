import * as React from 'react';

import {
  ExtensionSlot,
  useAction,
  useGlobalState,
} from 'piral';
import { Redirect } from 'react-router';

import { ColorLegend } from '../color-legend/ColorLegend';

export const Authentication: React.FunctionComponent = () => {
    const user = useGlobalState((state) => state.user);
    const setUser = useAction('setUser');
    const setUserData = (user) => {
        setUser(user, undefined, undefined);
    };
    if (user) {
        return <Redirect to="/" />;
    }
    return (
        <>
            <ExtensionSlot name="authentication" params={{ setUserData, user }} />
            <ColorLegend />
        </>
    );
};
