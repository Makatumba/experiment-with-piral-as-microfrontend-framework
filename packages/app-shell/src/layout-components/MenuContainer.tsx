import * as React from 'react';

import { MenuContainerProps } from 'piral';
import { Link } from 'react-router-dom';

import { MenuItem } from './MenuItem';

export const defaultMenuItems = (
    <>
        <MenuItem type="general" meta={{}}>
            <Link to="/">Dashboard (app-shell-page)</Link>
        </MenuItem>
        <MenuItem type="general" meta={{}}>
            <Link to="/not-found">Not Found (app-shell-page)</Link>
        </MenuItem>
    </>
);

export const MenuContainer: React.FunctionComponent<MenuContainerProps> = (props) => {
    const { children } = props;
    const [collapsed, setCollapsed] = React.useState(true);
    return (
        <header>
            <nav className="navbar navbar-light  navbar-toggleable ng-white border-bottom box-shadow mb-3">
                <div className="container">
                    <h1>
                        <Link className="navbar-brand" to="/">
                            Experiment with Piral as a microfrontend framework
                        </Link>
                    </h1>
                    <button
                        aria-label="Toggle navigation"
                        type="button"
                        onClick={() => setCollapsed(!collapsed)}
                        className="navbar-toggler mr-2"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className={`collapse navbar-collapse  flex-sm-row-reverse ${collapsed ? '' : 'show'}`}
                        aria-expanded={!collapsed}
                    >
                        <ul className="navbar-nav flex-grow">
                            {children}
                            {defaultMenuItems}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
