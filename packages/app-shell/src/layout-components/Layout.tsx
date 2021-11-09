import { LayoutProps, useActions, useGlobalState } from 'piral';
import * as React from 'react';
import { Redirect, Route, Routes, Switch } from 'react-router';
import { AuthenticatedLayout } from './AuthenticatedLayout';
import { Authentication } from './Authentication';

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const user = useGlobalState((state) => state.user);

    return (
        <>
            <Switch>
                <Route path="/authentication" component={Authentication} />
                <Route path="/">
                    <AuthenticatedLayout {...props} />
                </Route>
            </Switch>
            {user ? null : <Redirect to="/authentication" />}
        </>
    );
};
