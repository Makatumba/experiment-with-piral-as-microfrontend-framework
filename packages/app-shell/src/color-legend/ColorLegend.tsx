import * as React from 'react';

import { piletColors } from './colors';

export const ColorLegend = () => (
    <>
        <h1>Legend for pilet colors used in project</h1>
        <ul>
            {piletColors.map((pilet) => (
                <li key={`${pilet.color}-${pilet.piletName}`}>
                    <span style={{ backgroundColor: pilet.color }}>{pilet.piletName}</span>
                </li>
            ))}
        </ul>
    </>
);
