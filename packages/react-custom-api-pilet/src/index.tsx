import * as React from 'react';
import { useState } from 'react';

import { PiletApi } from 'app-shell';
import { Link } from 'react-router-dom';

export function setup(app: PiletApi) {
    const style = { backgroundColor: app.getPiletColorCode() };

    app.registerMenu(() => (
        <Link style={style} to="/react-custom-api">
            CustomApi (React)
        </Link>
    ));
    app.registerTile(
        () => (
            <Link style={style} to="/react-custom-api">
                CustomApi (React)
            </Link>
        ),
        {
            initialColumns: 2,
            initialRows: 1,
        }
    );

    app.registerPage('/react-custom-api', () => {
        const [apiAnswer, setAnswer] = useState();
        const onRunCustomApi = () => setAnswer(app.customApiStuff('React'));
        return (
            <div style={style}>
                <button onClick={onRunCustomApi}>runCustomApi</button>
                {apiAnswer ? <pre>{apiAnswer}</pre> : null}
            </div>
        );
    });
}
