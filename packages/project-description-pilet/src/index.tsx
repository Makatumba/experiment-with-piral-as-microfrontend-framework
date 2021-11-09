import * as React from 'react';

import { PiletApi } from 'app-shell';
import { Link } from 'react-router-dom';

import { ComponentOverview } from './ComponentOverview';

export function setup(app: PiletApi) {
    const style = { backgroundColor: app.getPiletColorCode() };

    app.registerMenu(() => (
        <Link style={style} to="/piral-ui-components-description">
            Piral ui Component Description (React)
        </Link>
    ));
    app.registerTile(
        () => (
            <Link style={style} to="/piral-ui-components-description">
                Piral ui Component Description (React)
            </Link>
        ),
        {
            initialColumns: 2,
            initialRows: 1,
        }
    );
    app.registerPage('/piral-ui-components-description', () => (
        <div style={style}>
            <ComponentOverview />
            <p>
                Hier geht es zurück <Link to="/">Übersicht zurück</Link>
            </p>
        </div>
    ));
}
