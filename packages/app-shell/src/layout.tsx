import { ComponentsState, ErrorComponentsState } from 'piral';
import * as React from 'react';
import { Link } from 'react-router-dom';

import {
    DashboardContainer,
    DashboardTile,
    ErrorInfo,
    Layout,
    MenuContainer,
    MenuItem,
    NotificationsHost,
    NotificationsToast,
} from './layout-components';

export const errors: Partial<ErrorComponentsState> = {
    not_found: () => (
        <div>
            <p className="error">Could not find the requested page. Are you sure it exists?</p>
            <p>
                Go back <Link to="/">to the dashboard</Link>.
            </p>
        </div>
    ),
};

export const layout: Partial<ComponentsState> = {
    ErrorInfo,
    DashboardContainer,
    DashboardTile,
    Layout,
    MenuContainer,
    MenuItem,
    NotificationsHost,
    NotificationsToast,
};
